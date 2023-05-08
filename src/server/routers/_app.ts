import { hashSync } from "bcrypt";
import { z } from "zod";
import client from "~/prisma/client";
import { isPasswordSecure, validateEmail } from "~/utils/secure";
import { procedure, router } from "../trpc";

const UnauthorizedError = new Error("Unauthorized");

export const appRouter = router({
  create: procedure
    .input(
      z.object({
        name: z.string().min(3).max(64),
        description: z.string().min(10).max(512),
      })
    )
    .query(async ({ input, ctx }) => {
      if (!ctx.session?.user) {
        throw UnauthorizedError;
      }
      const userId = +ctx.session.user.id;
      const random = Math.random() * 999;
      return await client.org.create({
        data: {
          name: input.name,
          content: input.description,
          media: `https://picsum.photos/900/500?random=${random}`,
          users: {
            create: {
              role: "Admin",
              userId: userId,
            },
          },
        },
      });
    }),
  register: procedure
    .input(
      z.object({
        name: z.string().min(1).max(42),
        // Custom validator to ensure email is not only valid but also not re-used
        email: z
          .string()
          .email()
          .refine(
            async (val) => {
              const email = validateEmail(val);
              if (email === false) {
                return false;
              }
              const possibleMatch = await client.user.findUnique({
                where: {
                  email,
                },
              });
              return possibleMatch === null;
            },
            { message: "email already in use" }
          ),
        // Custom validator to ensure password is strong enough
        password: z
          .string()
          .min(4)
          .max(128)
          .refine(
            (val) => {
              return isPasswordSecure(val);
            },
            { message: "password is weak" }
          ),
      })
    )
    .query(async ({ input }) => {
      const { email, name } = input;
      const password = hashSync(input.password, 10);
      return await client.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

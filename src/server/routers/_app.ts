import { hashSync } from "bcrypt";
import { z } from "zod";
import client from "~/prisma/client";
import { isPasswordSecure, validateEmail } from "~/utils/secure";
import { procedure, router } from "../trpc";

export const appRouter = router({
  register: procedure
    .input(
      z.object({
        name: z.string().min(1).max(42),
        // Custom validator to ensure email is not only valid but also not re-used
        email: z.string().email().refine( async (val) => {
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
        }, { message: 'email already in use' }),
        // Custom validator to ensure password is strong enough
        password: z.string().min(4).max(128).refine( (val) => {
          return isPasswordSecure(val);
        }, { message: 'password is weak'}),
      })
    )
    .query( async ({ input }) => {
      const { email , name } = input;
      const password = hashSync(input.password, 10);
      return await client.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    })
});

// export type definition of API
export type AppRouter = typeof appRouter;

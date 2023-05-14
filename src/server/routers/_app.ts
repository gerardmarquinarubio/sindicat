import { hashSync } from "bcrypt";
import { z } from "zod";
import client from "~/prisma/client";
import { isPasswordSecure, validateEmail } from "~/utils/secure";
import { procedure, router } from "../trpc";
import { PostType } from "@prisma/client";

const UnauthorizedError = new Error("Unauthorized");

export const appRouter = router({
  getPosts: procedure
    .input(
      z.object({
        org: z.number(),
        type: z.string(),
      })
    )
    .query(async ({ input }) => {
      return await client.post.findMany({
        where: {
          orgId: input.org,
          type: input.type === "all" ? undefined : (input.type as PostType),
        },
      });
    }),
  createPost: procedure
    .input(
      z.object({
        type: z
          .string()
          .refine((value) => Object.keys(PostType).includes(value)),
        name: z.string().min(3),
        content: z.string(),
        org: z.number(),
        media: z.string().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      if (!ctx?.session?.user) {
        throw UnauthorizedError;
      }
      if (!ctx.session.user.orgs.find((o) => o.orgId === input.org)) {
        throw UnauthorizedError;
      }
      const { type, name, content, media } = input;
      const now = Date.now();
      const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000;
      const inTwoWeeks = now + twoWeeksInMs;
      return await client.post.create({
        data: {
          type: type as PostType,
          name: name,
          content: content,
          closesAt: new Date(inTwoWeeks),
          media: media,
          author: {
            connect: {
              id: +ctx.session.user.id,
            },
          },
          org: {
            connect: {
              id: input.org,
            },
          },
        },
      });
    }),
  searchOrgs: procedure
    .input(
      z.object({
        search: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { search } = input;
      if (!search) {
        return await client.org.findMany({});
      } else
        return await client.org.findMany({
          where: {
            name: {
              search,
            },
          },
        });
    }),
  deleteOrg: procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      if (!ctx.session?.user) {
        throw UnauthorizedError;
      }
      const { id } = input;
      const orgToDelete = await client.org.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          users: {
            where: {
              role: "Admin",
              userId: +ctx.session.user.id,
            },
          },
        },
      });
      const [self] = orgToDelete.users;
      if (!self) {
        throw UnauthorizedError;
      } else {
        const deleteUsersInOrg = client.usersOnOrg.deleteMany({
          where: {
            orgId: id,
          },
        });
        const deletePostsInOrg = client.post.deleteMany({
          where: {
            orgId: id,
          },
        });
        const deleteOrg = client.org.delete({
          where: {
            id,
          },
        });
        return await client.$transaction([
          deletePostsInOrg,
          deleteUsersInOrg,
          deleteOrg,
        ]);
      }
    }),
  createOrg: procedure
    .input(
      z.object({
        name: z.string().min(3).max(64),
        description: z.string().min(10).max(512),
        logo: z.string().min(5),
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
          media: input.logo,
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

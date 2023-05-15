import { hashSync } from "bcrypt";
import { z } from "zod";
import client from "~/prisma/client";
import { isPasswordSecure, validateEmail } from "~/utils/secure";
import { procedure, router } from "../trpc";
import { PostType } from "@prisma/client";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import prisma from "~/prisma/client";

const UnauthorizedError = new Error("Unauthorized");

export const appRouter = router({
  createInteraction: procedure
    .input(
      z.object({
        content: z.string(),
        post: z.number(),
        type: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      if (!ctx?.session?.user) {
        throw UnauthorizedError;
      }
      return await client.interaction.create({
        data: {
          type: input.type as "Comment" | "Reaction",
          content: input.content,
          createdAt: new Date().toISOString(),
          post: {
            connect: {
              id: input.post,
            },
          },
          author: {
            connect: {
              id: +ctx.session.user.id,
            },
          },
        },
        include: {
          author: true,
        },
      });
    }),
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
        include: {
          author: true,
          interaction: {
            include: {
              author: true,
            },
          },
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
      return await client.post.create({
        data: {
          type: type as PostType,
          name: name,
          content: content,
          media: media,
          createdAt: new Date().toISOString(),
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
        const deleteInteractionsInOrg = client.interaction.deleteMany({
          where: {
            post: {
              orgId: id,
            },
          },
        });
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
          deleteInteractionsInOrg,
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
      return await client.org.create({
        data: {
          name: input.name,
          content: input.description,
          media: input.logo,
          createdAt: new Date().toISOString(),
          users: {
            create: {
              role: "Admin",
              userId: userId,
            },
          },
        },
      });
    }),
  updateUser: procedure
    .input(
      z.object({
        name: z.string(),
        bio: z.string(),
        media: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      if (!ctx.session?.user) {
        throw UnauthorizedError;
      }
      const { name, bio, media } = input;
      return await prisma.user.update({
        where: {
          id: +ctx.session.user.id,
        },
        data: {
          content: bio,
          media,
          name,
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
          createdAt: new Date().toISOString(),
        },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

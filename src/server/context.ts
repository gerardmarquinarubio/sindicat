import { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getServerSession } from "next-auth";
import { authOptions } from '~/pages/api/auth/[...nextauth]';

export async function createContext(ctx: CreateNextContextOptions) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  return {
    session
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
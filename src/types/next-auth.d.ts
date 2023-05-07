// added here follwing https://next-auth.js.org/getting-started/typescript#extend-default-interface-properties

import NextAuth, { DefaultSession } from "next-auth";
import type { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  interface User extends PrismaUser{};
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends PrismaUser{};
}

// added here follwing https://next-auth.js.org/getting-started/typescript#extend-default-interface-properties

import type { User as PrismaUser } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User extends PrismaUser{};
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends PrismaUser{};
}

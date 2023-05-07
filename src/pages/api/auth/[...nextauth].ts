import { compareSync } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import client from "~/prisma/client";
import { isPasswordSecure, validateEmail } from "~/utils/secure";

if (
  !process.env.GOOGLE_SECRET ||
  !process.env.GOOGLE_ID ||
  !process.env.GITHUB_SECRET ||
  !process.env.GITHUB_ID ||
  !process.env.LINKEDIN_SECRET ||
  !process.env.LINKEDIN_ID
) {
  throw new Error("providers not set in .env");
}

export default NextAuth({
  // Custom callback to merge token and user types
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...user, ...token };
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user = { ...token, id: `${token.id}` };
      }
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientSecret: process.env.GOOGLE_SECRET!,
      clientId: process.env.GOOGLE_ID!,
    }),
    GithubProvider({
      clientSecret: process.env.GITHUB_SECRET!,
      clientId: process.env.GITHUB_ID!,
    }),
    LinkedinProvider({
      clientSecret: process.env.LINKEDIN_SECRET!,
      clientId: process.env.LINKEDIN_ID!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username",
          type: "text",
          placeholder: "johndoe@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) throw new Error("no credentials to log in as");
          const { email: rawEmail, password } = credentials;
          const email = validateEmail(rawEmail);
          if (email === false) throw new Error("email is not valid");
          if (!isPasswordSecure(password))
            throw new Error("password is not secure enough");
          const { password: hashedPassword, ...user } =
            await client.user.findUniqueOrThrow({
              where: {
                email,
              },
              include: {
                orgs: true
              }
            });
          if (!compareSync(password, hashedPassword))
            throw new Error("invalid credentials");
          return user as any; // fix for https://github.com/nextauthjs/next-auth/issues/2701
        } catch (ignored) {
          return null;
        }
      },
    }),
  ],
});

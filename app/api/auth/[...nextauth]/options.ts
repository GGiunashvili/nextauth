import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "enter username",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "enter password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        const user = {
          id: "1",
          name: "beqa",
          password: "beqa123",
          email: "beqa@gmail.com",
          age: 21,
        };

        if (
          credentials?.username == user.name &&
          credentials?.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, profile, trigger, session }) {
      if (trigger === "update") {
        token.name = session.name;
      }
      if (profile) {
        return { ...token, ...profile };
      } else {
        return { ...token, ...user };
      }
    },

    async session({ token, session }) {
      session.user = token as {
        id: number;
        name: string;
        password: string;
        email: string;
        age: number;
      };
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
    newUser: "/new-user",
  },
};

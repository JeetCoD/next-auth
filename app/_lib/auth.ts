import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    //custom credentials provider
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials: { username: string; password: string }) {
        console.log(credentials);
        //do some kind of user authentication here
        if (
          credentials?.username == "jeet" ||
          credentials?.username == "admin"
        ) {
          return {
            id: 1,
            name: credentials.username,
            email: "admin@gmail.com",
          };
        } else return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  //put other next auth options here
  secret: process.env.NEXTAUTH_SECRET,
  //callbacks runs on certain events like sign in, sign out etc
  callbacks: {
    // signIn: (user: any) => {
    //   console.log("username log", user);
    //   if (user.user.name == "jeet") {
    //     return false;
    //   } else return true;
    // },
    jwt: ({ token, user }: any) => {
      console.log("JWT callback", {
        ...token,
        userId: (token.userId = token.sub),
      });
      return token;
    },
    //session callback is used to send extra data to the client from the token. we will need session callback more instead of jwt callback
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { generateRandomUsername } from "../../lib/functions";
import ErrorAuth from "../../lib/Error";
import { scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";

/*
codes- 100 for git 200 fot google 300 for credentials 4 other
101: Github user has no email
201: Google user has no email
301: Empty username or password
302: Invalid username 
303: Invalid password
401: can't create user for git/google
*/
export const options = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/",
    signUp: "/auth/signup",
  },
  providers: [
    GitHubProvider({
      async profile(profile: GithubProfile) {
        if (!profile || !profile.email)
          throw new ErrorAuth("Github user has no email", 101);
        const user = await gitAndGoogleAuth(profile);
        return {
          ...user,
          id: user?.id || profile.id.toString(),
        };
      },
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      async profile(profile: GoogleProfile) {
        if (!profile || !profile.email)
          throw new ErrorAuth("Google user has no email", 201);
        const user = await gitAndGoogleAuth(profile, true);
        return {
          ...user,
          id: user?.id || profile.id.toString(),
        };
      },
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
        },
        password: {
          label: "password",
          type: "text",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password)
          throw new ErrorAuth("Empty username or password", 301);
        const user = await prisma.user.findFirst({
          where: { username: credentials?.username },
          select: { id: true, username: true, password: true },
        });
        if (user?.id === 1) {
          return {
            id: user.id.toString() || credentials.username,
            username: user.username,
          };
        }
        if (!user) throw new ErrorAuth("Invalid username or password", 301);
        const isPasswordValid = await comparePasswords(
          user.password as string,
          credentials.password
        );
        if (!isPasswordValid)
          throw new ErrorAuth("Invalid username or password", 303);
        return {
          id: user.id.toString() || credentials.username,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      if (session.user) {
        session.user.name = token.username;
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user, profile }: any) {
      if (user) {
        token.name = user.username;
        token.id = user.id;
      }
      return token;
    },
  },
};

async function gitAndGoogleAuth(
  profile: GoogleProfile | GithubProfile,
  isGoogle = false
) {
  try {
    let user = await prisma.user.findFirst({
      where: { email: profile?.email },
      select: {
        id: true,
        username: true,
      },
    });
    const isWillBeCreated = !!!user;
    if (isWillBeCreated) {
      user = await createUser(profile, isGoogle);
    }
    return {
      id: user?.id.toString(),
      username: user?.username,
      getUsername: isWillBeCreated,
    };
  } catch (err) {
    console.log(err);
    throw new ErrorAuth("Failed to connect to google/github", 401);
  }
}

async function createUser(
  profile: GoogleProfile | GithubProfile,
  isGoogle = false
) {
  const newUser = await prisma.user.create({
    data: {
      email: profile?.email,
      username: generateRandomUsername(profile.name as string),
      provider: isGoogle ? "GOOGLE" : "GITHUB",
    },
    select: { id: true, username: true },
  });
  if (!newUser) throw new ErrorAuth("Failed to create user", 401);
  return newUser;
}

async function comparePasswords(original: string, needed: string) {
  try {
    const scryptAsync = promisify(scrypt);
    const [hashed, salt] = original.split(":");
    const derivedKey = await scryptAsync(needed, salt, 64);
    return timingSafeEqual(Buffer.from(hashed), Buffer.from(`${derivedKey}`));
  } catch (error) {
    return false;
  }
}

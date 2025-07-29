import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthClient } from "better-auth/react";
import { reactStartCookies } from "better-auth/react-start";
import { db } from "~/db/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [reactStartCookies()],
});

export const { signIn, signUp, useSession } = createAuthClient();

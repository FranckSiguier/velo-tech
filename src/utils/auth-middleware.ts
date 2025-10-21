import { createMiddleware } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { getSession } from "./auth-client";
import { redirect } from "@tanstack/react-router";

export const authMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const session = await getSession({
      fetchOptions: {
        headers: getRequestHeaders(),
      },
    });
    if (!session.data) {
      throw redirect({
        to: "/sign-in",
      });
    }
    return next({
      context: {
        session,
      },
    });
  }
);

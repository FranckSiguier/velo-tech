import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "~/utils/auth-middleware";

export const getUserSession = createServerFn({
  method: "GET",
})
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return {
      user: context.session,
    };
  });

import type { Route } from "@endpts/types";

export default {
  method: "GET",
  path: "/users",
  async handler(req) {
    const name = req.query.get("name") || "stranger";

    return new Response(`Hello! :)`);
  },
} satisfies Route;

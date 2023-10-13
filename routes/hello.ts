import type { Route } from "@endpts/types";

export default {
  method: "GET",
  path: "/hello/yc",
  async handler(req) {
    const name = req.query.get("name") || "stranger";

    return new Response(`Hello, YC!`);
  },
} satisfies Route;

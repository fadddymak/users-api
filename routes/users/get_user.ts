import type { Route } from "@endpts/types";
import {greet} from '../../lib/greet'

export default {
  method: "GET",
  path: "/users",
  async handler(req) {
    const name = req.query.get("name") || "stranger";
    greet()
    return new Response(`Hello! :)`);
  },
} satisfies Route;

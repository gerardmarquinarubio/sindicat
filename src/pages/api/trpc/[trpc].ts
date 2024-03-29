import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter as router } from "~/server/routers/_app";
import { createContext } from "~/server/context";

// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router,
  createContext,
});

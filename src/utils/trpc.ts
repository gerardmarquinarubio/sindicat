import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../server/routers/_app";

function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});

export function TRPCErrorToMessage(error: Error): Record<string, string> {
  try {
    const errorBody = `${error}`.split("TRPCClientError:")[1];
    const errorPayload: {
      message: string;
      path: string[];
    }[] = JSON.parse(errorBody) as any;
    const errorMessages: Record<string, string> = {};
    for (const error of errorPayload) {
      for (const path of error.path) {
        errorMessages[path] = `${error.message} ${errorMessages[path] ?? ""}`;
      }
    }
    return errorMessages;
  } catch (e) {
    console.error(e);
    return { error: "unpexpected error" };
  }

}
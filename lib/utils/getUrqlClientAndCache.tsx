import {
  cacheExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange
} from "@urql/core";
import { initUrqlClient } from "next-urql";

export function getUrqlClientAndCache() {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url: process.env.API_ENDPOINT,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );
  return { client, ssrCache };
}

import SnippetGrid from "components/snippet/grid";
import { usePublicSnippetsQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";

function PublicSnippets() {
  const [{ data }] = usePublicSnippetsQuery();
  return <SnippetGrid snippets={data?.snippets} />;
}

export default withUrqlClient((_ssr) => ({ url: process.env.API_ENDPOINT ?? "/api" }), {
  ssr: true,
})(PublicSnippets);

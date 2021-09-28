import SnippetGrid from "components/snippet/grid";
import { usePublicSnippetsQuery } from "generated/graphql";
import React from "react";

export default function PublicSnippets() {
  const [{ data }] = usePublicSnippetsQuery();
  return <SnippetGrid snippets={data?.snippets} />;
}

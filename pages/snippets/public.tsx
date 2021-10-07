import { Container } from "@mui/material";
import SnippetGrid, { SnippetGridSkeleton } from "components/snippet/grid";
import { usePublicSnippetsQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";

function PublicSnippets() {
  const [{ data, fetching }] = usePublicSnippetsQuery();
  return (
    <Container maxWidth="xl">
      {fetching && <SnippetGridSkeleton size={8}/>}
      <SnippetGrid snippets={data?.snippets} />
    </Container>
  );
}

export default withUrqlClient(
  (_ssr) => ({ url: process.env.API_ENDPOINT ?? "/api" }),
  {
    ssr: true,
  }
)(PublicSnippets);

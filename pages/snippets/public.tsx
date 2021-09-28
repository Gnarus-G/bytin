import { Container } from "@mui/material";
import SnippetGrid from "components/snippet/grid";
import { usePublicSnippetsQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";

function PublicSnippets() {
  const [{ data }] = usePublicSnippetsQuery();
  return (
    <Container maxWidth="xl">
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

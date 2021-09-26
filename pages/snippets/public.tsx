import { Grid } from "@mui/material";
import SnippetCard from "components/snippet/card";
import { usePublicSnippetsQuery } from "generated/graphql";
import React from "react";

export default function PublicSnippets() {
  const [{ data }] = usePublicSnippetsQuery();
  return (
    <Grid container p={3} spacing={3}>
      {data?.snippets.map((snippet) => (
        <Grid key={snippet.id} item xs={12} sm={6} md={4} lg={3}>
          <SnippetCard snippet={snippet} raised />
        </Grid>
      ))}
    </Grid>
  );
}

import { Grid } from "@mui/material";
import { SnippetFragment } from "generated/graphql";
import React from "react";
import SnippetCard from "./card";

export default function SnippetGrid({
  snippets,
  aboveEach,
}: {
  snippets: SnippetFragment[];
  aboveEach?: (snippet: SnippetFragment) => JSX.Element;
}) {
  return (
    <Grid container p={3} spacing={3}>
      {snippets?.map((snippet) => (
        <Grid key={snippet.id} item xs={12} sm={6} md={4} lg={3}>
          {aboveEach && aboveEach(snippet)}
          <SnippetCard snippet={snippet} raised />
        </Grid>
      ))}
    </Grid>
  );
}

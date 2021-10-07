import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
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

export function SnippetGridSkeleton({
  size,
  aboveEach,
}: {
  size: number;
  aboveEach?: boolean;
}) {
  return (
    <Grid container p={3} spacing={3}>
      {new Array(size).fill(null).map((_, key) => (
        <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
          {aboveEach && (
            <Skeleton sx={{ marginBottom: 1 }} height={60}></Skeleton>
          )}
          <Card raised>
            <CardContent>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <CardActions
                disableSpacing
                sx={{ px: 0, justifyContent: "space-between" }}
              >
                <Skeleton height={50} width={50}></Skeleton>
                <Box display="flex" gap={3} flexDirection="row">
                  <Skeleton height={50} width={50}></Skeleton>
                  <Skeleton height={50} width={50}></Skeleton>
                </Box>
              </CardActions>
              <Skeleton sx={{ height: 200, my: -3 }}></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton sx={{ float: "right", width: 100 }}></Skeleton>
              <br />
              <Skeleton
                sx={{ float: "left", width: 100, height: 50, mb: 2 }}
              ></Skeleton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

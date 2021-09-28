import { Container, Typography } from "@mui/material";
import SnippetCard from "components/snippet/card";
import { useOneSnippetQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";

function Snippet() {
  const { sid } = useRouter().query;
  const [{ data }] = useOneSnippetQuery({
    variables: { id: Number(sid) },
  });
  const snippet = data?.snippet;

  if (!snippet)
    return (
      <Typography p={4} variant="h4" align="center">
        No such Snippet (#{sid}) found.
      </Typography>
    );

  if (snippet.private)
    return (
      <Typography p={4} variant="h4" align="center">
        Snippet #{sid} is marked as private.
      </Typography>
    );

  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <SnippetCard raised snippet={data?.snippet} noExpand />
    </Container>
  );
}

export default withUrqlClient(
  (_ssr) => ({
    url: process.env.API_ENDPOINT ?? "/api",
  }),
  { ssr: true }
)(Snippet);

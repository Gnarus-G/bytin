import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import SnippetCard from "components/snippet/card";
import SnippetGrid, { SnippetGridSkeleton } from "components/snippet/grid";
import { useRecentSnippetsQuery } from "generated/graphql";
import useBreakpoints from "lib/hooks/useBreakpoints";

const maxAmountOfFeaturedSnippets = 8;

export default function Home() {
  const [{ data, fetching }] = useRecentSnippetsQuery({
    variables: { amount: maxAmountOfFeaturedSnippets },
  });
  const sizeToShow = useBreakpoints(
    { sm: 4, lg: 6 },
    maxAmountOfFeaturedSnippets
  );
  const snippets = data?.snippets?.slice(0, sizeToShow);

  return (
    <>
      <Jumbotron>
        <Typography
          color="primary.light"
          align="center"
          fontSize={{ xs: "h3.fontSize", sm: "h2.fontSize" }}
        >
          Put projects on the fast track
        </Typography>
        <Typography
          color="secondary.light"
          align="center"
          fontSize={{ xs: "h3.fontSize", sm: "h2.fontSize" }}
        >
          byte some code
        </Typography>
      </Jumbotron>
      <Container maxWidth="xl">
        <Box my={4} mx="auto" width={{ xs: "1", sm: ".6" }}>
          <Divider />
          <Typography
            variant="h4"
            align="center"
            noWrap
            style={{ margin: "20px 0" }}
          >
            Featured Snippets
          </Typography>
          <Divider />
        </Box>
        {fetching && <SnippetGridSkeleton size={sizeToShow} />}
        <SnippetGrid snippets={snippets} />
      </Container>
    </>
  );
}

const Jumbotron = styled("header")({
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "25rem",
  background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3) ), url("/img/landing-img.jpg") no-repeat center center fixed`,
  backgroundSize: "cover",
});

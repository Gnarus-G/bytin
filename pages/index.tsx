import styled from "@emotion/styled";
import { Box, Container, Divider, Typography } from "@mui/material";
import SnippetGrid from "components/snippet/grid";
import {
  RecentSnippetsDocument,
  useRecentSnippetsQuery,
} from "generated/graphql";
import useBreakpoints from "lib/hooks/useBreakpoints";
import { getUrqlClientAndCache } from "lib/utils/getUrqlClientAndCache";
import { GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";

const maxAmountOfFeaturedSnippets = 8;

function Home() {
  const [{ data }] = useRecentSnippetsQuery({
    variables: { amount: maxAmountOfFeaturedSnippets },
  });
  const sizeToShow = useBreakpoints(
    { xs: 4, md: 4, lg: 6, xl: maxAmountOfFeaturedSnippets },
    6
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

export const getStaticProps: GetStaticProps = async () => {
  const { client, ssrCache } = getUrqlClientAndCache();
  await client.query(RecentSnippetsDocument, { amount: maxAmountOfFeaturedSnippets }).toPromise();

  return {
    props: { urqlState: ssrCache.extractData() },
    revalidate: 600,
  };
};

export default withUrqlClient(
  (_ssr) => ({
    url: process.env.API_ENDPOINT ?? "/api",
  }),
  { ssr: false, staleWhileRevalidate: true }
)(Home);

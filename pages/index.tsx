import styled from "@emotion/styled";
import {
  Box,
  Container,
  Divider, Typography
} from "@mui/material";
import SnippetGrid from "components/snippet/grid";
import {
  useRecentSnippetsQuery
} from "generated/graphql";
import useBreakpoints from "lib/hooks/useBreakpoints";

export default function Home() {
  const maxAmount = 8;
  const [{ data }] = useRecentSnippetsQuery({
    variables: { amount: maxAmount },
  });
  const sizeToShow = useBreakpoints({ xs: 4, md: 4, lg: 6, xl: maxAmount }, 6);
  console.log(`sizeToShow`, sizeToShow);

  const snippets = data?.snippets?.slice(0, sizeToShow);

  console.log(`snippets.length`, snippets?.length);

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

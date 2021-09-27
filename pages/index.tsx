import styled from "@emotion/styled";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function Home() {
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
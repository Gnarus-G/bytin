import React from "react";
import { AppProps } from "next/app";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../components/theme";
import Layout from "../components/layout";
import { Provider as SessionProvider } from "next-auth/client";
import { createClient, Provider as GraphqlProvider } from "urql";
import { ValidatorProvider as FormValidatorProvider } from "react-class-validator";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(removeInjectServerSideCss, []);

  return (
    <SessionProvider session={pageProps.session}>
      <GraphqlProvider value={createClient({ url: "/api" })}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FormValidatorProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </FormValidatorProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </GraphqlProvider>
    </SessionProvider>
  );
}

function removeInjectServerSideCss() {
  const jssStyles = document.querySelector("#jss-server-side");
  if (jssStyles) {
    jssStyles.parentElement!.removeChild(jssStyles);
  }
}

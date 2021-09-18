import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../components/theme';
import Layout from '../components/layout';
import { Provider as SessionProvider } from "next-auth/client"

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export default function MyApp({ Component, pageProps }: AppProps) {

    React.useEffect(removeInjectServerSideCss, []);

    return (
        <SessionProvider session={pageProps.session}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </StyledEngineProvider>
        </SessionProvider>
    );
}

function removeInjectServerSideCss() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
        jssStyles.parentElement!.removeChild(jssStyles);
    }
}


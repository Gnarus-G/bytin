import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import Layout from '../components/layout';
import { Provider as SessionProvider } from "next-auth/client"

export default function MyApp({ Component, pageProps }: AppProps) {

    React.useEffect(removeInjectServerSideCss, []);

    return (
        <SessionProvider session={pageProps.session}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </SessionProvider>
    );
}

function removeInjectServerSideCss() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
        jssStyles.parentElement!.removeChild(jssStyles);
    }
}


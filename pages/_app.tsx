import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {

    React.useEffect(removeInjectServerSideCss, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

function removeInjectServerSideCss() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
        jssStyles.parentElement!.removeChild(jssStyles);
    }
}


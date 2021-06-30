import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import { Global, css } from '@emotion/react';
import theme from '@/styles/theme';
import Head from 'next/head';

const SITE_NAME = 'Fast Feedback';
const SITE_TITLE = 'Fast Feedback';
const SITE_DESCRIPTION = 'Fast Feedback';
const SITE_IMAGE = 'https://fastfeedback-orcin.vercel.app/images/og.png';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fast Feedback</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://fastfeedback-orcin.vercel.app/" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={SITE_IMAGE} />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;

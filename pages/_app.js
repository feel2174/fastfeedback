import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import { Global, css } from '@emotion/react';
import theme from '@/styles/theme';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fast Feedback</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
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
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;

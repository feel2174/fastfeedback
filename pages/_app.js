import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import { Global, css } from '@emotion/react';
import theme from '@/styles/theme';
import Head from 'next/head';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
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

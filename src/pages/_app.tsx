import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// Chakra
import CustomTheme from '../chakra/theme';

// Components
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

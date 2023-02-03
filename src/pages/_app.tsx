import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// Chakra
import CustomTheme from '../chakra/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

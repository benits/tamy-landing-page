import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@fontsource/poppins/400.css'; // Peso 400
import '@fontsource/poppins/700.css'; // Peso 700
import theme from '../theme';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
            <Analytics />
        </ChakraProvider>
    );
}

export default MyApp;

import '../styles/globals.css';
import { AuthProvider } from '@/lib/auth';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {/* <ChakraProvider> */}
      <Component {...pageProps} />
      {/* </ChakraProvider> */}
    </AuthProvider>
  );
}

export default MyApp;

import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

import { Theme } from '../components/Theme';
import { AuthProvider } from '../contexts/AuthContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Theme>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Theme>
    </UserProvider>
  );
}

export default MyApp;

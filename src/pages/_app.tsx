import '~/styles/globals.css';
import type { AppType } from 'next/app';
import type { Session } from "next-auth";
import { trpc } from '../utils/trpc';
import { SessionProvider } from "next-auth/react";


const App: AppType<{ session: Session | null}> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
  
}

export default trpc.withTRPC(App);
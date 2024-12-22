import { ClerkProvider } from "@clerk/nextjs";
import '@/layout/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
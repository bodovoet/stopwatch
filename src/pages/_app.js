import { ClerkProvider } from "@clerk/nextjs";

// Import desktop styles by default
import '@/layout/globals.css';

export default function App({ Component, pageProps, router }) {
  // Conditionally load mobile styles for mobile routes
  if (typeof window !== 'undefined' && router.pathname.startsWith('/protected/mobile')) {
    require('@/layout/globals-mobile.css');
  }

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
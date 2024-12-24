import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/public/(.*)'],
  afterAuth: (auth, req, evt) => {
    const isSignedIn = !!auth.userId;
    const url = new URL(req.nextUrl);

    // Redirect signed-in users to `/protected/Welcome`
    if (isSignedIn && url.pathname === '/') {
      url.pathname = '/protected/Welcome';
      return evt.respondWith(Response.redirect(url.toString()));
    }

    // Ensure signed-out users are redirected to `/public/Signin`
    if (!isSignedIn && url.pathname.startsWith('/protected')) {
      return evt.respondWith(redirectToSignIn({ returnBackUrl: req.url }));
    }
  },
});

export const config = {
  matcher: ['/protected/(.*)', '/'],
};
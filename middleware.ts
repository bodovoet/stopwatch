import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/public/(.*)'], // Adjust these as necessary
});

export const config = {
  matcher: [
    '/protected/User-profile(.*)', // Ensure the catch-all route for User-profile is matched
    '/protected/(.*)',             // Handle other protected routes
  ],
};
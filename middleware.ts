import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",               // Root route should be public
    "/public/*",       // All public pages
    "/sign-in",        // Sign-in page
    "/sign-up",        // Sign-up page
  ],
});

export const config = {
  matcher: ["/((?!_next).*)"], // Matches all routes except static files
};

console.log("Middleware is running");
// middleware.js
import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: ['/', '/public/(.*)'], 
});

export const config = {
    matcher: ['/protected/(.*)', '/protected/mobile/(.*)'],
};
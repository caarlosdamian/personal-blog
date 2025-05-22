import { NextRequest, NextResponse } from 'next/server';
// import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers';

// 1. Specify protected and public routes
const protectedRoutes = ['/'];
const publicRoutes = ['/articles', '/login', '/register'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public

  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const isCookiePreset = await (await cookies()).get('session');

  if (isProtectedRoute && !isCookiePreset) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    isCookiePreset &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

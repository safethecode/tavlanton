import { NextRequest, NextResponse } from 'next/server';

function authenticationMiddleware(request: NextRequest) {
  if (!(request.headers as any).cookie?.includes('authenticated=true')) {
    if (!request.url.includes('/auth')) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};

export default authenticationMiddleware;

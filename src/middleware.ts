import { NextRequest, NextResponse } from 'next/server';

function authenticationMiddleware(request: NextRequest) {
  const authenticated = request.cookies.get('authenticated');

  if (authenticated?.value === undefined) {
    if (!request.url.includes('/auth')) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }
  if (authenticated?.value === 'true') {
    if (request.url.includes('/auth')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};

export default authenticationMiddleware;

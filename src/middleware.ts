import { NextRequest, NextResponse } from 'next/server';

function authenticationMiddleware(request: NextRequest) {
  if (!(request.headers as any).cookie?.includes('authenticated=true')) {
    if (!request.url.includes('/auth')) {
      NextResponse.redirect(new URL('/auth', request.url));
      return NextResponse.next();
    }
  }
  return NextResponse.next();
}

export default authenticationMiddleware;

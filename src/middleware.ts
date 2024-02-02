import { NextRequest, NextResponse } from 'next/server';

async function authenticationMiddleware(request: NextRequest) {
  const authenticated = request.cookies.get('authenticated');

  if (authenticated?.value === undefined) {
    if (!request.url.includes('/auth')) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }
  if (authenticated?.value === 'true') {
    // const user = request.cookies.get('user');

    if (request.url.includes('/auth')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // if (user?.value && !request.url.includes('/api/my')) {
    //   try {
    //     const userId = JSON.parse(user?.value).id;

    //     const URL = new URLSearchParams({
    //       user_id: userId,
    //     }).toString();

    //     const res = await fetch('https://대청비전.com/api/my' + '?' + URL, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });

    //     const data = await res.json();

    //     const response = NextResponse.next();

    //     response.cookies.set('user', JSON.stringify(data), {
    //       maxAge: 60 * 60 * 24 * 365,
    //     });

    //     return response;
    //   } catch (error) {
    //     console.error('Error parsing JSON:', error);
    //     // Handle the error here, e.g. return an error response
    //     return new Response('Error parsing JSON', { status: 500 });
    //   }
    // }
  }
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};

export default authenticationMiddleware;

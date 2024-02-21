'use client';
import { createBrowserClient } from '@supabase/ssr';
import { createFetch } from './createFetch';

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {},
    global: {
      fetch: createFetch({
        next: {
          revalidate: 0,
        },
        cache: 'no-store',
      }),
    },
  },
);

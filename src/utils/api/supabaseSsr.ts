import { createServerClient } from '@supabase/ssr';
import { createFetch } from './createFetch';

export const supabaseServer = createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {},
    global: {
      fetch: createFetch({
        cache: 'no-store',
      }),
    },
  },
);

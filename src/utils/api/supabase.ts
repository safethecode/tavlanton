import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://fykzbdtxkyjhaaaisgun.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5a3piZHR4a3lqaGFhYWlzZ3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMzc2NjgsImV4cCI6MjAxNTYxMzY2OH0.nE_CBfGSSUH6wuNVNMSwRP-WP_ntICP9H6GiW8HWLZ8',
  {
    db: { schema: 'public' },
  },
);

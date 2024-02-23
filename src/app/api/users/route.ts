import { supabaseServer, supabaseTableName } from '@/utils';

export async function GET() {
  const { data } = await supabaseServer
    .from(supabaseTableName('users'))
    .select('*');

  const response = new Response(JSON.stringify(data), {
    headers: { 'Cache-Control': 'no-store' },
  });

  return response;
}

import { supabaseServer } from '@/utils';

export async function GET() {
  const users = await supabaseServer.from('users').select('*');
  return Response.json(users);
}

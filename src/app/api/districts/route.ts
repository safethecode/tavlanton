import { supabaseServer } from '@/utils';

export async function GET() {
  const districts = await supabaseServer.from('districts').select('*');
  return Response.json(districts);
}

import { supabaseServer, supabaseTableName } from '@/utils';

export async function GET() {
  const districts = await supabaseServer
    .from(supabaseTableName('districts'))
    .select('*');
  return (Response as any).json(districts);
}

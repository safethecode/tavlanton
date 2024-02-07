import { supabaseServer, supabaseTableName } from '@/utils';

export async function GET() {
  const { data } = await supabaseServer
    .from(supabaseTableName('users'))
    .select('*');

  return (Response as any).json(data);
}

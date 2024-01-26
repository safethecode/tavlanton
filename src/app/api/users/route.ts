import { supabaseServer } from '@/utils';

export async function GET() {
  const { data } = await supabaseServer.from('users').select('*');

  return (Response as any).json(data);
}

import { NextRequest } from 'next/server';
import { supabaseServer, supabaseTableName } from '@/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const userId = searchParams.get('user_id');

  const { data } = await supabaseServer
    .from(supabaseTableName('users'))
    .select('*')
    .eq('id', userId)
    .single();

  if (data) {
    return (Response as any).json(data);
  }
}

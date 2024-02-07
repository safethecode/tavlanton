import { NextRequest } from 'next/server';
import { supabaseServer, supabaseTableName } from '@/utils';

export async function POST(req: NextRequest) {
  const { name, backSeat } = await req.json();

  const { data, error } = await supabaseServer
    .from(supabaseTableName('users'))
    .select('*')
    .eq('name', name)
    .single();

  if (error) {
    return (Response as any).json({
      status: 500,
      message: error.message,
    });
  }

  if (data.back_seat !== backSeat) {
    return (Response as any).json({
      status: 401,
      message: 'Invalid back seat',
    });
  }

  if (data) {
    return (Response as any).json({
      status: 200,
      data: data,
    });
  }
}

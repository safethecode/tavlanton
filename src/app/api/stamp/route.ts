import { supabaseServer } from '@/utils';
import { NextRequest } from 'next/server';

export async function PUT(req: NextRequest) {
  const { id, point } = await req.json();

  const { data, error } = await supabaseServer
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return (Response as any).json({
      status: 500,
      message: error.message,
    });
  }

  if (data) {
    await supabaseServer
      .from('users')
      .update({ point: point })
      .eq('id', id)
      .select('*');

    return (Response as any).json({
      status: 200,
      data: point,
    });
  }
}

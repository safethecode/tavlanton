import { supabaseServer, supabaseTableName } from '@/utils';
import { NextRequest } from 'next/server';

export async function PUT(req: NextRequest) {
  const { id, point, pointTypeId } = await req.json();

  const { data, error } = await supabaseServer
    .from(supabaseTableName('users'))
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
      .from(supabaseTableName('users'))
      .update({
        point: point,
        point_history: data.point_history.concat(pointTypeId),
      })
      .eq('id', id)
      .select('*');

    return (Response as any).json({
      status: 200,
      data: point,
    });
  }
}

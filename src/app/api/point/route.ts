import { NextRequest } from 'next/server';
import { supabaseServer, supabaseTableName } from '@/utils';

export async function GET(req: NextRequest) {
  const id = (await req.url.includes('?id=')) ? req.url.split('?id=')[1] : '';

  const { data } = await supabaseServer
    .from(supabaseTableName('users'))
    .select('point')
    .eq('id', id)
    .single();

  // 상위 n%를 구하는 로직
  const { data: pointRank } = await supabaseServer
    .from(supabaseTableName('users'))
    .select('point')
    .order('point', { ascending: false })
    .limit(100);

  return (Response as any).json({
    status: 200,
    data: data?.point,
    rank: pointRank!.findIndex((item: any) => item.point === data?.point) + 1,
  });
}

export async function PUT(req: NextRequest) {
  const { id } = await req.json();

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
    const newPoint = data.point + Math.floor(Math.random() * 10) + 1;
    await supabaseServer
      .from(supabaseTableName('users'))
      .update({ point: newPoint })
      .eq('id', id)
      .select('*');

    return (Response as any).json({
      status: 200,
      data: newPoint,
    });
  }
}

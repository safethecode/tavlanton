import { supabaseServer, supabaseTableName } from '@/utils/api';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const districtId = req.url.includes('?district_id=')
    ? req.url.split('?district_id=')[1]
    : '';

  const districtInUsers = await supabaseServer
    .from(supabaseTableName('users'))
    .select('*')
    .eq('districts_id', districtId);

  const districtInPoints = await supabaseServer
    .from(supabaseTableName('users'))
    .select('*')
    .eq('districts_id', districtId)
    .select('point');

  const district = await supabaseServer
    .from(supabaseTableName('districts'))
    .select('*')
    .eq('id', districtId)
    .single();

  const pointsSum = districtInPoints.data!.reduce(
    (sum, point) => sum + point.point,
    0,
  );

  return (Response as any).json({
    status: 200,
    users: districtInUsers.data,
    points: pointsSum,
    length: districtInUsers.data!.length,
    district: district.data,
  });
}

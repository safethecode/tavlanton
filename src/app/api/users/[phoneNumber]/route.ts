import { supabaseServer } from '@/utils';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const phoneNumber = req.nextUrl.pathname.split('/')[3];

  const { data } = await supabaseServer
    .from('users')
    .select('*')
    .eq('back_seat', phoneNumber);

  if (!data || data.length === 0) {
    return (Response as any).json({
      status: 404,
      message: 'Not Found',
    });
  }

  if (data) {
    return (Response as any).json({
      status: 200,
      data,
    });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/utils';

export async function POST(req: NextRequest, res: NextResponse) {
  const { name } = await req.json();

  const { data, error } = await supabaseServer
    .from('users')
    .select('*')
    .eq('name', name)
    .single();

  if (error) {
    return (Response as any).json({
      status: 500,
      message: error.message,
    });
  }

  if (data) {
    return (Response as any).json({
      status: 200,
      data: data,
    });
  }
}

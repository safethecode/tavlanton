import { supabaseServer, supabaseTableName } from '@/utils/api';
import { uuid } from 'uuidv4';

export async function POST(req: Request) {
  const { name, backSeat, districtId, leader } = await req.json();

  const { data, error } = await supabaseServer
    .from(supabaseTableName('users'))
    .insert([
      {
        id: uuid(),
        districts_id: districtId,
        name,
        back_seat: backSeat,
        leader,
        permission: false,
        point: 0,
        created_at: new Date(),
      },
    ]);

  if (error) {
    return {
      status: 400,
      body: error,
    };
  }

  return (Response as any).json(data);
}

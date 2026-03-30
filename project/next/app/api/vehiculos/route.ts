import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { vehiculoSchema } from '@/lib/validation';

export async function GET() {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('vehiculos').select('*').eq('estado', 'disponible');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const payload = vehiculoSchema.parse(await request.json());
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('vehiculos').insert(payload).select('*').single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

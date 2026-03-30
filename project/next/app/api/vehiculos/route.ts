import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { vehiculoSchema } from '@/lib/validation';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: NextRequest) {
  const supabase = createSupabaseServer();
  const all = request.nextUrl.searchParams.get('all') === '1';
  const isAdmin = all ? await requireAdmin() : false;
  let query = supabase.from('vehiculos').select('*');
  if (!(all && isAdmin)) query = query.eq('estado', 'disponible');
  const { data, error } = await query.order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  const raw = await request.json();
  const payload = vehiculoSchema.parse({
    ...raw,
    anio: Number(raw.anio),
    precio: Number(raw.precio),
    kilometraje: Number(raw.kilometraje),
  });
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('vehiculos').insert(payload).select('*').single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

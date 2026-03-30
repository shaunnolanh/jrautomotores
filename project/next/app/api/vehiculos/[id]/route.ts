import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { vehiculoSchema } from '@/lib/validation';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('vehiculos').select('*').eq('id', params.id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  const raw = await request.json();
  const payload = vehiculoSchema.partial().parse({
    ...raw,
    anio: raw.anio ? Number(raw.anio) : undefined,
    precio: raw.precio ? Number(raw.precio) : undefined,
    kilometraje: raw.kilometraje ? Number(raw.kilometraje) : undefined,
  });
  const payload = vehiculoSchema.partial().parse(await request.json());
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('vehiculos').update(payload).eq('id', params.id).select('*').single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  const supabase = createSupabaseServer();
  const { error } = await supabase.from('vehiculos').delete().eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

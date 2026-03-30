import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { consultaSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  const payload = consultaSchema.parse(await request.json());
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('consultas').insert(payload).select('*').single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

export async function GET() {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('consultas').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

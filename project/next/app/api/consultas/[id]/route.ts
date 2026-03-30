import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { z } from 'zod';

const updateSchema = z.object({ estado: z.enum(['nuevo', 'respondido', 'archivado']) });

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const payload = updateSchema.parse(await request.json());
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from('consultas').update(payload).eq('id', params.id).select('*').single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

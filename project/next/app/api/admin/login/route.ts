import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { signAdminToken } from '@/lib/auth';
import { checkRateLimit } from '@/lib/request-security';

const loginSchema = z.object({ user: z.string().min(1), password: z.string().min(1) });

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Demasiados intentos' }, { status: 429 });
  }

  const body = loginSchema.parse(await request.json());
  const ok = body.user === process.env.ADMIN_USER && body.password === process.env.ADMIN_PASSWORD;
  if (!ok) return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });

  const token = await signAdminToken({ user: body.user });
  const response = NextResponse.json({ ok: true });
  response.cookies.set('admin_session', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
  return response;
}

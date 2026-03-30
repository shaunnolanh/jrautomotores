# JR Automotores - Next.js

Proyecto base completo para JR Automotores sobre Next.js 14 (App Router), TypeScript, Tailwind, Supabase y Vercel.

## Instalación

```bash
npm install
npm run dev
```

## Seguridad aplicada
- Middleware con headers de seguridad y CSP
- Auth admin con JWT httpOnly usando jose
- Rate limiting de login por IP (5 intentos / 10 min)
- Validaciones Zod cliente/servidor
- RLS en `supabase/schema.sql`

# Arquitectura técnica — JR Automotores

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Base de datos | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Hosting | Vercel |
| Auth admin | Cookie JWT con jose |
| Validación | Zod |

---

## Estructura de carpetas

```
jr-automotores/
├── app/
│   ├── (public)/
│   │   ├── page.tsx              ← Home
│   │   ├── vehiculos/
│   │   │   ├── page.tsx          ← Catálogo
│   │   │   └── [id]/page.tsx     ← Detalle de vehículo
│   │   ├── cotizador/
│   │   │   └── page.tsx          ← Simulador de crédito
│   │   └── contacto/
│   │       └── page.tsx          ← Contacto
│   ├── admin/
│   │   ├── login/page.tsx
│   │   ├── page.tsx              ← Dashboard
│   │   ├── vehiculos/page.tsx    ← CRUD de vehículos
│   │   └── consultas/page.tsx    ← Consultas de clientes
│   └── api/
│       ├── admin/
│       │   └── login/route.ts
│       ├── vehiculos/
│       │   ├── route.ts          ← GET lista, POST crear
│       │   └── [id]/route.ts     ← GET uno, PUT editar, DELETE eliminar
│       └── consultas/
│           └── route.ts          ← POST nueva consulta
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── VehiculoCard.tsx
│   ├── SimuladorCredito.tsx
│   ├── FiltrosVehiculos.tsx
│   ├── FormularioConsulta.tsx
│   ├── Toast.tsx
│   └── admin/
│       ├── AdminShell.tsx
│       ├── VehiculoForm.tsx
│       └── ConsultasTable.tsx
├── lib/
│   ├── supabase.ts               ← cliente browser
│   ├── supabase-server.ts        ← cliente server (service role)
│   ├── auth.ts                   ← JWT helpers
│   ├── validation.ts             ← schemas Zod
│   └── request-security.ts      ← sanitize, rate limit
├── middleware.ts                 ← seguridad + headers
├── public/
│   └── (logos, imágenes estáticas)
├── supabase/
│   └── schema.sql                ← tablas + RLS
└── .env.local                    ← nunca subir a git
```

---

## Middleware de seguridad

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Headers de seguridad en todas las rutas
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      `connect-src 'self' ${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
      "img-src 'self' data: blob: https://*.supabase.co",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
    ].join('; ')
  )

  // Protección del panel admin
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const session = request.cookies.get('admin_session')

  if (isAdminRoute && !isLoginPage && !session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
```

---

## Validación con Zod

```typescript
// lib/validation.ts
import { z } from 'zod'

export const consultaSchema = z.object({
  nombre: z.string().min(2).max(100).regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/),
  telefono: z.string().min(7).max(15).regex(/^[0-9+\-\s()]+$/),
  email: z.string().email().optional().or(z.literal('')),
  mensaje: z.string().min(10).max(1000),
  vehiculo_id: z.string().uuid().optional(),
})

export const vehiculoSchema = z.object({
  marca: z.string().min(1).max(60),
  modelo: z.string().min(1).max(100),
  anio: z.number().int().min(1980).max(2027),
  version: z.string().max(100).optional(),
  precio: z.number().positive(),
  kilometraje: z.number().int().min(0),
  color: z.string().max(50).optional(),
  combustible: z.enum(['nafta', 'diesel', 'gnc', 'hibrido', 'electrico']),
  transmision: z.enum(['manual', 'automatica']),
  categoria: z.enum(['pickup', 'suv', 'sedan', 'hatchback', 'utilitario']),
  descripcion: z.string().max(2000).optional(),
  es_nuevo: z.boolean().default(false),
  estado: z.enum(['disponible', 'reservado', 'vendido']).default('disponible'),
  destacado: z.boolean().default(false),
})
```

---

## Variables de entorno

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...   ← NUNCA exponer al cliente

# Admin
ADMIN_USER=admin
ADMIN_PASSWORD=...
ADMIN_SESSION_SECRET=...32 chars random...

# App
NEXT_PUBLIC_URL=https://jrautomotores.vercel.app
```

---

## Reglas importantes

1. `SUPABASE_SERVICE_ROLE_KEY` solo se usa en API routes del servidor, nunca en componentes cliente
2. Todas las mutaciones de base de datos van por API routes (no llamadas directas desde el cliente)
3. Validar con Zod tanto en el cliente (UX) como en el servidor (seguridad)
4. Las imágenes de vehículos se suben a Supabase Storage vía API route (no desde el cliente)
5. Nunca usar `TO authenticated` en RLS sin verificar `auth.uid()`

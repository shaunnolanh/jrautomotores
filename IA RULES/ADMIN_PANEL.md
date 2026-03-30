# Panel de Administración — JR Automotores

## Objetivo

Sección `/admin` dentro del sitio web que permite gestionar el stock de vehículos y las consultas de clientes. Invisible para el público, accesible solo con contraseña.

---

## Acceso y seguridad

### Credenciales
Guardadas en `.env.local`, nunca en la base de datos:
```
ADMIN_USER=admin
ADMIN_PASSWORD=...
ADMIN_SESSION_SECRET=clave_random_32_caracteres
```

### Login
- URL: `/admin/login` — formulario usuario + contraseña
- Cookie `admin_session` firmada con jose, dura 8 horas, httpOnly
- No mostrar mensajes de error específicos — solo "Credenciales inválidas"
- Rate limiting: 5 intentos por IP cada 10 minutos

### Middleware de protección
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const session = request.cookies.get('admin_session')
  if (isAdminRoute && !isLoginPage && !session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}
export const config = { matcher: ['/admin/:path*'] }
```

### Seguridad adicional
- `robots: noindex, nofollow` en `/admin/layout.tsx`
- Headers de seguridad en middleware: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, HSTS

---

## Estructura de páginas admin

```
/admin/login      → pantalla de login
/admin            → dashboard (consultas nuevas, vehículos en stock)
/admin/vehiculos  → gestión completa del catálogo de autos
/admin/consultas  → consultas y mensajes de clientes
```

---

## Panel de vehículos (`/admin/vehiculos`)

### Vista de stock
Tabla con:
| Campo | Descripción |
|-------|-------------|
| Foto | Thumbnail de la imagen principal |
| Marca/Modelo | Ej: Toyota Hilux 4x4 |
| Año | Año del vehículo |
| Precio | En ARS |
| Kilometraje | En km |
| Estado | Disponible / Reservado / Vendido |
| Acciones | Editar / Eliminar |

### Formulario de carga de vehículo
Campos:
- Marca (texto)
- Modelo (texto)
- Año (número, 1980-2026)
- Versión (texto, ej: "4x4 TDI AT")
- Precio (número)
- Kilometraje (número)
- Color (texto)
- Combustible: Nafta / Diésel / GNC / Híbrido / Eléctrico
- Transmisión: Manual / Automática
- Descripción (textarea)
- Categoría: Pickup / SUV / Sedan / Hatchback / Utilitario
- Estado: Disponible / Reservado / Vendido
- Nuevo/Usado
- Fotos (múltiples, upload a Supabase Storage)
- Destacado en home (toggle)

### Notificación toast
Al guardar, editar o eliminar un vehículo → mostrar toast igual al de la veterinaria:
- "Vehículo agregado correctamente" (verde)
- "Vehículo actualizado correctamente" (verde)
- "Vehículo eliminado correctamente" (rojo)

---

## Panel de consultas (`/admin/consultas`)

### Vista de mensajes
Tabla con:
| Campo | Descripción |
|-------|-------------|
| Fecha | Cuándo llegó |
| Nombre | Del cliente |
| Teléfono | Con botón WhatsApp |
| Email | Si lo dejó |
| Vehículo | Si consultó por uno específico |
| Mensaje | Texto resumido |
| Estado | Nuevo / Respondido / Archivado |

### Acciones
- Marcar como respondido
- Archivar
- Click en teléfono → abre WhatsApp directamente

---

## Dashboard principal (`/admin`)

Mostrar:
- Cantidad de vehículos disponibles
- Consultas nuevas (no respondidas)
- Últimas 5 consultas recibidas
- Accesos rápidos: Agregar vehículo / Ver consultas

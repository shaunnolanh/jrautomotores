# Checklist de entrega — JR Automotores

## Setup inicial
- [ ] Crear proyecto Next.js 14 con TypeScript y Tailwind
- [ ] Configurar `tailwind.config.js` con la paleta de JR Automotores (ver BRANDING.md)
- [ ] Configurar `globals.css` con variables CSS de la paleta
- [ ] Instalar dependencias: `@supabase/supabase-js`, `@supabase/ssr`, `jose`, `zod`
- [ ] Crear `.env.local.example` con todas las variables requeridas
- [ ] Crear `.gitignore` que excluya `.env.local`

## Base de datos (Supabase)
- [ ] Crear tabla `vehiculos` (ver CATALOGO.md)
- [ ] Crear tabla `consultas` (ver CATALOGO.md)
- [ ] Crear bucket `vehiculos-imagenes` en Supabase Storage (público)
- [ ] Aplicar políticas RLS (ver CATALOGO.md)
- [ ] Guardar SQL en `supabase/schema.sql`

## Seguridad
- [ ] Middleware con headers X-Frame-Options, X-Content-Type-Options, HSTS, CSP
- [ ] Protección de rutas `/admin/*` con cookie JWT
- [ ] Rate limiting en `/api/admin/login` (5 intentos / 10 min por IP)
- [ ] Validación Zod en todos los formularios (cliente + servidor)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` solo en API routes, nunca en cliente
- [ ] `robots: noindex, nofollow` en `/admin/layout.tsx`

## Sitio público

### Home (`/`)
- [ ] Header con logo JR + links de navegación + botón "Consultar" rojo
- [ ] Hero section: fondo negro, título grande, subtítulo, botones, foto del showroom
- [ ] Sección "Quiénes somos": empresa familiar, 5+ años, La Falda
- [ ] Grid de vehículos destacados (máx 6, con badge "Destacado")
- [ ] Sección de reseñas de Google (3 reseñas reales)
- [ ] Sección de contacto rápido: teléfono, WhatsApp, horario
- [ ] Mapa de Google Maps embebido (iframe)
- [ ] Footer con info completa

### Catálogo (`/vehiculos`)
- [ ] Panel de filtros: categoría, condición, precio, marca, combustible
- [ ] Grid de cards de vehículos con toda la info
- [ ] Badge "Nuevo" / "Reservado" según estado
- [ ] Ordenamiento: precio, km, fecha
- [ ] Paginación o load more
- [ ] Estado vacío si no hay resultados

### Detalle (`/vehiculo/[id]`)
- [ ] Galería de fotos con carousel
- [ ] Ficha técnica completa
- [ ] Descripción
- [ ] Botón WhatsApp directo
- [ ] Formulario de consulta
- [ ] Simulador de crédito integrado (ver CATALOGO.md)

### Cotizador (`/cotizador`)
- [ ] Simulador completo con sliders
- [ ] Campos: precio, anticipo, plazo, TNA
- [ ] Resultado en tiempo real: cuota, total, costo financiero
- [ ] Disclaimer orientativo
- [ ] Botón "Consultar financiamiento" → WhatsApp

### Contacto (`/contacto`)
- [ ] Formulario con validación Zod
- [ ] Teléfono con click-to-call
- [ ] Botón WhatsApp
- [ ] Horario de atención
- [ ] Mapa embebido

## Panel admin

### Login (`/admin/login`)
- [ ] Formulario usuario + contraseña
- [ ] Rate limiting implementado
- [ ] Error genérico "Credenciales inválidas"
- [ ] Cookie JWT httpOnly al autenticar

### Dashboard (`/admin`)
- [ ] Total vehículos disponibles
- [ ] Consultas nuevas sin responder
- [ ] Últimas 5 consultas
- [ ] Accesos rápidos

### Vehículos (`/admin/vehiculos`)
- [ ] Tabla de stock con todos los campos
- [ ] Botón "Agregar vehículo" → modal o página
- [ ] Formulario completo con upload de fotos múltiples
- [ ] Editar vehículo
- [ ] Eliminar vehículo con confirmación + toast
- [ ] Cambiar estado: disponible / reservado / vendido
- [ ] Toggle "Destacado en home"
- [ ] Toasts de feedback en todas las acciones

### Consultas (`/admin/consultas`)
- [ ] Tabla de consultas con filtro por estado
- [ ] Marcar como respondido
- [ ] Archivar
- [ ] Click en teléfono → WhatsApp

## API Routes
- [ ] `POST /api/admin/login`
- [ ] `GET /api/vehiculos` (público)
- [ ] `POST /api/vehiculos` (protegido)
- [ ] `GET /api/vehiculos/[id]` (público)
- [ ] `PUT /api/vehiculos/[id]` (protegido)
- [ ] `DELETE /api/vehiculos/[id]` (protegido)
- [ ] `POST /api/consultas` (público)
- [ ] `GET /api/consultas` (protegido)
- [ ] `PUT /api/consultas/[id]` (protegido)

## Calidad
- [ ] Mobile responsive en todas las páginas
- [ ] Imágenes con `object-contain` en las cards (no recortar)
- [ ] Loading states en formularios
- [ ] Error states en formularios
- [ ] Meta tags SEO básicos en layout
- [ ] Favicon con logo JR

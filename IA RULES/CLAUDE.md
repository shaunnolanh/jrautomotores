# Claude Code — JR Automotores

## Proyecto

Website completo para **JR Automotores**, concesionaria de autos nuevos y usados ubicada en La Falda, Córdoba.

Stack: Next.js 14 + TypeScript + Tailwind CSS + Supabase + Vercel

---

## Reglas generales

- Todo el texto de UI en **español**
- Comentarios de código en inglés
- No ejecutar código sin confirmación
- Un solo agente a la vez
- Esperar confirmación de arquitectura antes de codificar

---

## Identidad del negocio

**Nombre:** JR Automotores  
**Tipo:** Concesionaria de autos nuevos y usados  
**Slogan:** "Empresa familiar dedicada a la compra y venta de automotores nuevos y usados"  
**Dirección:** Av. España 1090, X5172 La Falda, Córdoba  
**Teléfono:** 03548 50-3428  
**Horario:** Lunes a Viernes 9:00 a 13:00 y 16:00 a 20:00  
**Google Rating:** 4.3 estrellas — más de 4345 opiniones  

---

## Branding

### Paleta de colores
```
--color-rojo: #E8232A         (rojo del letrero JR — color principal)
--color-blanco: #FFFFFF       (texto sobre fondo oscuro)
--color-negro: #0A0A0A        (fondo principal — estética premium oscura)
--color-gris-oscuro: #1A1A1A  (cards y superficies)
--color-gris-medio: #2A2A2A   (borders y separadores)
--color-gris-texto: #9A9A9A   (texto secundario)
--color-acento: #C8102E       (hover states del rojo)
```

### Estética
- Dark mode por defecto (inspirado en el showroom nocturno)
- Tipografía bold y geométrica — transmite potencia y confianza
- Sin colores pasteles — todo es contraste fuerte
- Imágenes de autos con buena iluminación y fondo oscuro

---

## Secciones del sitio

### Públicas
- `/` — Home con hero, quiénes somos, vehículos destacados, reseñas, ubicación
- `/vehiculos` — Catálogo completo de autos disponibles con filtros
- `/vehiculo/[id]` — Detalle de cada vehículo
- `/cotizador` — Cotizador de precio + simulador de crédito Banco Córdoba
- `/contacto` — Formulario + WhatsApp + mapa

### Admin (protegido)
- `/admin/login` — Acceso con usuario y contraseña
- `/admin` — Dashboard
- `/admin/vehiculos` — Gestión de stock de autos
- `/admin/consultas` — Consultas recibidas de clientes

---

## Seguridad (heredada de veterinaria — aplicar igual)

- Login admin con cookie JWT httpOnly (jose)
- Rate limiting: 5 intentos por IP cada 10 minutos
- Middleware con headers: X-Content-Type-Options, X-Frame-Options: DENY, HSTS
- CSP estricta que permita solo orígenes necesarios
- SERVICE_ROLE_KEY nunca expuesta al cliente (nunca NEXT_PUBLIC_)
- Validación de formularios con Zod (cliente + servidor)
- RLS en Supabase — sin políticas TO authenticated genéricas
- Panel admin con robots: noindex, nofollow

---

## Variables de entorno requeridas

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_USER=
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
NEXT_PUBLIC_URL=
```

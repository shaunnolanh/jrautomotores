# Catálogo de Vehículos y Simulador — JR Automotores

## Objetivo

Página `/vehiculos` con catálogo completo de autos en stock, filtros de búsqueda, y simulador de crédito propio.

---

## Base de datos — tabla `vehiculos`

```sql
CREATE TABLE IF NOT EXISTS vehiculos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  marca text NOT NULL,
  modelo text NOT NULL,
  anio int NOT NULL,
  version text,
  precio decimal(14,2) NOT NULL,
  kilometraje int DEFAULT 0,
  color text,
  combustible text NOT NULL DEFAULT 'nafta',
  -- valores: nafta | diesel | gnc | hibrido | electrico
  transmision text NOT NULL DEFAULT 'manual',
  -- valores: manual | automatica
  categoria text NOT NULL,
  -- valores: pickup | suv | sedan | hatchback | utilitario
  descripcion text,
  es_nuevo boolean DEFAULT false,
  estado text DEFAULT 'disponible',
  -- valores: disponible | reservado | vendido
  destacado boolean DEFAULT false,
  imagenes text[] DEFAULT '{}',
  -- array de URLs de Supabase Storage
  imagen_principal text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## Base de datos — tabla `consultas`

```sql
CREATE TABLE IF NOT EXISTS consultas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  telefono text NOT NULL,
  email text,
  vehiculo_id UUID REFERENCES vehiculos(id),
  vehiculo_nombre text,
  -- guardado como texto por si se elimina el vehículo
  mensaje text NOT NULL,
  estado text DEFAULT 'nuevo',
  -- valores: nuevo | respondido | archivado
  created_at timestamptz DEFAULT now()
);
```

---

## Página de catálogo (`/vehiculos`)

### Filtros disponibles
- Categoría: Todos / Pickup / SUV / Sedan / Hatchback / Utilitario
- Condición: Todos / Nuevos / Usados
- Precio: rango con slider (mín - máx)
- Marca: dropdown dinámico según stock
- Combustible: Todos / Nafta / Diésel / GNC / Híbrido
- Transmisión: Todos / Manual / Automática
- Ordenar por: Más reciente / Menor precio / Mayor precio / Menor km

### Card de vehículo
Mostrar:
- Imagen principal (object-contain, no recortar)
- Badge "Nuevo" o "Usado"
- Badge "Reservado" si aplica (con overlay semitransparente)
- Marca + Modelo + Versión
- Año · Kilometraje · Combustible
- Precio en ARS formateado ($18.500.000)
- Botón "Ver detalles" → `/vehiculo/[id]`
- Botón "Consultar" → abre modal o WhatsApp

---

## Página de detalle (`/vehiculo/[id]`)

### Contenido
- Galería de fotos (carousel con thumbs)
- Nombre completo del vehículo
- Precio destacado
- Ficha técnica: Año, Km, Combustible, Transmisión, Color, Categoría
- Descripción libre
- Botón "Consultar por WhatsApp" (abre wa.me/5493548503428)
- Formulario de consulta (nombre, teléfono, email opcional, mensaje)
- Sección "Simulá tu crédito" — ver abajo

---

## Simulador de crédito

### Lógica del simulador (completamente propio, sin API de banco)

Campos de entrada:
- Precio del vehículo (prellenado con el precio del auto)
- Anticipo (% o monto fijo, slider de 0% a 70%)
- Plazo: 12 / 24 / 36 / 48 / 60 cuotas
- Tasa anual nominal (editable, default: 65% TNA — valor orientativo)

### Fórmula de cuota (sistema francés)
```typescript
function calcularCuota(
  montoFinanciado: number,
  tasaAnualNominal: number,
  cuotas: number
): number {
  const tasaMensual = tasaAnualNominal / 100 / 12
  const cuota = montoFinanciado * 
    (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / 
    (Math.pow(1 + tasaMensual, cuotas) - 1)
  return Math.round(cuota)
}
```

### Resultado mostrado
- Monto financiado
- Cuota mensual estimada
- Total a pagar
- Costo financiero total
- Disclaimer: "Simulación orientativa. Consultá las condiciones reales con tu banco o financiera."

### Diseño del simulador
- Sliders e inputs interactivos
- Resultado actualizado en tiempo real (sin recargar)
- Botón "Consultar financiamiento" → WhatsApp con el resumen

---

## Supabase Storage

Bucket: `vehiculos-imagenes` (público)

Estructura de carpetas:
```
vehiculos-imagenes/
  {vehiculo_id}/
    principal.jpg
    foto-1.jpg
    foto-2.jpg
    ...
```

---

## Políticas RLS

```sql
-- Lectura pública de vehículos disponibles
CREATE POLICY "vehiculos_public_read" ON vehiculos
  FOR SELECT USING (estado = 'disponible');

-- Solo service role puede insertar/editar/eliminar
CREATE POLICY "vehiculos_service_insert" ON vehiculos
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "vehiculos_service_update" ON vehiculos
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "vehiculos_service_delete" ON vehiculos
  FOR DELETE USING (auth.role() = 'service_role');

-- Consultas: cualquiera puede insertar, solo service_role puede leer
CREATE POLICY "consultas_public_insert" ON consultas
  FOR INSERT WITH CHECK (true);

CREATE POLICY "consultas_service_read" ON consultas
  FOR SELECT USING (auth.role() = 'service_role');
```

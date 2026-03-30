import { z } from 'zod';

export const consultaSchema = z.object({
  nombre: z.string().min(2).max(100),
  telefono: z.string().min(7).max(15),
  email: z.string().email().optional().or(z.literal('')),
  mensaje: z.string().min(10).max(1000),
  vehiculo_id: z.string().uuid().optional(),
});

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
});

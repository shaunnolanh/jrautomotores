import { createSupabaseServer } from './supabase-server';
import type { Consulta, Vehiculo } from './types';

const mockVehiculos: Vehiculo[] = [{ id: '1c1a2f20-aaaa-4f4f-8b6d-111111111111', marca: 'Toyota', modelo: 'Hilux', anio: 2023, precio: 36500000, kilometraje: 12000, combustible: 'diesel', transmision: 'automatica', categoria: 'pickup', es_nuevo: false, estado: 'disponible', destacado: true, descripcion: 'Excelente estado' }];

export async function getVehiculos(includeAll = false): Promise<Vehiculo[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return mockVehiculos;
  const supabase = createSupabaseServer();
  let query = supabase.from('vehiculos').select('*').order('created_at', { ascending: false });
  if (!includeAll) query = query.eq('estado', 'disponible');
  const { data } = await query;
  return (data as Vehiculo[]) || [];
}

export async function getVehiculosDestacados() { return (await getVehiculos()).filter(v => v.destacado); }
export async function getVehiculoById(id: string) { return (await getVehiculos(true)).find(v => v.id === id) || null; }

export async function getConsultas(): Promise<Consulta[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return [];
  const supabase = createSupabaseServer();
  const { data } = await supabase.from('consultas').select('*').order('created_at', { ascending: false }).limit(50);
  return (data as Consulta[]) || [];
}

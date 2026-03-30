export type Vehiculo = {
  id: string;
  marca: string;
  modelo: string;
  anio: number;
  version?: string;
  precio: number;
  kilometraje: number;
  color?: string;
  combustible: 'nafta' | 'diesel' | 'gnc' | 'hibrido' | 'electrico';
  transmision: 'manual' | 'automatica';
  categoria: 'pickup' | 'suv' | 'sedan' | 'hatchback' | 'utilitario';
  descripcion?: string;
  es_nuevo: boolean;
  estado: 'disponible' | 'reservado' | 'vendido';
  destacado: boolean;
  imagenes?: string[];
  imagen_principal?: string;
};

export type Consulta = {
  id: string;
  nombre: string;
  telefono: string;
  email?: string;
  mensaje: string;
  estado: 'nuevo' | 'respondido' | 'archivado';
  created_at: string;
};

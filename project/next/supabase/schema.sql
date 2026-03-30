create extension if not exists pgcrypto;

create table if not exists vehiculos (
  id uuid default gen_random_uuid() primary key,
  marca text not null,
  modelo text not null,
  anio int not null,
  version text,
  precio decimal(14,2) not null,
  kilometraje int default 0,
  color text,
  combustible text not null default 'nafta',
  transmision text not null default 'manual',
  categoria text not null,
  descripcion text,
  es_nuevo boolean default false,
  estado text default 'disponible',
  destacado boolean default false,
  imagenes text[] default '{}',
  imagen_principal text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists consultas (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  telefono text not null,
  email text,
  vehiculo_id uuid references vehiculos(id),
  vehiculo_nombre text,
  mensaje text not null,
  estado text default 'nuevo',
  created_at timestamptz default now()
);

alter table vehiculos enable row level security;
alter table consultas enable row level security;

drop policy if exists vehiculos_public_read on vehiculos;
create policy vehiculos_public_read on vehiculos for select using (estado = 'disponible');
drop policy if exists vehiculos_service_insert on vehiculos;
create policy vehiculos_service_insert on vehiculos for insert with check (auth.role() = 'service_role');
drop policy if exists vehiculos_service_update on vehiculos;
create policy vehiculos_service_update on vehiculos for update using (auth.role() = 'service_role');
drop policy if exists vehiculos_service_delete on vehiculos;
create policy vehiculos_service_delete on vehiculos for delete using (auth.role() = 'service_role');

drop policy if exists consultas_public_insert on consultas;
create policy consultas_public_insert on consultas for insert with check (true);
drop policy if exists consultas_service_read on consultas;
create policy consultas_service_read on consultas for select using (auth.role() = 'service_role');
drop policy if exists consultas_service_update on consultas;
create policy consultas_service_update on consultas for update using (auth.role() = 'service_role');

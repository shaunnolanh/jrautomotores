export type FinancePromo = {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
};

export type SampleVehicle = {
  nombre: string;
  anio: number;
  kilometraje: string;
  precio: string;
  cta: string;
  image: string;
};

export type BrandItem = {
  name: string;
  logo: string;
};

export const financePromos: FinancePromo[] = [];

export const sampleVehicles: SampleVehicle[] = [
  { nombre: 'Fiat Cronos', anio: 2021, kilometraje: '63.000 km', precio: 'USD 17.900', cta: 'Solicitar informe', image: '/brand/hero-car.svg' },
  { nombre: 'Toyota Corolla', anio: 2020, kilometraje: '74.000 km', precio: 'USD 22.400', cta: 'Consultar disponibilidad', image: '/brand/showroom.svg' },
  { nombre: 'Peugeot 208', anio: 2022, kilometraje: '31.000 km', precio: 'USD 19.700', cta: 'Ver financiación', image: '/brand/hero-car.svg' },
  { nombre: 'Volkswagen Amarok', anio: 2021, kilometraje: '89.500 km', precio: 'USD 32.900', cta: 'Cotizar entrega', image: '/brand/showroom.svg' },
  { nombre: 'Chevrolet Cruze', anio: 2019, kilometraje: '92.000 km', precio: 'USD 16.300', cta: 'Pedir test drive', image: '/brand/hero-car.svg' },
  { nombre: 'Ford Ranger', anio: 2020, kilometraje: '77.200 km', precio: 'USD 29.500', cta: 'Ver plan de pago', image: '/brand/showroom.svg' },
  { nombre: 'Audi A3', anio: 2018, kilometraje: '98.000 km', precio: 'USD 24.000', cta: 'Quiero asesoramiento', image: '/brand/hero-car.svg' },
  { nombre: 'Toyota Hilux', anio: 2021, kilometraje: '68.800 km', precio: 'USD 35.200', cta: 'Contactar vendedor', image: '/brand/showroom.svg' },
];

export const reviews = [
  {
    nombre: 'Micaela C.',
    texto: 'Excelente atención tanto como la de los dueños, y el vendedor. Muy recomendable.',
  },
  {
    nombre: 'Federico R.',
    texto: 'Servicio impecable, tomaron mi usado al instante y resolvimos la operación en un día.',
  },
  {
    nombre: 'Sergio P.',
    texto: 'Muy buena atención, los autos están muy buenos y la financiación fue clara desde el inicio.',
  },
  {
    nombre: 'Luciana T.',
    texto: 'Compré desde otra ciudad y me mandaron videos, papeles y seguimiento en todo momento.',
  },
  {
    nombre: 'Emiliano V.',
    texto: 'Me asesoraron con el crédito y encontré una opción de cuota cómoda. Gran experiencia.',
  },
];

export const brands: BrandItem[] = [
  { name: 'JR Automotores', logo: '/brand/hero-car.svg' },
  { name: 'Showroom Premium', logo: '/brand/showroom.svg' },
  { name: 'JR Selection', logo: '/brand/hero-car.svg' },
  { name: 'JR Financiación', logo: '/brand/showroom.svg' },
];

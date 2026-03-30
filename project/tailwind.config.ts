import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rojo: '#E8232A',
        'rojo-hover': '#C8102E',
        negro: '#080808',
        'gris-oscuro': '#111111',
        'gris-medio': '#1C1C1C',
        'gris-borde': '#2A2A2A',
        blanco: '#FFFFFF',
        'gris-texto': '#A0A0A0',
        dorado: '#C9A84C',
      },
      boxShadow: {
        rojo: '0 0 20px rgba(232,35,42,0.15)',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rojo: '#E8232A',
        'rojo-hover': '#CC1B22',
        'fondo-base': '#FFFFFF',
        'fondo-suave': '#F5F5F5',
        'texto-principal': '#1A1A2E',
        'texto-secundario': '#6B6B6B',
      },
      boxShadow: {
        card: '0 12px 35px rgba(26, 26, 46, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

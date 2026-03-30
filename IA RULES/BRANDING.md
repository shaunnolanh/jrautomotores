# Branding & Diseño — JR Automotores

## Identidad visual

Inspirada en el showroom nocturno de JR Automotores: fondo negro, letras iluminadas en blanco y rojo, autos de alta gama expuestos con luz cálida.

**Estética:** Premium automotriz oscura — como un concesionario de gama alta.

---

## Paleta de colores

```css
:root {
  /* Primarios */
  --rojo: #E8232A;          /* Rojo JR — color de marca principal */
  --rojo-hover: #C8102E;    /* Rojo oscuro para hover */
  --rojo-suave: #FF3B43;    /* Rojo más brillante para glows */

  /* Fondos (dark by default) */
  --negro: #080808;         /* Fondo base de la página */
  --gris-oscuro: #111111;   /* Cards y superficies primarias */
  --gris-medio: #1C1C1C;    /* Cards hover / superficies secundarias */
  --gris-borde: #2A2A2A;    /* Bordes y separadores */

  /* Texto */
  --blanco: #FFFFFF;        /* Títulos y texto principal */
  --gris-texto: #A0A0A0;    /* Texto secundario / subtítulos */
  --gris-muted: #606060;    /* Texto terciario / placeholders */

  /* Acento */
  --dorado: #C9A84C;        /* Para badges "Nuevo" o detalles premium */
}
```

### Tailwind config equivalente
```javascript
// tailwind.config.js
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
}
```

---

## Tipografía

- **Títulos:** Font weight 800-900, mayúsculas o sentence case fuerte
- **Subtítulos:** Font weight 600
- **Cuerpo:** Font weight 400
- **Stack:** `font-family: 'Inter', system-ui, sans-serif`

---

## Componentes base

### Botón primario (rojo)
```tsx
<button className="bg-rojo hover:bg-rojo-hover text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]">
  Ver vehículos
</button>
```

### Botón secundario (outline)
```tsx
<button className="border border-gris-borde hover:border-rojo text-blanco hover:text-rojo font-semibold px-6 py-3 rounded-lg transition-all duration-200">
  Consultar
</button>
```

### Card de vehículo
- Fondo: `#111111`
- Border: `1px solid #2A2A2A`
- Border-radius: `12px`
- Hover: border cambia a rojo con glow sutil
- Sombra en hover: `0 0 20px rgba(232,35,42,0.15)`

### Badge "Nuevo"
- Fondo: `#C9A84C` (dorado)
- Texto: negro
- Font weight: 700

### Badge "Reservado"
- Fondo: gris semitransparente
- Texto: blanco

---

## Header / Navbar

- Fondo: negro con blur en scroll (`backdrop-blur`)
- Logo: texto "JR" en rojo + "AUTOMOTORES" en blanco
- Links: blanco con hover rojo
- CTA: botón rojo "Consultar"
- Mobile: hamburger menu

---

## Hero section

### Layout (inspirado en plantilla Figma de referencia)
- Split screen: texto a la izquierda, auto a la derecha
- Texto grande a la izquierda: "Encontrá tu" en blanco, "AUTO IDEAL" en rojo, botón "Ver vehículos"
- Imagen del auto a la derecha: recortada, sin fondo, sobre negro
- Texto gigante marca en el fondo (como "TOYOTA", "RAM") en gris muy oscuro, decorativo
- Indicadores de slide (puntitos) a la derecha del auto
- Flechas de navegación prev/next

### Animación del hero (Framer Motion — obligatorio)
- Al hacer scroll hacia abajo, el auto de la derecha se desvanece y escala hacia atrás (opacity 1→0, scale 1→0.8)
- El texto de la izquierda se desliza hacia arriba y desaparece (y: 0→-40px, opacity 1→0)
- Efecto suave, no brusco — usar `useScroll` + `useTransform` de Framer Motion
- Instalar: `npm install framer-motion`

### Barra de búsqueda rápida (debajo del hero)
- Fondo blanco/gris muy claro sobre el negro del hero — contraste llamativo
- Dropdowns: Nuevo/Usado · Marca · Modelo
- Botón de búsqueda rojo con ícono lupa
- Igual al diseño de la plantilla Figma

### Sección de marcas (debajo de la búsqueda)
- Row horizontal con logos de marcas en gris/blanco
- Al hover se iluminan
- Marcas sugeridas para JR: Toyota, Volkswagen, Ford, Chevrolet, RAM, Renault, Peugeot
- Logos en SVG o imagen, monocromáticos

### Cards de vehículos (estilo plantilla Figma)
- Imagen del auto a la izquierda, datos a la derecha
- Datos: Año, Modelo/Versión, Combustible, Precio
- Botón "Ver detalles" oscuro con flecha
- Fondo de card: blanco/gris muy claro con sombra sutil (a pesar del fondo oscuro general, las cards pueden ser claras para contraste — decidir según resultado visual)

---

## Footer

- Fondo: `#080808`
- Borde top: `1px solid #2A2A2A`
- Logo + dirección + horario + redes
- Links en gris con hover blanco

---

## Fotos de referencia del local

Las siguientes imágenes capturan el look nocturno del showroom:
- Letrero iluminado "JR AUTOMOTORES" — rojo y blanco sobre negro
- Showroom con pickups y SUVs de alta gama
- Frente del local con ventanales de piso a techo

Usar estas referencias para el hero y las fotos de "Quiénes somos".

---

## Información de Google Maps

**Dirección:** Av. España 1090, X5172 La Falda, Córdoba  
**Coordenadas:** -31.0833° S, -64.4833° O (aproximado La Falda)  
**Rating:** 4.3 ⭐ con 4345+ reseñas  

### Reseñas reales para mostrar en el sitio
- "Excelente atención tanto como la de los dueños, y el vendedor!"
- "Excelente servicio y me atendieron con la mejor!!!"
- "Muy buena atención, los autos están muy buenos."

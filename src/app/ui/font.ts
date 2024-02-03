import { Inter, Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'], // Puedes incluir uno o ambos pesos, dependiendo de tus necesidades
    style: 'normal',        // Opcional: estilo de la fuente, como 'normal' o 'italic'
    display: 'swap',        // Opcional: cómo se muestra la fuente, como 'auto', 'block', 'swap', 'fallback', 'optional'
    subsets: ['latin'],     // Opcional: subconjuntos de caracteres, como ['latin', 'latin-ext']
    preload: true,          // Opcional: si pre-cargar la fuente o no
    // Otras propiedades opcionales pueden ir aquí según sea necesario
  });
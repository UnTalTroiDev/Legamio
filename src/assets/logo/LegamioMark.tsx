import type { SVGProps } from 'react';

/**
 * Marca geométrica del tucán de Legamio (versión componente).
 * Construido con formas planas en la paleta oficial. Soporta tamaño y `monochrome`
 * (versión blanca para fondos oscuros).
 */
export interface LegamioMarkProps extends SVGProps<SVGSVGElement> {
  size?: number;
  monochrome?: 'white' | 'dark' | false;
}

export function LegamioMark({
  size = 36,
  monochrome = false,
  ...props
}: LegamioMarkProps) {
  const colors =
    monochrome === 'white'
      ? {
          body: '#FFFFFF',
          wing: '#FFFFFF',
          beak: '#FFFFFF',
          beak2: '#FFFFFF',
          eye: '#1A1A1A',
          accent: '#FFFFFF',
        }
      : monochrome === 'dark'
        ? {
            body: '#1A1A1A',
            wing: '#1A1A1A',
            beak: '#1A1A1A',
            beak2: '#1A1A1A',
            eye: '#FFFFFF',
            accent: '#1A1A1A',
          }
        : {
            body: '#21C2FF', // cyan
            wing: '#FF6BFF', // magenta
            beak: '#FFA200', // orange
            beak2: '#FFDD00', // yellow
            eye: '#1A1A1A',
            accent: '#21C2FF',
          };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Legamio"
      {...props}
    >
      {/* Cuerpo principal del tucán */}
      <path
        d="M22 14c-7 0-12 5.6-12 13v9c0 8 6 14 14 14h14c8 0 14-6 14-14v-3c0-8-6-14-14-14H22Z"
        fill={colors.body}
      />
      {/* Ala geométrica */}
      <path
        d="M28 24c0-2 1.6-3.5 3.6-3.5h10c4.6 0 8.4 3.8 8.4 8.4v6c0 4.6-3.8 8.4-8.4 8.4H32c-2.2 0-4-1.8-4-4V24Z"
        fill={colors.wing}
      />
      {/* Pico superior (naranja) */}
      <path
        d="M22 22c-6 0-11 2.3-13 5.5-1 1.6 0 3.5 2 3.5h12V22Z"
        fill={colors.beak}
      />
      {/* Pico inferior (amarillo) */}
      <path
        d="M11 31c-2 0-2.6 2.2-1 3.4 2.8 2 7.2 3.6 12 3.6V31H11Z"
        fill={colors.beak2}
      />
      {/* Ojo */}
      <circle cx="30" cy="24" r="2.4" fill={colors.eye} />
      {/* Punto de acento */}
      <circle cx="46" cy="34" r="1.8" fill={colors.accent} opacity="0.6" />
    </svg>
  );
}

export default LegamioMark;

import LegamioMark from './LegamioMark';

export interface WordmarkProps {
  variant?: 'light' | 'dark';
  withTagline?: boolean;
  size?: number;
}

/**
 * Logo combinado: marca (tucán) + wordmark + tagline.
 * `light` se usa sobre fondos oscuros (texto blanco). `dark` para fondos blancos/gris claro.
 */
export function Wordmark({
  variant = 'dark',
  withTagline = true,
  size = 32,
}: WordmarkProps) {
  const isLight = variant === 'light';
  const wordmarkColor = isLight ? '#FFFFFF' : '#616161';
  const taglineColor = '#21C2FF';
  const monochrome = isLight ? 'white' : false;

  return (
    <div className="flex items-center gap-2.5 select-none">
      <LegamioMark size={size} monochrome={monochrome} />
      <div className="flex flex-col leading-none">
        <span
          className="font-bold tracking-tight"
          style={{ color: wordmarkColor, fontSize: size * 0.62 }}
        >
          legamio
        </span>
        {withTagline && (
          <span
            className="font-normal mt-0.5"
            style={{ color: taglineColor, fontSize: 11, letterSpacing: 0.2 }}
          >
            Inteligencia Legal
          </span>
        )}
      </div>
    </div>
  );
}

export default Wordmark;

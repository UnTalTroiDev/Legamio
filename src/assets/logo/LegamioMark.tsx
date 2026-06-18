import { useId } from 'react';
import type { SVGProps } from 'react';

/**
 * Isotipo oficial de Legamio: el tucán de gradientes (cabeza magenta→azul,
 * cuerpo amarillo, cola cyan, pico naranja). Vector canónico, nítido a
 * cualquier tamaño. `monochrome="white"` lo renderiza en blanco plano para
 * fondos oscuros. El alto = `size`; el ancho mantiene la proporción natural.
 */
export interface LegamioMarkProps extends Omit<SVGProps<SVGSVGElement>, 'fill'> {
  size?: number;
  monochrome?: 'white' | 'dark' | false;
}

export function LegamioMark({
  size = 36,
  monochrome = false,
  ...props
}: LegamioMarkProps) {
  const id = useId();
  const flat =
    monochrome === 'white' ? '#FFFFFF' : monochrome === 'dark' ? '#1A1A1A' : null;
  const g = (n: number) => `lm-${id}-${n}`;
  // viewBox original 222×347 → alto = size, ancho proporcional.
  const width = (size * 222) / 347;

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 222 347"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Legamio"
      {...props}
    >
      <path d="M0 346.951H57.8774V289.126C25.9324 289.126 0 315.006 0 346.951Z" fill={flat ?? `url(#${g(0)})`} />
      <path d="M202.599 144.562L57.9835 144.458L57.8789 289.073C137.768 289.073 202.546 224.399 202.599 144.51V144.562Z" fill={flat ?? `url(#${g(1)})`} />
      <path d="M115.807 144.51H57.9297V202.335C89.8747 202.335 115.807 176.455 115.807 144.51Z" fill={flat ?? `url(#${g(2)})`} />
      <path d="M57.9814 144.511L202.597 144.615L202.701 0C122.813 0 58.0337 64.6742 57.9814 144.563V144.511Z" fill={flat ?? `url(#${g(3)})`} />
      <path d="M144.774 144.563H202.652V86.738C170.707 86.738 144.774 112.618 144.774 144.563Z" fill={flat ?? `url(#${g(4)})`} />
      <path d="M202.597 125.323V144.615H221.889C221.889 133.949 213.262 125.323 202.597 125.323Z" fill={flat ?? `url(#${g(5)})`} />
      <path d="M180.954 122.865C184.939 122.865 188.169 119.635 188.169 115.65C188.169 111.665 184.939 108.435 180.954 108.435C176.97 108.435 173.739 111.665 173.739 115.65C173.739 119.635 176.97 122.865 180.954 122.865Z" fill={monochrome === 'white' ? '#1A1A1A' : 'white'} />
      {!flat && (
        <defs>
          <linearGradient id={g(0)} x1="28.9247" y1="347.102" x2="28.9652" y2="289.068" gradientUnits="userSpaceOnUse"><stop stopColor="#3ACFFF" /><stop offset="1" stopColor="#2B9AFC" /></linearGradient>
          <linearGradient id={g(1)} x1="37.8704" y1="266.801" x2="178.872" y2="125.996" gradientUnits="userSpaceOnUse"><stop stopColor="#FDEF4F" /><stop offset="1" stopColor="#E7B717" /></linearGradient>
          <linearGradient id={g(2)} x1="86.891" y1="144.963" x2="86.8512" y2="202.004" gradientUnits="userSpaceOnUse"><stop stopColor="#E2AC26" /><stop offset="1" stopColor="#D89042" /></linearGradient>
          <linearGradient id={g(3)} x1="130.387" y1="-0.510231" x2="130.286" y2="143.948" gradientUnits="userSpaceOnUse"><stop stopColor="#EC6BFE" /><stop offset="1" stopColor="#6C6AF9" /></linearGradient>
          <linearGradient id={g(4)} x1="202.893" y1="143.389" x2="162.559" y2="103.05" gradientUnits="userSpaceOnUse"><stop stopColor="#C96BFD" /><stop offset="1" stopColor="#6C6AF9" /></linearGradient>
          <linearGradient id={g(5)} x1="222.468" y1="135.02" x2="202.705" y2="135.006" gradientUnits="userSpaceOnUse"><stop stopColor="#E2AC26" /><stop offset="1" stopColor="#D89042" /></linearGradient>
        </defs>
      )}
    </svg>
  );
}

export default LegamioMark;

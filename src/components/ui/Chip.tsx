import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ChipColor = 'cyan' | 'magenta' | 'yellow' | 'orange' | 'gray' | 'dark';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: ChipColor;
  icon?: ReactNode;
  selected?: boolean;
}

const colorMap: Record<ChipColor, string> = {
  cyan: 'bg-legamio-cyan-soft text-legamio-cyan border-legamio-cyan/30',
  magenta: 'bg-legamio-magenta-soft text-legamio-magenta border-legamio-magenta/30',
  yellow: 'bg-legamio-yellow-soft text-[#A88500] border-legamio-yellow/50',
  orange: 'bg-legamio-orange-soft text-legamio-orange border-legamio-orange/30',
  gray: 'bg-legamio-gray-soft text-legamio-gray border-legamio-border',
  dark: 'bg-legamio-ink text-white border-legamio-ink',
};

export function Chip({
  color = 'gray',
  icon,
  selected,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px] font-normal transition-colors',
        colorMap[color],
        selected && 'ring-2 ring-offset-1 ring-legamio-cyan',
        className,
      )}
      {...props}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

export default Chip;

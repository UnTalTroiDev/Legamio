import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ChipColor = 'cyan' | 'magenta' | 'yellow' | 'orange' | 'gray' | 'dark';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: ChipColor;
  icon?: ReactNode;
  selected?: boolean;
}

const colorMap: Record<ChipColor, string> = {
  cyan: 'bg-[#F0FBFF] text-[#21C2FF] border-[#21C2FF]/30',
  magenta: 'bg-[#FFF0FF] text-[#FF6BFF] border-[#FF6BFF]/30',
  yellow: 'bg-[#FFFDF0] text-[#A88500] border-[#FFDD00]/50',
  orange: 'bg-[#FFF8F0] text-[#FFA200] border-[#FFA200]/30',
  gray: 'bg-[#F5F5F5] text-[#616161] border-[#E8E8E8]',
  dark: 'bg-[#1A1A1A] text-white border-[#1A1A1A]',
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
        selected && 'ring-2 ring-offset-1 ring-[#21C2FF]',
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

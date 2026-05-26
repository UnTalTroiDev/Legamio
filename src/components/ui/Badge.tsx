import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'cyan'
  | 'magenta'
  | 'yellow'
  | 'orange'
  | 'gray'
  | 'outline'
  | 'dark';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
  icon?: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  cyan: 'bg-[#F0FBFF] text-[#21C2FF] border border-[#21C2FF]/20',
  magenta: 'bg-[#FFF0FF] text-[#FF6BFF] border border-[#FF6BFF]/20',
  yellow: 'bg-[#FFFDF0] text-[#A88500] border border-[#FFDD00]/40',
  orange: 'bg-[#FFF8F0] text-[#FFA200] border border-[#FFA200]/20',
  gray: 'bg-[#F5F5F5] text-[#616161] border border-[#E8E8E8]',
  outline: 'bg-transparent text-[#616161] border border-[#E8E8E8]',
  dark: 'bg-[#1A1A1A] text-white border border-[#1A1A1A]',
};

const dotColor: Record<BadgeVariant, string> = {
  cyan: 'bg-[#21C2FF]',
  magenta: 'bg-[#FF6BFF]',
  yellow: 'bg-[#FFDD00]',
  orange: 'bg-[#FFA200]',
  gray: 'bg-[#616161]',
  outline: 'bg-[#616161]',
  dark: 'bg-[#21C2FF]',
};

export function Badge({
  variant = 'cyan',
  dot,
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-normal whitespace-nowrap',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative inline-flex size-2">
          <span
            className={cn(
              'absolute inline-flex size-full rounded-full opacity-60 animate-ping',
              dotColor[variant],
            )}
          />
          <span
            className={cn(
              'relative inline-flex size-2 rounded-full',
              dotColor[variant],
            )}
          />
        </span>
      )}
      {icon}
      {children}
    </span>
  );
}

export default Badge;

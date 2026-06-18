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
  cyan: 'bg-legamio-cyan-soft text-legamio-cyan border border-legamio-cyan/20',
  magenta: 'bg-legamio-magenta-soft text-legamio-magenta border border-legamio-magenta/20',
  yellow: 'bg-legamio-yellow-soft text-[#A88500] border border-legamio-yellow/40',
  orange: 'bg-legamio-orange-soft text-legamio-orange border border-legamio-orange/20',
  gray: 'bg-legamio-gray-soft text-legamio-gray border border-legamio-border',
  outline: 'bg-transparent text-legamio-gray border border-legamio-border',
  dark: 'bg-legamio-ink text-white border border-legamio-ink',
};

const dotColor: Record<BadgeVariant, string> = {
  cyan: 'bg-legamio-cyan',
  magenta: 'bg-legamio-magenta',
  yellow: 'bg-legamio-yellow',
  orange: 'bg-legamio-orange',
  gray: 'bg-legamio-gray',
  outline: 'bg-legamio-gray',
  dark: 'bg-legamio-cyan',
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

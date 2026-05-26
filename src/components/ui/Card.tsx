import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type AccentColor = 'cyan' | 'magenta' | 'yellow' | 'orange' | 'gray' | 'dark';

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverable?: boolean;
  accentColor?: AccentColor;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const hoverBorder: Record<AccentColor, string> = {
  cyan: 'hover:border-[#21C2FF]',
  magenta: 'hover:border-[#FF6BFF]',
  yellow: 'hover:border-[#FFDD00]',
  orange: 'hover:border-[#FFA200]',
  gray: 'hover:border-[#616161]',
  dark: 'hover:border-[#1A1A1A]',
};

const padMap = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { hoverable, accentColor = 'cyan', padding = 'md', className, children, ...props },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'rounded-2xl bg-white border border-[#E8E8E8] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out',
        padMap[padding],
        hoverable &&
          cn(
            'cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]',
            hoverBorder[accentColor],
          ),
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default Card;

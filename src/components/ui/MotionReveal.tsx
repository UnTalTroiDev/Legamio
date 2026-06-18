import type { ReactNode } from 'react';
import { m, type Variants } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export interface MotionRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Wrapper que dispara una animación de entrada al hacer scroll usando
 * `whileInView` de framer-m. Comparte `staggerContainer` para listas.
 */
export function MotionReveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: MotionRevealProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

export function MotionStagger({
  children,
  className,
  once = true,
  amount = 0.15,
}: Omit<MotionRevealProps, 'variants' | 'delay'>) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer}
    >
      {children}
    </m.div>
  );
}

export default MotionReveal;

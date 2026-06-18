import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type SectionBackground = 'white' | 'surface' | 'dark';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  children: ReactNode;
  containerClassName?: string;
  fullBleed?: boolean;
}

const bgMap: Record<SectionBackground, string> = {
  white: 'bg-white text-legamio-gray',
  surface: 'bg-legamio-surface text-legamio-gray',
  dark: 'bg-legamio-ink text-white',
};

export function SectionWrapper({
  id,
  background = 'white',
  className,
  containerClassName,
  children,
  fullBleed,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full py-12 md:py-20',
        bgMap[background],
        className,
      )}
      {...props}
    >
      {fullBleed ? (
        children
      ) : (
        <div
          className={cn(
            'mx-auto w-full max-w-[1200px] px-6',
            containerClassName,
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}

export default SectionWrapper;

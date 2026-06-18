import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { m, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

type NativeButton = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof HTMLMotionProps<'button'>
>;

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    NativeButton {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-legamio-cyan text-white hover:brightness-110 shadow-[0_8px_32px_rgba(33,194,255,0.20)] active:shadow-[0_4px_16px_rgba(33,194,255,0.30)]',
  secondary:
    'bg-transparent text-legamio-cyan border border-legamio-cyan hover:bg-legamio-cyan/10',
  accent:
    'bg-legamio-magenta text-white hover:brightness-110 shadow-[0_8px_32px_rgba(255,107,255,0.20)]',
  ghost:
    'bg-transparent text-legamio-gray hover:bg-legamio-gray-soft border border-transparent',
  dark:
    'bg-legamio-ink text-white hover:bg-legamio-ink-soft',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-5 text-[15px] gap-2',
  lg: 'h-13 px-7 text-base gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    isLoading,
    fullWidth,
    disabled,
    children,
    type = 'button',
    ...props
  },
  ref,
) {
  const isDisabled = disabled || isLoading;
  return (
    <m.button
      ref={ref}
      type={type}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition-[background,color,box-shadow,filter] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-legamio-cyan/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </m.button>
  );
});

export default Button;

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
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
    'bg-[#21C2FF] text-white hover:brightness-110 shadow-[0_8px_32px_rgba(33,194,255,0.20)] active:shadow-[0_4px_16px_rgba(33,194,255,0.30)]',
  secondary:
    'bg-transparent text-[#21C2FF] border border-[#21C2FF] hover:bg-[#21C2FF]/10',
  accent:
    'bg-[#FF6BFF] text-white hover:brightness-110 shadow-[0_8px_32px_rgba(255,107,255,0.20)]',
  ghost:
    'bg-transparent text-[#616161] hover:bg-[#F5F5F5] border border-transparent',
  dark:
    'bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]',
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
    <motion.button
      ref={ref}
      type={type}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition-[background,color,box-shadow,filter] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21C2FF]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
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
    </motion.button>
  );
});

export default Button;

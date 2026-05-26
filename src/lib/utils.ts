import { clsx, type ClassValue } from 'clsx';

/**
 * Helper para concatenar clases condicionales (clsx) sin necesidad
 * de instalar tailwind-merge en este proyecto.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

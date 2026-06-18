/**
 * Arquitectura de dominios de Legamio (dos dominios, a propósito):
 *
 * - `SITE_URL`  → Landing pública (ESTE proyecto). Es la que se indexa en
 *                 buscadores y la URL canónica para SEO / Open Graph.
 * - `APP_URL`   → Dashboard/producto donde el cliente inicia sesión y usará
 *                 el RAG. Es una app aparte (hash routing `/#/...`).
 *
 * No es una inconsistencia: la landing y el producto viven en dominios
 * distintos. Centralizamos los enlaces aquí para no esparcir URLs por el
 * código y poder cambiarlas en un solo lugar.
 */
export const SITE_URL = 'https://legamio.com';
export const APP_URL = 'https://legamio.com.co';

/** Correo de ventas para el plan Empresarial. Cambiar aquí en un solo lugar. */
export const SALES_EMAIL = 'ventas@legamio.com';

export const AUTH_LINKS = {
  login: `${APP_URL}/#/login`,
  register: `${APP_URL}/#/register`,
} as const;

export type AuthTarget = keyof typeof AUTH_LINKS;

/** Redirige al dashboard externo (sale de esta SPA hacia el producto). */
export function goToApp(target: AuthTarget): void {
  window.location.href = AUTH_LINKS[target];
}

/** Abre el correo de ventas con un asunto prellenado. */
export function contactSales(subject = 'Plan Empresarial — Legamio'): void {
  window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

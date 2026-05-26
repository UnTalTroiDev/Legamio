import type { SVGProps } from 'react';
import { Link } from 'react-router-dom';
import Wordmark from '@/assets/logo/Wordmark';

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

interface FooterColumn {
  title: string;
  links: { label: string; to: string }[];
}

const columns: FooterColumn[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Consultas IA', to: '/chat' },
      { label: 'Generador de contratos', to: '/contratos' },
      { label: 'Guías legales', to: '/#guias' },
      { label: 'Precios', to: '/precios' },
      { label: 'Dashboard', to: '/chat' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', to: '/#nosotros' },
      { label: 'Blog', to: '/#blog' },
      { label: 'Casos de éxito', to: '/#casos' },
      { label: 'Trabaja con nosotros', to: '/#careers' },
      { label: 'Prensa', to: '/#prensa' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos de uso', to: '/#terminos' },
      { label: 'Política de privacidad', to: '/#privacidad' },
      { label: 'Política de cookies', to: '/#cookies' },
      { label: 'Ley 1581 (datos)', to: '/#ley-1581' },
    ],
  },
];

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#999]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Wordmark variant="light" />
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed">
              Plataforma de inteligencia legal para emprendedores y empresas
              colombianas.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-[#333] text-[#757575] hover:text-[#21C2FF] hover:border-[#21C2FF] transition-colors duration-200"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[1px] text-white mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#999] hover:text-[#21C2FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {col.title === 'Legal' && (
                <p className="mt-5 text-[11px] font-light leading-relaxed text-[#757575]">
                  No somos un bufete de abogados. Nuestro servicio es informativo
                  y no constituye asesoría jurídica formal.
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 h-px bg-[#333]" />

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] text-[#757575]">
          <p>© {new Date().getFullYear()} Legamio SAS. Todos los derechos reservados.</p>
          <p>
            Hecho con <span className="text-[#FF6BFF]">♥</span> en Colombia{' '}
            <span aria-hidden>🇨🇴</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

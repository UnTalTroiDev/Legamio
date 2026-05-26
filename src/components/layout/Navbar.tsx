import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Menu,
  MessageCircle,
  BookOpen,
  X,
} from 'lucide-react';

import Wordmark from '@/assets/logo/Wordmark';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface NavLinkItem {
  label: string;
  to: string;
  children?: { label: string; to: string; icon?: React.ReactNode; description?: string }[];
}

const links: NavLinkItem[] = [
  { label: 'Inicio', to: '/' },
  {
    label: 'Servicios',
    to: '/chat',
    children: [
      {
        label: 'Consultas IA',
        to: '/chat',
        icon: <MessageCircle className="size-4" />,
        description: 'Resuelve dudas legales al instante',
      },
      {
        label: 'Generador de Contratos',
        to: '/contratos',
        icon: <FileText className="size-4" />,
        description: 'Crea contratos en minutos',
      },
      {
        label: 'Guías Legales',
        to: '/#guias',
        icon: <BookOpen className="size-4" />,
        description: 'Procedimientos paso a paso',
      },
    ],
  },
  { label: 'Precios', to: '/precios' },
  { label: 'Blog', to: '/#blog' },
  { label: 'Nosotros', to: '/#nosotros' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-[background,box-shadow,backdrop-filter] duration-300',
          'bg-white/95 backdrop-blur-md',
          scrolled && 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
        )}
      >
        <nav
          className="mx-auto flex h-16 md:h-[72px] max-w-[1200px] items-center justify-between px-6"
          aria-label="Principal"
        >
          <Link to="/" className="flex items-center" aria-label="Legamio inicio">
            <Wordmark variant="dark" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const hasChildren = !!link.children?.length;
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setDropdown(link.label)}
                  onMouseLeave={() => hasChildren && setDropdown(null)}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 text-[15px] text-[#616161] hover:text-[#21C2FF] transition-colors duration-200"
                      aria-expanded={dropdown === link.label}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-200',
                          dropdown === link.label && 'rotate-180',
                        )}
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          'px-3 py-2 text-[15px] transition-colors duration-200 hover:text-[#21C2FF]',
                          isActive ? 'text-[#21C2FF]' : 'text-[#616161]',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}

                  <AnimatePresence>
                    {hasChildren && dropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2"
                        role="menu"
                      >
                        <div className="w-80 rounded-2xl border border-[#E8E8E8] bg-white p-2 shadow-[0_16px_48px_rgba(0,0,0,0.14)]">
                          {link.children!.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              role="menuitem"
                              className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-[#F0FBFF] transition-colors"
                            >
                              <span className="mt-0.5 grid size-8 place-items-center rounded-lg bg-[#F0FBFF] text-[#21C2FF]">
                                {child.icon}
                              </span>
                              <span className="flex flex-col">
                                <span className="font-bold text-[#1A1A1A] text-sm">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-[#999] font-light">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-2.5">
            <Button variant="secondary" size="md">
              Ingresar
            </Button>
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="size-4" />}
            >
              Empezar gratis
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden grid size-10 place-items-center rounded-full text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
              aria-hidden
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm bg-white shadow-[0_16px_48px_rgba(0,0,0,0.14)] lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Menú móvil"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8E8E8]">
                <Wordmark variant="dark" withTagline={false} size={28} />
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full hover:bg-[#F5F5F5]"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto px-3 py-4 divide-y divide-[#F0F0F0]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-3 py-4 text-[#1A1A1A] hover:text-[#21C2FF] transition-colors"
                    >
                      <span className="font-bold">{link.label}</span>
                      <ArrowRight className="size-4 text-[#999]" />
                    </Link>
                    {link.children && (
                      <ul className="px-3 pb-3 -mt-2 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-[#616161] hover:bg-[#F0FBFF] hover:text-[#21C2FF]"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#E8E8E8] p-5 flex flex-col gap-2.5">
                <Button variant="secondary" size="md" fullWidth>
                  Ingresar
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  rightIcon={<ArrowRight className="size-4" />}
                >
                  Empezar gratis
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

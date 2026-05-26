import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import { Chip, SectionWrapper } from '@/components/ui';
import type { ChipColor } from '@/components/ui';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  city: string;
  initials: string;
  avatarBg: string;
  category: string;
  categoryColor: ChipColor;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Antes perdía semanas buscando abogados y gastaba millones. Con Legamio generé el contrato de mi primer empleado en 10 minutos.',
    name: 'Carlos Mendoza',
    role: 'Fundador de TechBog SAS',
    city: 'Bogotá',
    initials: 'CM',
    avatarBg: '#21C2FF',
    category: 'Contrato laboral',
    categoryColor: 'cyan',
  },
  {
    quote:
      'La consulta sobre propiedad intelectual que me dio Legamio era exactamente lo que necesitaba. Precisa, clara y en términos que entendí.',
    name: 'Laura Ríos',
    role: 'Diseñadora independiente',
    city: 'Medellín',
    initials: 'LR',
    avatarBg: '#FF6BFF',
    category: 'Propiedad intelectual',
    categoryColor: 'magenta',
  },
  {
    quote:
      'Constituí mi SAS con la guía de Legamio paso a paso. El proceso que creía imposible lo hice sola en 3 días.',
    name: 'Diana Vargas',
    role: 'CEO de Natura Orgánica',
    city: 'Cali',
    initials: 'DV',
    avatarBg: '#FFA200',
    category: 'Constitución SAS',
    categoryColor: 'orange',
  },
  {
    quote:
      'Tengo el plan Pro y lo uso semanalmente. Los contratos con mis clientes ahora son profesionales y me protegen de verdad.',
    name: 'Andrés Castillo',
    role: 'Consultor de Marketing',
    city: 'Barranquilla',
    initials: 'AC',
    avatarBg: '#FFDD00',
    category: 'Plan Pro',
    categoryColor: 'yellow',
  },
];

function visibleCount(width: number) {
  if (width < 768) return 1;
  if (width < 1100) return 2;
  return 3;
}

export function Testimonials() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handle = () => setPerView(visibleCount(window.innerWidth));
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const pages = Math.max(1, testimonials.length - perView + 1);
  useEffect(() => {
    if (index > pages - 1) setIndex(0);
  }, [pages, index]);

  const next = useCallback(() => setIndex((i) => (i + 1) % pages), [pages]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + pages) % pages),
    [pages],
  );

  // auto rotate
  useEffect(() => {
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [next]);

  const visible = testimonials.slice(index, index + perView);

  return (
    <SectionWrapper id="testimonios" background="surface">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h2 className="font-display text-[32px] md:text-[46px] font-medium text-[#1A1A1A] leading-[1.05] tracking-tight">
          Lo que <span className="font-display-italic font-normal">dicen</span>{' '}
          nuestros usuarios
        </h2>
        <p className="mt-4 text-lg font-light text-[#616161]">
          Emprendedores y empresas que ya gestionan su parte legal con Legamio.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t) => (
                <article
                  key={t.name}
                  className="relative rounded-2xl bg-white border border-[#E8E8E8] p-7 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-shadow"
                >
                  <span
                    aria-hidden
                    className="absolute top-3 right-5 text-[80px] font-bold leading-none select-none"
                    style={{ color: '#21C2FF', opacity: 0.18, fontFamily: 'serif' }}
                  >
                    “
                  </span>

                  <div className="flex items-center gap-1 text-[#FFDD00]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-[#FFDD00]"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-[16px] font-light leading-relaxed text-[#616161]">
                    {t.quote}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span
                      className="grid size-11 place-items-center rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: t.avatarBg }}
                      aria-hidden
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-[#1A1A1A]">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-[#616161]">
                        {t.role} · {t.city}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Chip color={t.categoryColor}>{t.category}</Chip>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="grid size-10 place-items-center rounded-full border border-[#E8E8E8] bg-white text-[#616161] hover:text-[#21C2FF] hover:border-[#21C2FF] transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  'size-2.5 rounded-full transition-all',
                  i === index
                    ? 'bg-[#21C2FF] w-7'
                    : 'bg-[#E8E8E8] hover:bg-[#21C2FF]/40',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={next}
            className="grid size-10 place-items-center rounded-full border border-[#E8E8E8] bg-white text-[#616161] hover:text-[#21C2FF] hover:border-[#21C2FF] transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Testimonials;

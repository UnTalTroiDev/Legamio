import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Send, Sparkles } from 'lucide-react';

import LegamioMark from '@/assets/logo/LegamioMark';
import { Badge, Button } from '@/components/ui';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer, floatY } from '@/lib/animations';

export function Hero() {
  const { ref: socialRef, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(2000, inView, 1800);

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-20 md:pb-24">
      {/* Grilla editorial sutil — sensación de página de diario jurídico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '8.333% 100%',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-7"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="cyan" dot icon={<Sparkles className="size-3.5" />}>
              Inteligencia Legal Colombiana
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-[40px] md:text-[64px] font-medium leading-[1.02] tracking-tight text-[#1A1A1A]"
          >
            Tu aliado legal para{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-display-italic font-normal">crecer sin miedo</span>
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 w-full h-[10px] text-[#21C2FF]"
              >
                <motion.path
                  d="M2 8 C 60 2, 150 12, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-[500px] text-lg md:text-xl font-light text-[#616161] leading-relaxed"
          >
            Resuelve dudas jurídicas, genera contratos personalizados y accede a
            guías legales. Todo en minutos, sin costos de hora de abogado.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="size-4" />}
            >
              Empieza gratis
            </Button>
            <Button
              variant="ghost"
              size="lg"
              leftIcon={<PlayCircle className="size-5" />}
            >
              Ver demo
            </Button>
          </motion.div>

          <motion.div
            ref={socialRef}
            variants={fadeInUp}
            className="mt-2 grid grid-cols-2 gap-x-8 gap-y-2 max-w-md"
          >
            <div className="border-l-2 border-[#21C2FF] pl-4">
              <p className="font-display text-[36px] md:text-[40px] font-medium leading-none text-[#1A1A1A] tracking-tight">
                {count.toLocaleString('es-CO')}
                <span className="font-display-italic text-[#21C2FF]">+</span>
              </p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.08em] text-[#616161]">
                Empresas activas
              </p>
            </div>
            <div className="border-l-2 border-[#1A1A1A] pl-4">
              <p className="font-display text-[36px] md:text-[40px] font-medium leading-none text-[#1A1A1A] tracking-tight">
                12<span className="font-display-italic text-[#616161]">s</span>
              </p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.08em] text-[#616161]">
                Contrato promedio
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mockup chat */}
        <div className="relative">
          {/* Halo único cyan — un solo punto de calor cromático */}
          <div
            aria-hidden
            className="absolute -top-10 -right-12 size-72 rounded-full blur-3xl"
            style={{ backgroundColor: '#21C2FF', opacity: 0.16 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={floatY(12, 4)}
              className="relative rounded-3xl bg-white border border-[#E8E8E8] shadow-[0_16px_48px_rgba(0,0,0,0.14)] overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[#F0F0F0] px-5 py-4">
                <div className="flex items-center gap-2">
                  <LegamioMark size={28} />
                  <span className="font-bold text-[#1A1A1A] text-sm">Legamio IA</span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] text-[#21C2FF] font-bold">
                  <span className="relative inline-flex size-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#21C2FF] opacity-70" />
                    <span className="relative inline-block size-2 rounded-full bg-[#21C2FF]" />
                  </span>
                  En línea
                </span>
              </div>

              <div className="flex flex-col gap-4 px-5 py-6 bg-white">
                <div className="self-end max-w-[80%] rounded-2xl rounded-br-md bg-[#21C2FF] px-4 py-3 text-white text-sm shadow-[0_4px_12px_rgba(33,194,255,0.25)]">
                  ¿Qué contrato necesito para un empleado por horas?
                </div>

                <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md border border-[#E8F8FF] bg-[#F8F8F8] px-4 py-3 text-[#1A1A1A] text-sm">
                  <div className="flex items-center gap-2 mb-2 text-[12px] text-[#616161]">
                    <LegamioMark size={16} />
                    <span className="font-bold">Legamio IA</span>
                  </div>
                  Para un empleado por horas en Colombia te recomiendo un{' '}
                  <strong>Contrato Laboral por Horas</strong> regulado por el
                  Código Sustantivo del Trabajo. ¿Quieres que lo genere ahora?
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-[#F0F0F0] bg-white px-3 py-3">
                <div className="flex-1 rounded-full bg-[#F8F8F8] px-4 py-2.5 text-sm text-[#999]">
                  Describe tu situación legal…
                </div>
                <button
                  type="button"
                  aria-label="Enviar"
                  className="grid size-10 place-items-center rounded-full bg-[#21C2FF] text-white shadow-[0_4px_12px_rgba(33,194,255,0.35)] hover:brightness-110 transition"
                >
                  <Send className="size-4" />
                </button>
              </div>
            </motion.div>

            {/* Tarjeta flotante: contrato listo — única tarjeta accesoria */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-[#E8E8E8] shadow-[0_8px_24px_rgba(0,0,0,0.10)] px-4 py-3"
            >
              <span className="grid size-9 place-items-center rounded-full bg-[#F0FBFF] text-[#21C2FF]">
                <Sparkles className="size-4" />
              </span>
              <div className="text-xs">
                <p className="font-bold text-[#1A1A1A]">Contrato listo</p>
                <p className="text-[#616161]">
                  en <span className="font-display-italic font-medium text-[#1A1A1A]">12s</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

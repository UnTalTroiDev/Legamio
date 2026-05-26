import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Send, Sparkles } from 'lucide-react';

import Wordmark from '@/assets/logo/Wordmark';
import LegamioMark from '@/assets/logo/LegamioMark';
import { Badge, Button } from '@/components/ui';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer, floatY } from '@/lib/animations';

const avatars = [
  { bg: '#21C2FF', initials: 'MR' },
  { bg: '#FF6BFF', initials: 'LC' },
  { bg: '#FFA200', initials: 'DV' },
  { bg: '#FFDD00', initials: 'AC' },
];

const particles = [
  { color: '#21C2FF', size: 14, top: '8%', left: '6%', duration: 5 },
  { color: '#FF6BFF', size: 10, top: '20%', left: '88%', duration: 4 },
  { color: '#FFDD00', size: 12, top: '70%', left: '4%', duration: 6 },
  { color: '#FFA200', size: 8, top: '55%', left: '92%', duration: 3.5 },
  { color: '#21C2FF', size: 9, top: '88%', left: '40%', duration: 5.5 },
  { color: '#FF6BFF', size: 11, top: '12%', left: '50%', duration: 4.5 },
  { color: '#FFA200', size: 8, top: '40%', left: '70%', duration: 5 },
];

export function Hero() {
  const { ref: socialRef, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(2000, inView, 1800);

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-20 md:pb-24">
      {/* Partículas flotantes */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0.35,
            }}
            animate={{ y: [0, -18, 0], x: [0, i % 2 === 0 ? 6 : -6, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden
          />
        ))}
      </div>

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
            className="text-[36px] md:text-[56px] font-bold leading-[1.05] tracking-tight text-[#1A1A1A]"
          >
            Tu aliado legal para{' '}
            <span className="relative inline-block">
              <span className="relative z-10">crecer sin miedo</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 rounded-sm"
                style={{ backgroundColor: '#FFDD00', opacity: 0.55 }}
              />
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
            className="flex items-center gap-4 pt-2"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((a, i) => (
                <span
                  key={i}
                  className="grid size-9 place-items-center rounded-full border-2 border-white text-xs font-bold text-white"
                  style={{ backgroundColor: a.bg }}
                  aria-hidden
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#616161]">
              <span className="font-bold text-[#1A1A1A]">
                Más de {count.toLocaleString('es-CO')}+
              </span>{' '}
              empresas ya confían en Legamio
            </p>
          </motion.div>
        </motion.div>

        {/* Mockup chat */}
        <div className="relative">
          {/* blobs decorativos */}
          <div
            aria-hidden
            className="absolute -top-8 -right-10 size-56 rounded-full blur-3xl"
            style={{ backgroundColor: '#21C2FF', opacity: 0.18 }}
          />
          <div
            aria-hidden
            className="absolute -bottom-8 -left-6 size-48 rounded-full blur-3xl"
            style={{ backgroundColor: '#FF6BFF', opacity: 0.16 }}
          />
          <div
            aria-hidden
            className="absolute top-20 right-32 size-24 rounded-full blur-2xl"
            style={{ backgroundColor: '#FFDD00', opacity: 0.18 }}
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

            {/* Tarjeta flotante: contrato listo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-[#E8E8E8] shadow-[0_8px_24px_rgba(0,0,0,0.10)] px-4 py-3"
            >
              <span className="grid size-9 place-items-center rounded-full bg-[#FFF0FF] text-[#FF6BFF]">
                <Sparkles className="size-4" />
              </span>
              <div className="text-xs">
                <p className="font-bold text-[#1A1A1A]">Contrato listo</p>
                <p className="text-[#616161]">en 12 segundos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mini logo flotante de marca para reforzar — sobre fondo blanco solo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="absolute -top-4 -right-2 hidden md:block bg-white px-3 py-2 rounded-xl border border-[#E8E8E8] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          >
            <Wordmark variant="dark" withTagline={false} size={22} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

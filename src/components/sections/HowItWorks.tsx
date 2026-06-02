import { motion } from 'framer-motion';
import { CheckCircle, Cpu, MessageSquare, type LucideIcon } from 'lucide-react';

import { SectionWrapper } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Step {
  number: string;
  numberColor: string;
  icon: LucideIcon;
  bg: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    numberColor: '#21C2FF',
    icon: MessageSquare,
    bg: '#21C2FF',
    title: 'Describe tu situación',
    description:
      'Cuéntanos qué necesitas en lenguaje natural. Sin tecnicismos, sin formularios complejos.',
  },
  {
    number: '02',
    numberColor: '#FF6BFF',
    icon: Cpu,
    bg: '#FF6BFF',
    title: 'Nuestra IA analiza',
    description:
      'Nuestro motor de inteligencia legal colombiana procesa tu caso y encuentra la mejor solución.',
  },
  {
    number: '03',
    numberColor: '#1A1A1A',
    icon: CheckCircle,
    bg: '#1A1A1A',
    title: 'Obtén tu resultado',
    description:
      'Recibe la respuesta a tu consulta, contrato generado o guía personalizada. Listo para usar.',
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona" background="white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-[32px] md:text-[46px] font-medium text-[#1A1A1A] leading-[1.05] tracking-tight"
        >
          ¿Cómo <span className="font-display-italic font-normal">funciona</span>?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xl font-light text-[#616161]"
        >
          En 3 simples pasos tienes tu solución legal lista
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="relative mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
      >
        {/* línea conectora desktop */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-8 left-[16.6%] right-[16.6%] h-px border-t border-dashed border-[#E8E8E8]"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: 'left',
              backgroundImage:
                'linear-gradient(to right, #21C2FF 0%, #FF6BFF 55%, #1A1A1A 100%)',
              opacity: 0.55,
            }}
            className="h-px -mt-px"
          />
        </div>

        {steps.map(({ icon: Icon, ...step }, idx) => (
          <motion.div
            key={step.number}
            variants={fadeInUp}
            className="relative flex flex-col items-center text-center px-4"
          >
            <span
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 -top-[60px] text-[104px] font-bold leading-none select-none tracking-tight"
              style={{ color: step.numberColor, opacity: 0.4 }}
            >
              {step.number}
            </span>
            <div
              className="relative z-10 grid size-16 place-items-center rounded-full text-white shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
              style={{ backgroundColor: step.bg }}
            >
              <Icon className="size-7" strokeWidth={2.2} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
            <p className="mt-3 max-w-xs text-[15px] font-light text-[#616161] leading-relaxed">
              {step.description}
            </p>

            {idx < steps.length - 1 && (
              <div
                aria-hidden
                className="lg:hidden mt-8 h-10 w-px border-l border-dashed border-[#E8E8E8]"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default HowItWorks;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard, Lock, ShieldCheck } from 'lucide-react';

import { Badge, Button, SectionWrapper } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

type Cycle = 'monthly' | 'annual';

interface Plan {
  name: string;
  badge: string;
  description: string;
  priceMonthly: string;
  priceAnnual: string;
  priceSuffix?: string;
  features: string[];
  cta: string;
  highlight: boolean;
  variant: 'light' | 'cyan' | 'dark';
}

const plans: Plan[] = [
  {
    name: 'Gratuito',
    badge: 'Gratis para siempre',
    description: 'Ideal para probar Legamio.',
    priceMonthly: '$0',
    priceAnnual: '$0',
    priceSuffix: '/ mes',
    features: [
      '3 consultas IA por mes',
      '1 contrato básico',
      'Acceso a guías gratuitas',
      'Soporte por email',
    ],
    cta: 'Empezar gratis',
    highlight: false,
    variant: 'light',
  },
  {
    name: 'Pro',
    badge: 'Más popular',
    description: 'Para emprendedores y PYMEs.',
    priceMonthly: '$49.000',
    priceAnnual: '$39.000',
    priceSuffix: 'COP / mes',
    features: [
      'Consultas IA ilimitadas',
      '10 contratos por mes',
      'Todas las guías premium',
      'Dashboard completo',
      'Alertas legales',
      'Soporte prioritario',
    ],
    cta: 'Empezar con Pro',
    highlight: true,
    variant: 'cyan',
  },
  {
    name: 'Empresarial',
    badge: 'Para equipos',
    description: 'Compañías con necesidades a medida.',
    priceMonthly: 'Personalizado',
    priceAnnual: 'Personalizado',
    priceSuffix: 'contáctanos',
    features: [
      'Todo lo de Pro',
      'Usuarios ilimitados',
      'Contratos ilimitados',
      'API access',
      'SLA garantizado',
      'Gerente de cuenta dedicado',
    ],
    cta: 'Hablar con ventas',
    highlight: false,
    variant: 'dark',
  },
];

const guarantees = [
  { icon: CreditCard, label: 'Sin tarjeta de crédito' },
  { icon: ShieldCheck, label: 'Cancela cuando quieras' },
  { icon: Lock, label: 'Datos protegidos (Ley 1581)' },
];

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('monthly');

  return (
    <SectionWrapper id="precios" background="white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="cyan">Precios transparentes</Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="mt-5 text-[32px] md:text-[42px] font-bold text-[#1A1A1A] leading-tight"
        >
          Elige el plan que necesitas
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg font-light text-[#616161]"
        >
          Comienza gratis. Escala cuando tu negocio lo requiera. Sin sorpresas.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E8E8E8] bg-[#F8F8F8] p-1.5"
          role="tablist"
          aria-label="Ciclo de facturación"
        >
          <button
            type="button"
            role="tab"
            aria-selected={cycle === 'monthly'}
            onClick={() => setCycle('monthly')}
            className="relative px-5 py-2 text-sm font-bold rounded-full transition-colors"
          >
            {cycle === 'monthly' && (
              <motion.span
                layoutId="cycle-pill"
                className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              />
            )}
            <span
              className={cn(
                'relative',
                cycle === 'monthly' ? 'text-[#1A1A1A]' : 'text-[#616161]',
              )}
            >
              Mensual
            </span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={cycle === 'annual'}
            onClick={() => setCycle('annual')}
            className="relative flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-full transition-colors"
          >
            {cycle === 'annual' && (
              <motion.span
                layoutId="cycle-pill"
                className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              />
            )}
            <span
              className={cn(
                'relative',
                cycle === 'annual' ? 'text-[#1A1A1A]' : 'text-[#616161]',
              )}
            >
              Anual
            </span>
            <span
              className="relative rounded-full bg-[#FFDD00] px-2 py-0.5 text-[11px] font-bold text-[#1A1A1A]"
              aria-label="Ahorra 20%"
            >
              -20%
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-stretch"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeInUp}
            className={cn(
              'relative rounded-3xl overflow-hidden flex flex-col',
              plan.variant === 'light' &&
                'border border-[#E8E8E8] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
              plan.variant === 'cyan' &&
                'bg-white shadow-[0_8px_32px_rgba(33,194,255,0.20)] lg:scale-[1.04] z-10',
              plan.variant === 'dark' &&
                'border border-[#1A1A1A] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
            )}
          >
            {plan.highlight && (
              <span className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FFDD00] px-3 py-1 text-[12px] font-bold text-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
                {plan.badge}
              </span>
            )}

            <div
              className={cn(
                'px-7 pt-12 pb-8',
                plan.variant === 'light' && 'bg-[#F8F8F8]',
                plan.variant === 'cyan' && 'bg-[#21C2FF] text-white',
                plan.variant === 'dark' && 'bg-[#1A1A1A] text-white',
              )}
            >
              {!plan.highlight && (
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold mb-4',
                    plan.variant === 'light' && 'bg-white text-[#616161]',
                    plan.variant === 'dark' && 'bg-white/10 text-white',
                  )}
                >
                  {plan.badge}
                </span>
              )}

              <h3
                className={cn(
                  'text-2xl font-bold',
                  plan.variant === 'light' ? 'text-[#1A1A1A]' : 'text-white',
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  'mt-1 text-sm font-light',
                  plan.variant === 'light'
                    ? 'text-[#616161]'
                    : 'text-white/80',
                )}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={cn(
                    'text-4xl font-bold tracking-tight',
                    plan.variant === 'light' ? 'text-[#1A1A1A]' : 'text-white',
                  )}
                >
                  {cycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                </span>
                {plan.priceSuffix && (
                  <span
                    className={cn(
                      'text-sm font-light',
                      plan.variant === 'light'
                        ? 'text-[#616161]'
                        : 'text-white/80',
                    )}
                  >
                    {plan.priceSuffix}
                  </span>
                )}
              </div>
              {cycle === 'annual' && plan.variant === 'cyan' && (
                <p className="mt-2 text-xs text-white/85">
                  Facturado anualmente · ahorra 20%
                </p>
              )}
            </div>

            <div className="flex-1 px-7 py-7 bg-white">
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[15px] text-[#616161]"
                  >
                    <span
                      className={cn(
                        'mt-0.5 grid size-5 place-items-center rounded-full',
                        plan.variant === 'cyan'
                          ? 'bg-[#F0FBFF] text-[#21C2FF]'
                          : plan.variant === 'dark'
                            ? 'bg-[#1A1A1A] text-white'
                            : 'bg-[#F0FBFF] text-[#21C2FF]',
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                {plan.variant === 'cyan' ? (
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="!bg-white !text-[#21C2FF] !shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:!brightness-100 hover:!bg-[#F0FBFF]"
                  >
                    {plan.cta}
                  </Button>
                ) : plan.variant === 'dark' ? (
                  <Button variant="dark" size="lg" fullWidth>
                    {plan.cta}
                  </Button>
                ) : (
                  <Button variant="secondary" size="lg" fullWidth>
                    {plan.cta}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-[#616161]">
        {guarantees.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-2">
            <Icon className="size-4 text-[#21C2FF]" />
            {label}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Pricing;

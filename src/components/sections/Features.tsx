import { m } from 'framer-motion';
import {
  Bell,
  BookOpen,
  FileSignature,
  Headset,
  LayoutDashboard,
  MessageCircle,
  Scale,
  ScanSearch,
  Shield,
  type LucideIcon,
} from 'lucide-react';

import { Badge, Button, Chip, SectionWrapper } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { ChipColor } from '@/components/ui';
import { goToApp } from '@/lib/config';
import { cn } from '@/lib/utils';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  chip: string;
  chipColor: ChipColor;
  iconColor: string;
  iconBg: string;
  borderHover: string;
  /** Ancla para enlaces del menú (#id) — solo productos. */
  id?: string;
}

/** Productos de pago por suscripción, cada uno con su propio RAG. */
const products: Feature[] = [
  {
    id: 'due-diligence',
    icon: ScanSearch,
    title: 'Smart Due Diligence',
    description:
      'Automatiza la debida diligencia: nuestra IA revisa empresas, documentos y antecedentes para detectar riesgos antes de cualquier negocio, inversión o alianza.',
    chip: 'Análisis de riesgo',
    chipColor: 'cyan',
    iconColor: '#FFFFFF',
    iconBg: '#21C2FF',
    borderHover: 'hover:border-legamio-cyan',
  },
  {
    id: 'legamio-legal',
    icon: FileSignature,
    title: 'Legamio Legal',
    description:
      'Genera contratos laborales y comerciales, actas de creación y de asambleas y otros documentos legales en minutos, adaptados a tu caso y ajustados a la ley colombiana.',
    chip: '+30 documentos',
    chipColor: 'magenta',
    iconColor: '#FFFFFF',
    iconBg: '#FF6BFF',
    borderHover: 'hover:border-legamio-magenta',
  },
  {
    id: 'legamio-litiga',
    icon: Scale,
    title: 'Legamio Litiga',
    description:
      'Un RAG que analiza expedientes con base en el Código General del Proceso (CGP) para estudiar a tu contraparte, anticipar movimientos y preparar tu estrategia.',
    chip: 'Basado en el CGP',
    chipColor: 'orange',
    iconColor: '#FFFFFF',
    iconBg: '#FFA200',
    borderHover: 'hover:border-legamio-orange',
  },
];

/** Capacidades incluidas, transversales a los productos. */
const capabilities: Feature[] = [
  {
    icon: MessageCircle,
    title: 'Consultas legales con IA',
    description:
      'Resuelve tus dudas jurídicas al instante. Nuestra IA está ajustada al entorno legal colombiano y te da respuestas claras y prácticas.',
    chip: 'Disponible 24/7',
    chipColor: 'cyan',
    iconColor: '#21C2FF',
    iconBg: '#F0FBFF',
    borderHover: 'hover:border-legamio-cyan',
  },
  {
    icon: BookOpen,
    title: 'Guías legales gratuitas',
    description:
      'Accede a guías paso a paso sobre trámites empresariales, constitución de sociedades, propiedad intelectual y más.',
    chip: '100% gratuitas',
    chipColor: 'yellow',
    iconColor: '#A88500',
    iconBg: '#FFDD00',
    borderHover: 'hover:border-legamio-yellow',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestión centralizada',
    description:
      'Mantén un panel de control con todos tus documentos, contratos y consultas en un solo lugar. Con historial completo y descarga en PDF.',
    chip: 'Organiza todo',
    chipColor: 'cyan',
    iconColor: '#21C2FF',
    iconBg: '#F0FBFF',
    borderHover: 'hover:border-legamio-cyan',
  },
  {
    icon: Bell,
    title: 'Siempre vigente',
    description:
      'Legamio incorpora continuamente nuevas actualizaciones e información para que accedas a contenido relevante desde una plataforma en constante evolución.',
    chip: 'Contenido actualizado',
    chipColor: 'orange',
    iconColor: '#FFFFFF',
    iconBg: '#FFA200',
    borderHover: 'hover:border-legamio-orange',
  },
  {
    icon: Shield,
    title: 'Confidencialidad garantizada',
    description:
      'Tu información y documentos están protegidos mediante medidas de seguridad diseñadas para resguardar su confidencialidad e integridad.',
    chip: 'Reserva absoluta',
    chipColor: 'gray',
    iconColor: '#FFFFFF',
    iconBg: '#1A1A1A',
    borderHover: 'hover:border-legamio-ink',
  },
  {
    icon: Headset,
    title: 'Soporte cuando lo necesites',
    description:
      'Un equipo a tu disposición para acompañarte en el uso de la plataforma y resolver dudas sobre tus consultas, documentos y procesos.',
    chip: 'Acompañamiento real',
    chipColor: 'magenta',
    iconColor: '#FFFFFF',
    iconBg: '#FF6BFF',
    borderHover: 'hover:border-legamio-magenta',
  },
];

function FeatureCard({ feature, premium }: { feature: Feature; premium?: boolean }) {
  const { icon: Icon, ...f } = feature;
  return (
    <m.article
      id={f.id}
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative rounded-2xl bg-white border border-legamio-border p-7 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300',
        f.borderHover,
        f.id && 'scroll-mt-24',
      )}
    >
      {premium && (
        <span className="absolute right-5 top-5 rounded-full bg-legamio-gray-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-legamio-gray">
          Suscripción
        </span>
      )}
      <div
        className="grid size-14 place-items-center rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: f.iconBg, color: f.iconColor }}
      >
        <Icon className="size-7" strokeWidth={2.2} />
      </div>
      <h3 className="text-[19px] font-bold text-legamio-ink leading-snug">
        {f.title}
      </h3>
      <p className="mt-2.5 text-[15px] font-light leading-relaxed text-legamio-gray">
        {f.description}
      </p>
      <div className="mt-5">
        <Chip color={f.chipColor}>{f.chip}</Chip>
      </div>
    </m.article>
  );
}

export function Features() {
  return (
    <SectionWrapper id="features" background="surface">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        <m.div variants={fadeInUp}>
          <Badge variant="cyan" className="text-base! px-4! py-1.5!">
            Nuestros productos
          </Badge>
        </m.div>
        <m.h2
          variants={fadeInUp}
          className="font-display mt-5 text-[32px] md:text-[46px] font-medium text-legamio-ink leading-[1.05] tracking-tight"
        >
          Tres productos para{' '}
          <span className="font-display-italic font-normal">proteger</span>{' '}
          tu negocio
        </m.h2>
        <m.p
          variants={fadeInUp}
          className="mt-4 text-lg font-light text-legamio-gray"
        >
          Cada producto está impulsado por su propio RAG jurídico, ajustado al
          entorno legal colombiano. Disponibles por suscripción.
        </m.p>
      </m.div>

      {/* Productos de suscripción */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {products.map((f) => (
          <FeatureCard key={f.title} feature={f} premium />
        ))}
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="mt-6 flex justify-center"
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => goToApp('register')}
        >
          Empieza con cualquier producto
        </Button>
      </m.div>

      {/* Capacidades incluidas */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="mt-20 text-center"
      >
        <h3 className="font-display text-[24px] md:text-[30px] font-medium text-legamio-ink tracking-tight">
          Incluido en{' '}
          <span className="font-display-italic font-normal">Legamio</span>
        </h3>
        <p className="mt-3 text-[15px] font-light text-legamio-gray">
          Herramientas y garantías transversales a todos los productos.
        </p>
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {capabilities.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </m.div>
    </SectionWrapper>
  );
}

export default Features;

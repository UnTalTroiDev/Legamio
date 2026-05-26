import { motion } from 'framer-motion';
import {
  Bell,
  BookOpen,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Shield,
  type LucideIcon,
} from 'lucide-react';

import { Badge, Chip, SectionWrapper } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { ChipColor } from '@/components/ui';
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
}

const features: Feature[] = [
  {
    icon: MessageCircle,
    title: 'Consultas legales con IA',
    description:
      'Resuelve tus dudas jurídicas al instante. Nuestra IA entiende el contexto colombiano y te da respuestas claras y accionables.',
    chip: 'Disponible 24/7',
    chipColor: 'cyan',
    iconColor: '#FFFFFF',
    iconBg: '#21C2FF',
    borderHover: 'hover:border-[#21C2FF]',
  },
  {
    icon: FileText,
    title: 'Contratos personalizados',
    description:
      'Genera contratos laborales, de servicios, societarios y más en minutos. Adaptados a tu caso específico y a la ley colombiana.',
    chip: '+30 tipos de contratos',
    chipColor: 'cyan',
    iconColor: '#21C2FF',
    iconBg: '#F0FBFF',
    borderHover: 'hover:border-[#21C2FF]',
  },
  {
    icon: BookOpen,
    title: 'Guías legales gratuitas',
    description:
      'Accede a guías paso a paso sobre trámites empresariales, constitución de sociedades, propiedad intelectual y más.',
    chip: '100% gratuitas',
    chipColor: 'gray',
    iconColor: '#FFFFFF',
    iconBg: '#1A1A1A',
    borderHover: 'hover:border-[#1A1A1A]',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestión centralizada',
    description:
      'Organiza todos tus documentos, contratos y consultas en un solo lugar. Con historial completo y descarga en PDF.',
    chip: 'Organiza todo',
    chipColor: 'cyan',
    iconColor: '#21C2FF',
    iconBg: '#F0FBFF',
    borderHover: 'hover:border-[#21C2FF]',
  },
  {
    icon: Bell,
    title: 'Alertas de cambios normativos',
    description:
      'Mantente al día con los cambios legales que afectan tu negocio. Recibes notificaciones cuando algo relevante cambia.',
    chip: 'Proactivo',
    chipColor: 'gray',
    iconColor: '#1A1A1A',
    iconBg: '#F5F5F5',
    borderHover: 'hover:border-[#1A1A1A]',
  },
  {
    icon: Shield,
    title: 'Confidencialidad garantizada',
    description:
      'Tus consultas y documentos están cifrados y protegidos. Cumplimos con la Ley 1581 de protección de datos de Colombia.',
    chip: 'Ley 1581',
    chipColor: 'cyan',
    iconColor: '#FFFFFF',
    iconBg: '#21C2FF',
    borderHover: 'hover:border-[#21C2FF]',
  },
];

export function Features() {
  return (
    <SectionWrapper id="features" background="surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="cyan">¿Qué puedes hacer?</Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="font-display mt-5 text-[32px] md:text-[46px] font-medium text-[#1A1A1A] leading-[1.05] tracking-tight"
        >
          Todo lo que necesitas para{' '}
          <span className="font-display-italic font-normal">proteger</span>{' '}
          tu negocio
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg font-light text-[#616161]"
        >
          Una plataforma completa de inteligencia legal diseñada para emprendedores
          y empresas colombianas.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map(({ icon: Icon, ...f }) => (
          <motion.article
            key={f.title}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'group rounded-2xl bg-white border border-[#E8E8E8] p-7 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300',
              f.borderHover,
            )}
          >
            <div
              className="grid size-14 place-items-center rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: f.iconBg, color: f.iconColor }}
            >
              <Icon className="size-7" strokeWidth={2.2} />
            </div>
            <h3 className="text-[19px] font-bold text-[#1A1A1A] leading-snug">
              {f.title}
            </h3>
            <p className="mt-2.5 text-[15px] font-light leading-relaxed text-[#616161]">
              {f.description}
            </p>
            <div className="mt-5">
              <Chip color={f.chipColor}>{f.chip}</Chip>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default Features;

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const confettiColors = ['#21C2FF', '#FF6BFF', '#FFDD00', '#FFA200'];

interface ConfettiPiece {
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  top: string;
  left: string;
  delay: number;
  duration: number;
  phase: number;
  rotate: number;
}

function buildConfetti(): ConfettiPiece[] {
  return Array.from({ length: 22 }).map((_, i) => ({
    color: confettiColors[i % confettiColors.length],
    shape: (['circle', 'square', 'triangle'] as const)[i % 3],
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 95}%`,
    delay: Math.random() * 0.6,
    duration: 3 + Math.random() * 3,
    phase: Math.random() * 2,
    rotate: Math.random() * 360,
  }));
}

function ConfettiShape({ color, shape }: { color: string; shape: 'circle' | 'square' | 'triangle' }) {
  if (shape === 'circle') {
    return <span className="block size-3 rounded-full" style={{ backgroundColor: color }} />;
  }
  if (shape === 'square') {
    return <span className="block size-3 rotate-12" style={{ backgroundColor: color }} />;
  }
  return (
    <span
      className="block"
      style={{
        width: 0,
        height: 0,
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderBottom: `10px solid ${color}`,
      }}
    />
  );
}

export function FinalCta() {
  const reduce = useReducedMotion();
  const [confetti] = useState<ConfettiPiece[]>(buildConfetti);

  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-[#1A1A1A] text-white py-20 md:py-28"
    >
      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0">
        {confetti.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: c.delay, duration: 0.6 }}
            className="absolute"
            style={{ top: c.top, left: c.left }}
          >
            <motion.div
              animate={
                reduce
                  ? { rotate: c.rotate }
                  : {
                      y: [0, -10, 0],
                      rotate: [c.rotate, c.rotate + 18, c.rotate - 10, c.rotate],
                    }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: c.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: c.phase,
                    }
              }
            >
              <ConfettiShape color={c.color} shape={c.shape} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-[36px] md:text-[52px] font-medium leading-[1.05] tracking-tight text-white"
        >
          ¿Listo para{' '}
          <span className="font-display-italic font-normal">proteger</span>{' '}
          tu negocio?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-5 text-lg font-light text-[#B8B8B8]"
        >
          Únete a más de 2,000 empresas que ya usan Legamio para resolver su día
          a día legal.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="size-4" />}
            onClick={() => {
              window.location.href = 'https://legamio.com.co/#/register';
            }}
          >
            Empezar gratis
          </Button>
          <Button
            size="lg"
            leftIcon={<PlayCircle className="size-5" />}
            className="!bg-transparent !text-white border border-white/30 hover:!bg-white/10"
          >
            Ver demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FinalCta;

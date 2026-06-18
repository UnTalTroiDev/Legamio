import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';

import { Button } from '@/components/ui';

export function NotFound() {
  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);

    const prevTitle = document.title;
    document.title = '404 — Página no encontrada · Legamio';

    return () => {
      document.head.removeChild(robots);
      document.title = prevTitle;
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center justify-center bg-white px-6 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '8.333% 100%',
        }}
      />
      <div className="relative mx-auto max-w-xl text-center">
        <span className="inline-grid size-16 place-items-center rounded-2xl bg-legamio-cyan-soft text-legamio-cyan">
          <FileQuestion className="size-7" strokeWidth={2} />
        </span>
        <p className="mt-7 font-display text-[88px] md:text-[120px] font-medium leading-none tracking-tight text-legamio-ink">
          4<span className="font-display-italic text-legamio-cyan">0</span>4
        </p>
        <h1 className="mt-4 font-display text-[28px] md:text-[36px] font-medium leading-tight tracking-tight text-legamio-ink">
          Esta página{' '}
          <span className="font-display-italic font-normal">no existe</span>
        </h1>
        <p className="mt-3 text-legamio-muted font-light">
          La dirección que buscas se mudó o nunca llegó a existir. Volvamos al
          camino correcto.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ArrowLeft className="size-4" />}
            >
              Volver al inicio
            </Button>
          </Link>
          <Link to="/chat">
            <Button variant="ghost" size="lg">
              Probar Legamio IA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

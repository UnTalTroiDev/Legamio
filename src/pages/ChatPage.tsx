import { Suspense, lazy } from 'react';
import { Badge } from '@/components/ui';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

const LegalChat = lazy(() => import('@/components/sections/LegalChat'));

export function ChatPage() {
  return (
    <div className="bg-legamio-surface min-h-[calc(100vh-72px)] py-12">
      <div className="mx-auto max-w-[1200px] px-6 mb-8 text-center">
        <Badge variant="cyan" dot>
          Producto
        </Badge>
        <h1 className="mt-4 font-display text-[32px] md:text-[44px] font-medium leading-[1.05] tracking-tight text-legamio-ink">
          Chat IA{' '}
          <span className="font-display-italic font-normal">Legal</span>
        </h1>
        <p className="mt-3 text-legamio-gray font-light">
          Resuelve tus dudas legales en lenguaje natural.
        </p>
      </div>
      <Suspense fallback={<SectionSkeleton height={640} background="surface" />}>
        <LegalChat />
      </Suspense>
    </div>
  );
}

export default ChatPage;

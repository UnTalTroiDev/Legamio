import { Suspense, lazy } from 'react';
import { Badge } from '@/components/ui';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

const LegalChat = lazy(() => import('@/components/sections/LegalChat'));

export function ChatPage() {
  return (
    <main className="bg-[#F8F8F8] min-h-[calc(100vh-72px)] py-12">
      <div className="mx-auto max-w-[1200px] px-6 mb-8 text-center">
        <Badge variant="cyan" dot>
          Producto
        </Badge>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          Chat IA Legal
        </h1>
        <p className="mt-3 text-[#616161] font-light">
          Resuelve tus dudas legales en lenguaje natural.
        </p>
      </div>
      <Suspense fallback={<SectionSkeleton height={640} background="surface" />}>
        <LegalChat />
      </Suspense>
    </main>
  );
}

export default ChatPage;

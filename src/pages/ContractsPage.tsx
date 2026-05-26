import { Suspense, lazy } from 'react';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

const ContractGenerator = lazy(
  () => import('@/components/sections/ContractGenerator'),
);

export function ContractsPage() {
  return (
    <main className="bg-white min-h-[calc(100vh-72px)]">
      <Suspense fallback={<SectionSkeleton height={680} />}>
        <ContractGenerator />
      </Suspense>
    </main>
  );
}

export default ContractsPage;

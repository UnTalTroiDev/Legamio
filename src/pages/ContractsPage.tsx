import { Suspense, lazy } from 'react';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

const ContractGenerator = lazy(
  () => import('@/components/sections/ContractGenerator'),
);

export function ContractsPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-72px)]">
      <Suspense fallback={<SectionSkeleton height={680} />}>
        <ContractGenerator />
      </Suspense>
    </div>
  );
}

export default ContractsPage;

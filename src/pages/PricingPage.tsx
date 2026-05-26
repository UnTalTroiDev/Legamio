import Pricing from '@/components/sections/Pricing';
import FinalCta from '@/components/sections/FinalCta';

export function PricingPage() {
  return (
    <main className="bg-white min-h-[calc(100vh-72px)]">
      <Pricing />
      <FinalCta />
    </main>
  );
}

export default PricingPage;

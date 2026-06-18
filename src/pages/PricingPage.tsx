import Pricing from '@/components/sections/Pricing';
import FinalCta from '@/components/sections/FinalCta';

export function PricingPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-72px)]">
      <Pricing />
      <FinalCta />
    </div>
  );
}

export default PricingPage;

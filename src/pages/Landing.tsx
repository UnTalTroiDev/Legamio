import { Suspense, lazy } from 'react';

import Hero from '@/components/sections/Hero';
import LogoMarquee from '@/components/sections/LogoMarquee';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FinalCta from '@/components/sections/FinalCta';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

const LegalChatSection = lazy(() => import('@/components/sections/LegalChatSection'));
const ContractGenerator = lazy(() => import('@/components/sections/ContractGenerator'));

export function LandingPage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Features />
      <HowItWorks />
      <Suspense fallback={<SectionSkeleton background="surface" height={520} />}>
        <LegalChatSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height={520} />}>
        <ContractGenerator />
      </Suspense>
      <Testimonials />
      <Pricing />
      <FinalCta />
    </>
  );
}

export default LandingPage;

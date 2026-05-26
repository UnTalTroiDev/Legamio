import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

import LandingPage from '@/pages/Landing';
import ChatPage from '@/pages/ChatPage';
import ContractsPage from '@/pages/ContractsPage';
import PricingPage from '@/pages/PricingPage';
import NotFoundPage from '@/pages/NotFound';

function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#616161]">
      <RouteScrollReset />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/contratos" element={<ContractsPage />} />
          <Route path="/precios" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

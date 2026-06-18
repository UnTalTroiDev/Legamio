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
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Si la URL trae un ancla (#seccion), desplázate a ese elemento;
    // si no, vuelve al inicio. Esperamos un frame para que el destino exista.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
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

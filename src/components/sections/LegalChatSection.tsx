import { Badge, SectionWrapper } from '@/components/ui';
import LegalChat from './LegalChat';

export function LegalChatSection() {
  return (
    <SectionWrapper id="chat-ia" background="surface" fullBleed>
      <div className="mx-auto max-w-[1200px] px-6 mb-10 text-center">
        <Badge variant="cyan" dot>
          Demo interactiva
        </Badge>
        <h2 className="mt-5 text-[32px] md:text-[42px] font-bold text-[#1A1A1A] leading-tight">
          Habla con Legamio IA
        </h2>
        <p className="mt-3 text-lg font-light text-[#616161] max-w-2xl mx-auto">
          Una vista previa funcional del asistente legal. Escribe, sugiere y mira
          cómo se genera el documento.
        </p>
      </div>
      <LegalChat />
    </SectionWrapper>
  );
}

export default LegalChatSection;

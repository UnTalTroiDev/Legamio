/**
 * Banda horizontal infinita con logos ficticios de empresas.
 * Texto en tipografía estilizada (no usamos logos reales). Fondo blanco.
 */
const brands = [
  'TechBog',
  'Natura Orgánica',
  'PuebloLab',
  'CaféTropical',
  'AndinaCo',
  'NubeAzul',
  'Saber+',
  'Lumen Studio',
  'Selva',
  'PlanIA',
];

export function LogoMarquee() {
  const items = [...brands, ...brands];
  return (
    <section className="border-y border-[#E8E8E8] bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-[2px] text-[#999]">
          Empresas que confían en Legamio
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="legamio-marquee flex w-max items-center gap-14 px-6 whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={i}
              className="text-2xl font-bold tracking-tight text-[#999]/70 hover:text-[#21C2FF] transition-colors"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;

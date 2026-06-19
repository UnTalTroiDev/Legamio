const brands = [
  'Ronce S.A.S',
  'Salazar Abogados S.A.S',
  'JA Inversiones Forestales S.A.S',
  'Cpece Consultorio Panameño S.A',
  'Gestores de Negocios Inmobiliarios',
  'SV Map S.A.S',
  'RB de Colombia S.A.S',
  'Consultorio Empresarial y de Comercio Exterior S.A.S',
];

export function LogoMarquee() {
  const items = [...brands, ...brands];
  return (
    <section className="border-y border-legamio-border bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-[2px] text-legamio-muted">
          Empresas que confían en Legamio
        </p>
      </div>
      <div className="relative w-full overflow-hidden legamio-marquee-fade">
        <div className="legamio-marquee flex w-max items-center gap-14 px-6 whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl font-medium tracking-tight text-legamio-muted/70 hover:text-legamio-cyan transition-colors"
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

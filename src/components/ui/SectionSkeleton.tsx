interface SectionSkeletonProps {
  height?: number;
  background?: 'white' | 'surface';
}

export function SectionSkeleton({
  height = 480,
  background = 'white',
}: SectionSkeletonProps) {
  return (
    <section
      className={background === 'surface' ? 'bg-[#F8F8F8] py-16' : 'bg-white py-16'}
      style={{ minHeight: height }}
      aria-busy
      aria-label="Cargando contenido"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto h-6 w-40 rounded-full bg-[#E8E8E8] animate-pulse" />
        <div className="mx-auto mt-5 h-10 w-2/3 rounded-lg bg-[#E8E8E8] animate-pulse" />
        <div className="mx-auto mt-3 h-5 w-1/2 rounded-md bg-[#E8E8E8] animate-pulse" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-48 rounded-2xl bg-white border border-[#E8E8E8] animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionSkeleton;

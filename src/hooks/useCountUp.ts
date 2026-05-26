import { useEffect, useState } from 'react';

/**
 * Anima un contador de 0 hasta `target` cuando `enabled` es true.
 * Usa requestAnimationFrame y un easing easeOutCubic.
 */
export function useCountUp(target: number, enabled: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, duration]);

  return value;
}

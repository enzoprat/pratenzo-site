'use client';

import { useEffect } from 'react';

/* Applique un skew global aux .skew-on-scroll selon la vélocité du scroll */
export default function ScrollVelocity() {
  useEffect(() => {
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let velocity = 0;
    let raf;

    const update = () => {
      const decay = velocity * 0.85;
      velocity = Math.abs(decay) < 0.05 ? 0 : decay;

      // Limite le skew à ±5deg pour rester subtil
      const skew = Math.max(-5, Math.min(5, velocity * 0.06));
      document.documentElement.style.setProperty('--scroll-skew', `${skew}deg`);

      raf = requestAnimationFrame(update);
    };

    const onScroll = () => {
      const now = performance.now();
      const dt = now - lastTime;
      const dy = window.scrollY - lastY;
      if (dt > 0) {
        velocity = dy / dt * 16; // normalisé ~60fps
      }
      lastY = window.scrollY;
      lastTime = now;
    };

    raf = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
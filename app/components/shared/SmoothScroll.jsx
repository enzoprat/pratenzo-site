'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/* Smooth scroll global type studio */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.1
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Anchors → scroll smooth via Lenis
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80, duration: 1.4 });
      }
    };
    anchors.forEach((a) => a.addEventListener('click', handleClick));

    return () => {
      anchors.forEach((a) => a.removeEventListener('click', handleClick));
      lenis.destroy();
    };
  }, []);

  return null;
}
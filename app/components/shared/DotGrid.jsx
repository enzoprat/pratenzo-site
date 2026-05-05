'use client';

import { useEffect, useRef } from 'react';

/* Grille de points qui s'illuminent au passage de la souris (canvas léger) */
export default function DotGrid({ spacing = 40, radius = 1.5, glowRadius = 130 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0;
    let dots = [];
    let mouse = { x: -9999, y: -9999 };
    let raf;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);
      const offsetX = (w - (cols - 1) * spacing) / 2;
      const offsetY = (h - (rows - 1) * spacing) / 2;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({
            x: offsetX + x * spacing,
            y: offsetY + y * spacing
          });
        }
      }
    };

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      const r2 = glowRadius * glowRadius;

      for (const d of dots) {
        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const dist2 = dx * dx + dy * dy;
        let alpha = 0.12;
        let size = radius;

        if (dist2 < r2) {
          const t = 1 - dist2 / r2;
          alpha = 0.12 + t * 0.85;
          size = radius + t * 2.4;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [spacing, radius, glowRadius]);

  return <canvas ref={canvasRef} className="dot-grid" aria-hidden="true" />;
}
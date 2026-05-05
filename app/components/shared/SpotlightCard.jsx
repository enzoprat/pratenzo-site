'use client';

import { useRef } from 'react';

/* Carte avec halo qui suit le curseur */
export default function SpotlightCard({ children, className = '', as: Tag = 'div', ...props }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      className={`spotlight-card ${className}`}
      onMouseMove={onMove}
      {...props}
    >
      <div className="spotlight-card__halo" />
      <div className="spotlight-card__inner">{children}</div>
    </Tag>
  );
}
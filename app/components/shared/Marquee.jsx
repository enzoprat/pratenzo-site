'use client';

/* Bande défilante infinie */
export default function Marquee({ items = [], speed = 40, className = '' }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((it, i) => (
          <span key={i} className="marquee__item">
            {it}
            <span className="marquee__sep" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
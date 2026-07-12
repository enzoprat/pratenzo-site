'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import { realisations } from '@/app/lib/config';

/* Carte avec léger tilt 3D au mouvement de la souris */
function TiltCard({ r }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 5}deg) translateY(-6px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <article
      ref={ref}
      className="real-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-text="Voir"
    >
      <div className="real-card__media">
        <img
          src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(r.url)}?w=800&h=500`}
          alt={`Aperçu du site ${r.name} — ${r.category} réalisé par Prat Enzo`}
          loading="lazy"
          width="800"
          height="500"
        />
        <a
          className="real-card__overlay"
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir le site ${r.name} (nouvel onglet)`}
        >
          <span className="real-card__view-pill">
            Voir le site <ExternalLink size={13} />
          </span>
        </a>
      </div>
      <div className="real-card__body">
        <div className="real-card__cat">{r.category}</div>
        <h3 className="real-card__title">{r.name}</h3>
        <p className="real-card__desc">{r.description}</p>
        <a
          className="real-card__link"
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le site <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

/* Screenshot via WordPress.com mshots (gratuit, illimité, sans clé) */
const screenshot = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=500`;

export default function Realisations() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? (el.scrollLeft / max) * 100 : 0;
    setProgress(p);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  };

  useEffect(() => {
    updateState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      el.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.real-card');
    const step = card ? card.getBoundingClientRect().width + 22 : 400;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="section section--soft" id="realisations">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="section__eyebrow">Réalisations</span>
            <h2>Quelques projets livrés</h2>
            <p>
              Une sélection de sites créés pour des artisans, indépendants et
              entreprises de différents secteurs. Glissez pour voir l'ensemble.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="real-carousel">
            <div className="real-track" ref={trackRef}>
              {realisations.map((r) => (
                <TiltCard key={r.url} r={r} />
              ))}
            </div>

            <div className="real-controls">
              <div className="real-progress">
                <div className="real-progress__bar" style={{ width: `${progress}%` }} />
              </div>
              <div className="real-controls__buttons">
                <button
                  className="real-arrow"
                  aria-label="Précédent"
                  onClick={() => scrollBy(-1)}
                  disabled={!canPrev}
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className="real-arrow"
                  aria-label="Suivant"
                  onClick={() => scrollBy(1)}
                  disabled={!canNext}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
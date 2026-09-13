'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Sparkles, Star, Check } from 'lucide-react';
import MagneticButton from '@/app/components/shared/MagneticButton';

/* Mark ChatGPT (attribution d'une réponse réelle — usage nominatif).
   Remplaçable par le SVG officiel déposé dans /public si besoin. */
function ChatGptMark({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21.55 10.02a5.4 5.4 0 0 0-.47-4.44 5.47 5.47 0 0 0-5.9-2.62A5.4 5.4 0 0 0 11.1 1.2a5.47 5.47 0 0 0-5.22 3.78 5.4 5.4 0 0 0-3.62 2.62 5.47 5.47 0 0 0 .68 6.4 5.4 5.4 0 0 0 .47 4.45 5.47 5.47 0 0 0 5.9 2.62 5.4 5.4 0 0 0 4.07 1.75 5.47 5.47 0 0 0 5.22-3.79 5.4 5.4 0 0 0 3.62-2.62 5.47 5.47 0 0 0-.68-6.4Zm-8.1 11.31a4.06 4.06 0 0 1-2.6-.94l.13-.07 4.32-2.5a.7.7 0 0 0 .36-.61v-6.1l1.83 1.06v5.05a4.07 4.07 0 0 1-4.07 4.11Zm-8.72-3.72a4.05 4.05 0 0 1-.49-2.72l.13.08 4.32 2.5a.7.7 0 0 0 .71 0l5.28-3.05v2.11a.07.07 0 0 1-.03.06l-4.37 2.52a4.07 4.07 0 0 1-5.56-1.49Zm-1.14-9.45a4.05 4.05 0 0 1 2.12-1.78v5.14a.7.7 0 0 0 .35.61l5.28 3.05-1.83 1.06-4.32-2.49a4.07 4.07 0 0 1-1.6-5.59Zm15 3.49-5.28-3.06 1.83-1.05 4.32 2.49a4.07 4.07 0 0 1-.63 7.35v-5.13a.7.7 0 0 0-.35-.6Zm1.82-2.74-.13-.08-4.31-2.5a.7.7 0 0 0-.71 0L11.7 9.6V7.48a.07.07 0 0 1 .03-.06l4.37-2.52a4.07 4.07 0 0 1 6.04 4.22Zm-11.44 3.76-1.83-1.06V6.57a4.07 4.07 0 0 1 6.67-3.12l-.13.07-4.32 2.5a.7.7 0 0 0-.36.6l-.01 6.1Zm.99-2.14L12 9.03l2.36 1.36v2.72L12 14.47l-2.36-1.36Z"
      />
    </svg>
  );
}

/* Deux scènes réelles, jouées en boucle : recherche Google → réponse IA.
   Exemple réel et vérifiable (client Enzo Prat). */
const SCENES = [
  { key: 'google', query: 'prof de golf bordeaux' },
  { key: 'ia', query: 'meilleur prof de golf bordeaux' }
];

function SearchDemo() {
  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) return; // pas de boucle : on montre la scène IA (climax) fixe
    const id = setInterval(() => setI(v => (v + 1) % SCENES.length), 4600);
    return () => clearInterval(id);
  }, []);

  // En reduced-motion, on fige sur la scène IA (la preuve la plus forte).
  const active = reduced ? 1 : i;
  const scene = SCENES[active];

  return (
    <div className="rv" aria-hidden="true">
      <div className="rv__tag">
        <span className="rv__tag-dot" /> Exemple réel · client Enzo&nbsp;Prat
      </div>

      <div className="rv__window">
        {/* Barre de recherche */}
        <div className={`rv__search rv__search--${scene.key}`}>
          {scene.key === 'ia' ? <Sparkles size={17} /> : <Search size={17} />}
          <span className="rv__query" key={scene.key}>
            {scene.query}
            <span className="rv__caret" />
          </span>
        </div>

        <div className="rv__stage">
        {/* Scène Google : résultat organique */}
        <div className={`rv__scene ${active === 0 ? 'is-on' : ''}`} data-scene="google">
          <div className="rv__result rv__result--hot">
            <div className="rv__result-head">
              <span className="rv__favicon">NB</span>
              <div>
                <div className="rv__result-title">Cours de golf à Bordeaux — Nils Bouchilloux</div>
                <div className="rv__result-url">nilsbouchilloux.fr</div>
              </div>
            </div>
            <p className="rv__result-snippet">
              Enseignant diplômé BPJEPS · cours individuels et collectifs, travail au radar.
            </p>
            <span className="rv__built"><Check size={12} /> Site conçu par Enzo Prat</span>
          </div>
          <div className="rv__result rv__result--ghost"><span /><span /></div>
          <div className="rv__result rv__result--ghost"><span /><span /></div>
        </div>

        {/* Scène IA : réponse ChatGPT réelle */}
        <div className={`rv__scene ${active === 1 ? 'is-on' : ''}`} data-scene="ia">
          <div className="rv__ai">
            <div className="rv__ai-head">
              <ChatGptMark size={16} /> ChatGPT · réponse réelle
            </div>
            <p className="rv__ai-body">
              « Pour un prof de golf indépendant à Bordeaux,{' '}
              <mark>Nils Bouchilloux</mark> fait partie des recommandations que je
              mettrais&nbsp;en&nbsp;premier. »
            </p>
            <div className="rv__sources">
              <span className="rv__source"><span className="rv__favicon rv__favicon--sm">NB</span> nilsbouchilloux.fr</span>
              <span className="rv__source rv__source--muted">+2 sources</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Étapes — vrai texte, jamais dépendant de l'animation */}
      <ol className="rv__steps">
        <li className={active === 0 ? 'is-on' : ''}><span>01</span> Recherche</li>
        <li className={active === 0 ? 'is-on' : ''}><span>02</span> Résultat</li>
        <li className={active === 1 ? 'is-on' : ''}><span>03</span> Réponse IA</li>
      </ol>
    </div>
  );
}

export default function Hero() {
  const visualRef = useRef(null);

  const onMove = (e) => {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--mx', x.toFixed(3));
    el.style.setProperty('--my', y.toFixed(3));
  };
  const onLeave = () => {
    const el = visualRef.current;
    if (!el) return;
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
  };

  return (
    <section className="hero" id="accueil">
      <div className="aurora" aria-hidden="true">
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
      </div>

      <div className="container hero__inner">
        <div className="hero__col">
          <p className="hero__eyebrow">
            <span>Site web</span>
            <i aria-hidden="true">→</i>
            <span>SEO</span>
            <i aria-hidden="true">→</i>
            <span>GEO</span>
          </p>

          <p className="hero__hook">
            Votre prochain client est peut-être déjà en train de vous chercher.
          </p>

          <h1 className="hero__h1">
            Création de sites web, <strong>SEO et GEO</strong> pour les entreprises en France.
          </h1>

          <p className="hero__sub">
            Depuis Bordeaux, j'accompagne des entreprises partout en France avec des sites
            conçus pour être performants, visibles sur Google et compréhensibles par les
            nouveaux moteurs de recherche IA.
          </p>

          <div className="hero__cta">
            <MagneticButton className="magnetic--primary" href="/contact" data-cursor-text="Go">
              Démarrer un projet <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton className="magnetic--ghost" href="/realisations" strength={0.2} data-cursor-text="Voir">
              Explorer mes réalisations
            </MagneticButton>
          </div>

          <p className="hero__proof">
            <Star size={14} /> Un client déjà <strong>recommandé en premier par ChatGPT</strong> sur sa recherche métier.
          </p>
        </div>

        <div
          className="hero__visual"
          ref={visualRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          data-cursor-text="Vivant"
        >
          <div className="hero__spotlight" aria-hidden="true" />
          <SearchDemo />
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-indicator__line" />
      </div>
    </section>
  );
}

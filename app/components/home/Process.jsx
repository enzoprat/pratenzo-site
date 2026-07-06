'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileUp, Wand2, Eye, Rocket, ChevronDown,
  IdCard, ImageIcon, MessageSquare, Link2
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

const steps = [
  {
    n: '01',
    icon: FileUp,
    title: 'Envoi des éléments',
    desc:
      "Vous transmettez les informations nécessaires : services, zones d'intervention, coordonnées, logo et photos. Tout passe par email ou un espace partagé."
  },
  {
    n: '02',
    icon: Wand2,
    title: 'Création du site',
    desc:
      "Je structure le contenu, crée le design et intègre les éléments de contact. Un premier rendu est partagé pour vos retours."
  },
  {
    n: '03',
    icon: Eye,
    title: 'Validation',
    desc:
      "Vous vérifiez le rendu et les ajustements nécessaires sont effectués avant la mise en ligne. Itérations rapides, retours simples."
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Mise en ligne',
    desc:
      "Le site est prêt à être partagé à vos clients, sur vos réseaux, votre fiche Google ou vos supports commerciaux."
  }
];

const provideGroups = [
  {
    id: 'identity',
    icon: IdCard,
    title: 'Identité',
    desc: 'Les bases pour incarner votre marque',
    items: ["Nom de l'entreprise", 'Logo (si existant)', "Slogan ou phrase d'accroche"]
  },
  {
    id: 'coords',
    icon: MessageSquare,
    title: 'Coordonnées',
    desc: 'Les informations pour vous joindre',
    items: ['Adresse mail', 'Numéro de téléphone', "Adresse / zones d'intervention"]
  },
  {
    id: 'content',
    icon: ImageIcon,
    title: 'Contenus',
    desc: 'Pour donner vie à vos pages',
    items: ['Services proposés', 'Photos de réalisations', 'Textes de présentation']
  },
  {
    id: 'links',
    icon: Link2,
    title: 'Liens utiles',
    desc: 'Tout ce qui peut alimenter votre site',
    items: ['Instagram, Facebook', 'Google Business', 'Ancien site si existant']
  }
];

export default function Process() {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    if (isMobile) {
      section.style.height = 'auto';
      return;
    }

    // Hauteur dynamique : viewport + course horizontale exacte (ratio 1:1)
    const computeHeight = () => {
      const horizontal = inner.scrollWidth - window.innerWidth;
      section.style.height = `${window.innerHeight + Math.max(horizontal, 0)}px`;
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      const maxX = inner.scrollWidth - window.innerWidth;
      inner.style.transform = `translate3d(${-progress * maxX}px, 0, 0)`;
      if (barRef.current) barRef.current.style.width = `${progress * 100}%`;
    };

    computeHeight();
    onScroll();
    // Recompute après chargement des polices / fonts
    const t = setTimeout(() => { computeHeight(); onScroll(); }, 250);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { computeHeight(); onScroll(); });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', computeHeight);
    };
  }, []);

  return (
    <>
      <section className="process-sticky section--deep" id="process" ref={sectionRef}>
        <div className="process-sticky__viewport">
          <div className="process-sticky__inner" ref={innerRef}>
            <div className="process-sticky__intro">
              <span className="section__eyebrow">Process</span>
              <h2>Un process simple, clair et efficace</h2>
              <p>
                De la prise d'information à la mise en ligne, un déroulement fluide
                pour obtenir un site dont vous êtes fier.
              </p>
              <div className="process-sticky__hint" aria-hidden="true">
                <span>Faites défiler</span>
                <svg width="60" height="10" viewBox="0 0 60 10" fill="none">
                  <path d="M0 5 L55 5 M50 1 L55 5 L50 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {steps.map((s, i) => (
              <div key={s.n} className="process-step">
                <div className="process-step__deco" />
                <div className="process-step__head">
                  <div className="process-step__num">{s.n}</div>
                  <div className="process-step__icon"><s.icon size={22} /></div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="process-step__connect" aria-hidden="true">
                  {i < steps.length - 1 ? '→' : '✓'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="process-progress">
          <div className="process-progress__bar" ref={barRef} />
        </div>
      </section>

      <ProvideAccordion />
    </>
  );
}

function ProvideAccordion() {
  const [open, setOpen] = useState('identity');
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="provide-head">
            <span className="section__eyebrow">À fournir</span>
            <h2>Tout ce dont j'ai besoin pour démarrer</h2>
            <p>
              Pas besoin de tout préparer d'un coup — on avance ensemble. Cliquez
              une catégorie pour voir le détail.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="provide-grid">
            {provideGroups.map((g) => {
              const isOpen = open === g.id;
              return (
                <div
                  key={g.id}
                  className={`provide-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="provide-card__head"
                    onClick={() => setOpen(isOpen ? null : g.id)}
                    aria-expanded={isOpen}
                    data-cursor-hover
                  >
                    <span className="provide-card__icon">
                      <g.icon size={20} />
                    </span>
                    <span className="provide-card__main">
                      <span className="provide-card__title">{g.title}</span>
                      <span className="provide-card__desc">{g.desc}</span>
                    </span>
                    <span className="provide-card__chev">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <ul className="provide-card__list">
                          {g.items.map((it, i) => (
                            <motion.li
                              key={it}
                              initial={{ opacity: 0, x: 6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.28, delay: i * 0.04 }}
                            >
                              {it}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
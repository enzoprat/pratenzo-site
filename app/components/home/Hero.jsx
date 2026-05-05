'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Layout, ShoppingBag, MailOpen, Smartphone
} from 'lucide-react';
import MagneticButton from '@/app/components/shared/MagneticButton';

const titleParts = [
  { text: 'Création de sites', strong: false },
  { text: 'internet à Bordeaux', strong: false },
  { text: 'pour professionnels', strong: true },
  { text: 'ambitieux', strong: true }
];

export default function Hero() {
  const visualRef = useRef(null);
  const mockupRef = useRef(null);

  const onMove = (e) => {
    const v = visualRef.current;
    const m = mockupRef.current;
    if (!v || !m) return;
    const rect = v.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    m.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (mockupRef.current) {
      mockupRef.current.style.transform = 'rotateY(-6deg) rotateX(4deg)';
    }
  };

  return (
    <section className="hero" id="accueil">
      <div className="aurora" aria-hidden="true">
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
      </div>

      <div className="container hero__inner">
        <div>
          <motion.span
            className="hero__pill"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="dot" /> Agence en activité — disponible pour vos projets
          </motion.span>

          {/* H1 mask reveal — chaque mot dans son masque */}
          <h1 className="hero__title">
            {titleParts.map((part, i) => (
              <span key={i} className="reveal-mask">
                <motion.span
                  className={part.strong ? 'reveal-word reveal-word--strong' : 'reveal-word'}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.25 + i * 0.12,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                >
                  {part.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            Prat Enzo conçoit des sites vitrines, e-commerce et click & collect pensés
            pour présenter votre activité, rassurer vos clients à Bordeaux et en Gironde,
            et générer plus de demandes.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <MagneticButton
              className="magnetic--primary"
              href="/contact"
              data-cursor-text="Démarrer"
            >
              Demander mon site <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              className="magnetic--ghost"
              href="/realisations"
              strength={0.2}
              data-cursor-text="Voir"
            >
              Voir les réalisations
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <strong>Sites livrés clé en main</strong>
            <span>•</span>
            <span>Responsive</span>
            <span>•</span>
            <span>SEO optimisé</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          ref={visualRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          data-cursor-text="Bouger"
        >
          <div
            ref={mockupRef}
            className="mockup"
            style={{ transform: 'rotateY(-6deg) rotateX(4deg)' }}
          >
            <div className="mockup__bar">
              <span /><span /><span />
              <div className="mockup__url">pratenzo.fr</div>
            </div>
            <div className="mockup__body">
              <div className="mockup__hero">
                <div className="mockup__hero-text">
                  <div /><div />
                </div>
              </div>
              <div className="mockup__lines">
                <div className="mockup__line" />
                <div className="mockup__line mid" />
                <div className="mockup__line short" />
              </div>
              <div className="mockup__grid">
                <div className="mockup__tile" />
                <div className="mockup__tile" />
                <div className="mockup__tile" />
              </div>
            </div>
          </div>

          <div className="float-badge float-badge--1">
            <Layout size={18} /> Site vitrine
          </div>
          <div className="float-badge float-badge--2">
            <ShoppingBag size={18} /> E-commerce
          </div>
          <div className="float-badge float-badge--3">
            <MailOpen size={18} /> Formulaire
          </div>
          <div className="float-badge float-badge--4">
            <Smartphone size={18} /> Mobile first
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-indicator__line" />
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Phone, Eye, Rocket,
  MessageSquare, Globe2
} from 'lucide-react';

/* Pop-ups discrètes contextuelles selon la section en vue.
   Une apparition par section, max 4 par session pour rester subtil. */

const popsConfig = [
  {
    sectionId: 'pour-qui',
    icon: Sparkles,
    title: 'Prat Enzo',
    msg: 'Nouvelle demande reçue à l\u2019instant',
    iconColor: '#8B5CF6'
  },
  {
    sectionId: 'services',
    icon: Eye,
    title: 'Activité',
    msg: 'Site visité 12 fois cette heure',
    iconColor: '#22D3EE'
  },
  {
    sectionId: 'realisations',
    icon: Globe2,
    title: 'Mise en ligne',
    msg: 'Nouveau site livré cette semaine',
    iconColor: '#8B5CF6'
  },
  {
    sectionId: 'process',
    icon: Rocket,
    title: 'Projet validé',
    msg: 'Démarrage prévu lundi prochain',
    iconColor: '#8B5CF6'
  },
  {
    sectionId: 'faq',
    icon: MessageSquare,
    title: 'Question résolue',
    msg: 'Un visiteur vient d\u2019envoyer une demande',
    iconColor: '#8B5CF6'
  },
  {
    sectionId: 'contact',
    icon: Phone,
    title: 'Nouvel appel',
    msg: 'Un client vient d\u2019être recontacté',
    iconColor: '#8B5CF6'
  }
];

const MAX_POPS_PER_SESSION = 4;

export default function ContextualPops() {
  const [active, setActive] = useState(null);
  const seenRef = useRef(new Set());
  const queueRef = useRef([]);
  const showingRef = useRef(false);
  const countRef = useRef(0);

  useEffect(() => {
    const stored = sessionStorage.getItem('siteweb33_pops_count');
    if (stored) countRef.current = parseInt(stored, 10) || 0;

    const showNext = () => {
      if (showingRef.current) return;
      const next = queueRef.current.shift();
      if (!next) return;
      if (countRef.current >= MAX_POPS_PER_SESSION) return;

      showingRef.current = true;
      countRef.current += 1;
      sessionStorage.setItem('siteweb33_pops_count', String(countRef.current));
      setActive(next);

      setTimeout(() => {
        setActive(null);
        showingRef.current = false;
        setTimeout(showNext, 1200);
      }, 5000);
    };

    const tryEnqueue = (id) => {
      if (seenRef.current.has(id)) return;
      const cfg = popsConfig.find(p => p.sectionId === id);
      if (!cfg) return;
      seenRef.current.add(id);
      setTimeout(() => {
        queueRef.current.push(cfg);
        showNext();
      }, 800);
    };

    // Détection via scroll listener (plus fiable que IO avec smooth scroll)
    const checkSections = () => {
      const vh = window.innerHeight;
      for (const cfg of popsConfig) {
        if (seenRef.current.has(cfg.sectionId)) continue;
        const el = document.getElementById(cfg.sectionId);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const visibleTop = Math.max(r.top, 0);
        const visibleBottom = Math.min(r.bottom, vh);
        const visibleH = Math.max(visibleBottom - visibleTop, 0);
        const ratioViewport = visibleH / vh;
        // 35% du viewport occupé par la section = elle est en focus
        if (ratioViewport >= 0.35) {
          tryEnqueue(cfg.sectionId);
          break; // Un seul pop par check
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        checkSections();
        ticking = false;
      });
    };

    // Setup avec délai pour le LoadingScreen
    const setupTimer = setTimeout(() => {
      checkSections(); // Check initial
      window.addEventListener('scroll', onScroll, { passive: true });
    }, 600);

    return () => {
      clearTimeout(setupTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={active.sectionId}
          className="ctx-pop"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="status"
        >
          <div
            className="ctx-pop__icon"
            style={{
              background: `linear-gradient(135deg, ${active.iconColor}, ${active.iconColor}99)`
            }}
          >
            <active.icon size={16} />
          </div>
          <div className="ctx-pop__body">
            <div className="ctx-pop__title">{active.title}</div>
            <div className="ctx-pop__msg">{active.msg}</div>
          </div>
          <button
            className="ctx-pop__close"
            aria-label="Fermer"
            onClick={() => setActive(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
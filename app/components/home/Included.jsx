'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Layout, MailOpen, Globe, Search
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

const groups = [
  {
    id: 'presentation',
    icon: Layout,
    title: 'Présentation',
    desc: "Mettre en avant qui vous êtes et ce que vous proposez",
    items: [
      'Présentation de votre entreprise',
      'Présentation de vos services',
      'Photos de vos réalisations',
      "Zones d'intervention",
      'Mise en page professionnelle',
      'Structure claire et hiérarchisée'
    ]
  },
  {
    id: 'contact',
    icon: MailOpen,
    title: 'Contact & conversion',
    desc: 'Permettre à vos prospects de vous joindre facilement',
    items: [
      'Formulaire de contact intégré',
      "Boutons d'appel directs",
      'Boutons email',
      'Liens vers réseaux sociaux',
      'Notification email à chaque demande'
    ]
  },
  {
    id: 'tech',
    icon: Globe,
    title: 'Technique & responsive',
    desc: 'Un site qui fonctionne partout, sans friction',
    items: [
      'Design responsive mobile/tablette/desktop',
      'Performances optimisées',
      'Code propre et maintenable',
      'Mise en ligne accompagnée',
      'Compatible tous navigateurs'
    ]
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & partage',
    desc: 'Être trouvé sur Google et partagé avec une belle preview',
    items: [
      'Optimisation SEO de base',
      'Balises meta et Open Graph',
      'Aperçu de partage soigné',
      'Sitemap et robots.txt',
      'Hiérarchie Hn correcte'
    ]
  }
];

export default function Included() {
  const [open, setOpen] = useState('presentation');

  return (
    <section className="section section--soft">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="section__eyebrow">Inclus dans un site vitrine</span>
            <h2>Un site vitrine complet pour présenter votre activité</h2>
            <p>
              Tout ce qu'il faut pour donner une image professionnelle, rassurer vos
              prospects et générer plus de demandes. Cliquez pour explorer chaque
              partie.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="included-accordion">
            {groups.map((g) => {
              const isOpen = open === g.id;
              return (
                <div
                  key={g.id}
                  className={`included-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="included-item__head"
                    onClick={() => setOpen(isOpen ? null : g.id)}
                    aria-expanded={isOpen}
                    data-cursor-hover
                  >
                    <span className="included-item__icon">
                      <g.icon size={20} />
                    </span>
                    <span className="included-item__main">
                      <span className="included-item__title">{g.title}</span>
                      <span className="included-item__desc">{g.desc}</span>
                    </span>
                    <span className="included-item__count">
                      {g.items.length} éléments
                    </span>
                    <span className="included-item__chev">
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
                        <ul className="included-item__list">
                          {g.items.map((it, i) => (
                            <motion.li
                              key={it}
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.04 }}
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

        <Reveal>
          <div className="notice" style={{ marginTop: 32 }}>
            Le nom de domaine reste à la charge du client. L'hébergement, la
            maintenance et les évolutions peuvent être proposés séparément selon
            le besoin.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
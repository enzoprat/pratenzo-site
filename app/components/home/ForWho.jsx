'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hammer, User, Store, Briefcase, ShoppingCart,
  Package, Building2, Lightbulb, ArrowRight, Check
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

const personas = [
  {
    id: 'artisans',
    icon: Hammer,
    title: 'Artisans',
    subtitle: 'Plombiers, couvreurs, électriciens, menuisiers…',
    pitch:
      "Votre site présente vos prestations, vos zones d'intervention et rassure vos prospects avant même le premier appel.",
    benefits: [
      "Présentation claire de vos prestations",
      "Mise en avant des zones d'intervention",
      "Photos avant/après pour rassurer",
      "Boutons d'appel directs depuis mobile"
    ],
    suggested: 'Site vitrine'
  },
  {
    id: 'independants',
    icon: User,
    title: 'Indépendants',
    subtitle: 'Coachs, thérapeutes, consultants, prestataires',
    pitch:
      "Un site qui inspire confiance, présente votre approche et facilite la prise de rendez-vous.",
    benefits: [
      "Présentation soignée de votre méthode",
      "Page de tarifs ou de prestations",
      "Formulaire de prise de contact",
      "Optimisation pour Google local"
    ],
    suggested: 'Site vitrine'
  },
  {
    id: 'commerces',
    icon: Store,
    title: 'Commerces',
    subtitle: 'Boutiques locales et points de vente',
    pitch:
      "Une vitrine en ligne qui complète votre point de vente : horaires, produits phares, localisation.",
    benefits: [
      "Galerie produits ou prestations",
      "Horaires et localisation",
      "Liens vers Google Business et réseaux",
      "Optionnel : module click & collect"
    ],
    suggested: 'Click & collect'
  },
  {
    id: 'prestataires',
    icon: Briefcase,
    title: 'Prestataires',
    subtitle: 'Services aux particuliers et entreprises',
    pitch:
      "Un site structuré qui clarifie vos offres et génère des demandes de devis qualifiées.",
    benefits: [
      "Pages dédiées par offre",
      "Études de cas et références",
      "Formulaire de demande de devis",
      "Crédibilité visuelle premium"
    ],
    suggested: 'Site vitrine'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    subtitle: 'Marques, créateurs, vendeurs en ligne',
    pitch:
      "Une boutique professionnelle Shopify, prête à vendre dès le premier jour.",
    benefits: [
      "Création Shopify complète",
      "Pages produits soignées",
      "Parcours d'achat optimisé",
      "Mise en valeur de la marque"
    ],
    suggested: 'E-commerce Shopify'
  },
  {
    id: 'cc',
    icon: Package,
    title: 'Click & collect',
    subtitle: 'Commande en ligne, retrait sur place',
    pitch:
      "Une solution pratique pour fluidifier votre service et faire revenir vos clients.",
    benefits: [
      "Catalogue produits par catégorie",
      "Commande en ligne simple",
      "Notification email à chaque commande",
      "Expérience mobile fluide"
    ],
    suggested: 'Click & collect'
  },
  {
    id: 'pme',
    icon: Building2,
    title: 'PME locales',
    subtitle: 'Entreprises de proximité',
    pitch:
      "Renforcez votre crédibilité locale et ouvrez de nouveaux canaux d'acquisition.",
    benefits: [
      "Présentation de l'équipe et valeurs",
      "Pages services détaillées",
      "Section actualités ou réalisations",
      "SEO local pour être trouvé"
    ],
    suggested: 'Site vitrine'
  },
  {
    id: 'projets',
    icon: Lightbulb,
    title: 'Projets pro',
    subtitle: 'Lancement, refonte, nouvelle activité',
    pitch:
      "Un site fait pour démarrer fort, présenter une nouvelle marque ou moderniser un existant.",
    benefits: [
      "Identité visuelle cohérente",
      "Site évolutif selon votre croissance",
      "Mise en ligne rapide",
      "Accompagnement personnalisé"
    ],
    suggested: 'Site vitrine'
  }
];

export default function ForWho() {
  const [active, setActive] = useState('artisans');
  const current = personas.find(p => p.id === active);

  return (
    <section className="section section--soft" id="pour-qui">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="section__eyebrow">Pour qui ?</span>
            <h2>Des sites adaptés aux pros qui veulent être mieux présentés</h2>
            <p>
              Sélectionnez votre profil pour découvrir comment nous abordons votre
              type d'activité.
            </p>
          </div>
        </Reveal>

        <div className="persona-wrap">
          {/* Sélecteur gauche */}
          <Reveal>
            <div className="persona-list">
              {personas.map((p) => {
                const isActive = active === p.id;
                return (
                  <button
                    key={p.id}
                    className={`persona-item ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActive(p.id)}
                    data-cursor-hover
                  >
                    <span className="persona-item__icon">
                      <p.icon size={18} />
                    </span>
                    <span className="persona-item__main">
                      <span className="persona-item__title">{p.title}</span>
                      <span className="persona-item__sub">{p.subtitle}</span>
                    </span>
                    <span className="persona-item__arrow">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.1}>
            <div className="persona-detail">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="persona-detail__inner"
                >
                  <div className="persona-detail__deco" aria-hidden="true" />

                  <div className="persona-detail__head">
                    <div className="persona-detail__icon">
                      <current.icon size={26} />
                    </div>
                    <div>
                      <h3>{current.title}</h3>
                      <div className="persona-detail__sub">{current.subtitle}</div>
                    </div>
                  </div>

                  <p className="persona-detail__pitch">{current.pitch}</p>

                  <div className="persona-detail__benefits-title">
                    Ce qu'on met en place
                  </div>
                  <ul className="persona-detail__benefits">
                    {current.benefits.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span><Check size={13} /></span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="persona-detail__cta">
                    <div>
                      <div className="persona-detail__cta-label">Solution recommandée</div>
                      <div className="persona-detail__cta-value">{current.suggested}</div>
                    </div>
                    <Link href="/contact" className="btn btn--primary">
                      Démarrer mon projet <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
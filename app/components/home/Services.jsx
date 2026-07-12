'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, ShoppingBag, Package, Check, ArrowRight,
  Smartphone, Mail, Search, Sparkles
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import MagneticButton from '@/app/components/shared/MagneticButton';

const services = [
  {
    id: 'vitrine',
    icon: Globe,
    title: 'Site vitrine',
    detailHref: '/services/site-vitrine-bordeaux',
    detailLabel: 'Voir la page « Création site vitrine Bordeaux »',
    tagline: 'Votre activité présentée avec clarté',
    desc:
      "Un site clair, moderne et professionnel pour présenter votre entreprise, vos services et faciliter les demandes de contact. La référence pour les artisans, indépendants et commerces.",
    items: [
      "Présentation de l'entreprise",
      'Présentation des services',
      'Photos des prestations',
      "Zones d'intervention",
      'Formulaire de contact',
      'Site responsive'
    ],
    perks: [
      { icon: Smartphone, label: 'Mobile first' },
      { icon: Mail, label: 'Formulaire email' },
      { icon: Search, label: 'SEO optimisé' }
    ],
    forWho: 'Artisans, indépendants, commerces locaux'
  },
  {
    id: 'shopify',
    icon: ShoppingBag,
    title: 'E-commerce Shopify',
    detailHref: '/services/site-ecommerce-shopify-bordeaux',
    detailLabel: 'Voir la page « Création site Shopify Bordeaux »',
    tagline: 'Une boutique professionnelle, prête à vendre',
    desc:
      "Une boutique en ligne professionnelle pour vendre vos produits, structurer votre catalogue et offrir une expérience d'achat fluide. La plateforme la plus fiable du marché.",
    items: [
      'Création Shopify complète',
      'Pages produits détaillées',
      'Collections organisées',
      'Design responsive',
      "Parcours d'achat optimisé",
      'Mise en valeur de la marque'
    ],
    perks: [
      { icon: ShoppingBag, label: 'Paiements sécurisés' },
      { icon: Sparkles, label: 'Design premium' },
      { icon: Smartphone, label: 'Mobile first' }
    ],
    forWho: 'Marques, créateurs, vendeurs en ligne'
  },
  {
    id: 'cc',
    icon: Package,
    title: 'Click & collect',
    detailHref: '/services/click-and-collect-bordeaux',
    detailLabel: 'Voir la page « Click & collect Bordeaux »',
    tagline: 'Commande en ligne, retrait sur place',
    desc:
      "Une solution pratique pour permettre à vos clients de commander en ligne et récupérer sur place. Idéal pour les commerces de proximité qui veulent fluidifier leur service.",
    items: [
      'Catalogue produits structuré',
      'Commande en ligne fluide',
      'Organisation des catégories',
      'Expérience mobile soignée',
      'Formulaire ou tunnel adapté',
      'Mise en place selon le besoin'
    ],
    perks: [
      { icon: Package, label: 'Commandes simples' },
      { icon: Smartphone, label: 'Optimisé mobile' },
      { icon: Mail, label: 'Notifications email' }
    ],
    forWho: 'Boulangeries, primeurs, commerces de proximité'
  }
];

export default function Services() {
  const [active, setActive] = useState('vitrine');
  const current = services.find(s => s.id === active);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="section__eyebrow">Services</span>
            <h2>Création de sites web sur mesure</h2>
            <p>
              Trois solutions adaptées à votre activité. Pour tout savoir sur la{' '}
              <Link href="/creation-site-internet-bordeaux">création de site internet à Bordeaux</Link>,
              consultez la page dédiée — ou choisissez ci-dessous la solution qui vous
              correspond pour découvrir le détail.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal>
          <div className="services-tabs">
            {services.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  className={`services-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActive(s.id)}
                  data-cursor-hover
                >
                  <span className="services-tab__icon">
                    <s.icon size={18} />
                  </span>
                  <span className="services-tab__label">{s.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="services-tab-indicator"
                      className="services-tab__indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel détail */}
        <Reveal>
          <div className="services-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="services-panel__inner"
              >
                {/* Côté gauche : description */}
                <div className="services-panel__copy">
                  <div className="services-panel__icon">
                    <current.icon size={26} />
                  </div>
                  <div className="services-panel__tagline">{current.tagline}</div>
                  <h3>{current.title}</h3>
                  <p>{current.desc}</p>

                  <div className="services-perks">
                    {current.perks.map((p) => (
                      <div key={p.label} className="services-perk">
                        <p.icon size={14} />
                        {p.label}
                      </div>
                    ))}
                  </div>

                  <div className="services-panel__forwho">
                    <span>Pour qui</span>
                    <strong>{current.forWho}</strong>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                    <MagneticButton className="magnetic--primary" href="/contact">
                      Demander un devis <ArrowRight size={16} />
                    </MagneticButton>
                    {current.detailHref && (
                      <Link
                        href={current.detailHref}
                        style={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                          fontSize: '0.92rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        {current.detailLabel} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Côté droit : liste features avec checks */}
                <div className="services-panel__features">
                  <div className="services-panel__features-title">Inclus dans cette offre</div>
                  <ul>
                    {current.items.map((it, i) => (
                      <motion.li
                        key={it}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span className="services-panel__check">
                          <Check size={14} />
                        </span>
                        {it}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mini mockup décoratif */}
                  <div className="services-panel__deco" aria-hidden="true">
                    <div className="services-panel__deco-bar">
                      <span /><span /><span />
                    </div>
                    <div className="services-panel__deco-content" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
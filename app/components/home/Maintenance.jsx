'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2, Activity, Shield, Zap, ArrowRight,
  TrendingUp, Lock, Globe2
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import MagneticButton from '@/app/components/shared/MagneticButton';

const features = [
  { icon: Activity, text: 'Mises à jour techniques et suivi régulier' },
  { icon: Shield, text: 'Sécurisation continue de votre site' },
  { icon: Zap, text: "Modifications après livraison à la demande" },
  { icon: TrendingUp, text: "Évolutions selon la croissance de l'activité" }
];

export default function Maintenance() {
  return (
    <section className="section section--deep maintenance-section">
      <div className="container">
        <div className="maintenance-wrap">
          {/* Côté texte */}
          <Reveal>
            <div className="maintenance-copy">
              <span className="section__eyebrow">Après livraison</span>
              <h2>
                Votre site continue de <span className="text-gradient">vivre avec vous</span>
              </h2>
              <p>
                Après la livraison, il est possible de prévoir un accompagnement
                pour maintenir le site à jour, modifier certains contenus, ajouter
                de nouvelles pages ou faire évoluer votre présence en ligne.
              </p>

              <ul className="maintenance-list">
                {features.map((f) => (
                  <li key={f.text}>
                    <span className="maintenance-list__icon">
                      <f.icon size={18} />
                    </span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <div className="maintenance-cta">
                <MagneticButton className="magnetic--primary" href="#contact">
                  Demander un accompagnement <ArrowRight size={16} />
                </MagneticButton>
                <p className="maintenance-note">
                  Les offres de maintenance sont définies selon les besoins du projet.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Côté visuel — dashboard animé */}
          <Reveal delay={0.15}>
            <div className="maintenance-visual">
              <div className="maintenance-visual__glow" />

              {/* Carte principale : status */}
              <motion.div
                className="dash-card dash-card--main"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              >
                <div className="dash-card__head">
                  <div className="dash-status">
                    <span className="dash-status__dot" />
                    <span>Site en ligne</span>
                  </div>
                  <Globe2 size={16} className="dash-card__brand" />
                </div>
                <div className="dash-metric">
                  <div className="dash-metric__num">100%</div>
                  <div className="dash-metric__label">Disponibilité ce mois-ci</div>
                </div>
                <div className="dash-bars">
                  {[60, 85, 75, 95, 80, 100, 90].map((h, i) => (
                    <motion.span
                      key={i}
                      style={{ height: `${h}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.06 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Carte flottante : update */}
              <motion.div
                className="dash-card dash-card--update"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
              >
                <div className="dash-card__icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="dash-card__title">Mise à jour appliquée</div>
                  <div className="dash-card__sub">Sécurité et performances</div>
                </div>
              </motion.div>

              {/* Carte flottante : SSL */}
              <motion.div
                className="dash-card dash-card--ssl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, delay: 0.9 }}
              >
                <div className="dash-card__icon dash-card__icon--green">
                  <Lock size={18} />
                </div>
                <div>
                  <div className="dash-card__title">SSL actif</div>
                  <div className="dash-card__sub">Connexion sécurisée</div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
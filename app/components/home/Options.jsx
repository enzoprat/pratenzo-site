'use client';

import {
  Palette, FilePlus, MapPin, MessageSquare,
  Wrench, Server, Star, Image as ImageIcon,
  Languages, FileText, MailOpen, TrendingUp, Plus
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import MagneticButton from '@/app/components/shared/MagneticButton';

const options = [
  { icon: Palette, label: 'Logo simple' },
  { icon: FilePlus, label: 'Page supplémentaire' },
  { icon: MapPin, label: 'Référencement local' },
  { icon: MessageSquare, label: 'Fiche Google Business' },
  { icon: Wrench, label: 'Maintenance mensuelle' },
  { icon: Server, label: 'Hébergement et suivi' },
  { icon: Star, label: "Ajout d'avis clients" },
  { icon: ImageIcon, label: 'Galerie photos avancée' },
  { icon: Languages, label: 'Version anglaise' },
  { icon: FileText, label: 'Optimisation des textes' },
  { icon: MailOpen, label: 'Connexion formulaire / email' },
  { icon: TrendingUp, label: 'Amélioration continue' }
];

export default function Options() {
  return (
    <section className="section options-section">
      <div className="container">
        <div className="options-wrap">
          <Reveal>
            <div className="options-feature">
              <div className="options-feature__deco" />
              <span className="section__eyebrow">Options</span>
              <h2>Construisez le site qui vous ressemble</h2>
              <p>
                Chaque projet peut évoluer selon vos besoins : visibilité locale,
                contenu supplémentaire, maintenance, version multilingue ou
                accompagnement régulier.
              </p>
              <div className="options-feature__cta">
                <MagneticButton className="magnetic--primary" href="#contact">
                  Composer mon projet <Plus size={16} />
                </MagneticButton>
              </div>
              <div className="options-feature__note">
                Le tarif dépend du projet, du nombre de pages et des fonctionnalités
                souhaitées.
              </div>
            </div>
          </Reveal>

          <div className="options-cloud">
            {options.map((o, i) => (
              <Reveal key={o.label} delay={(i % 6) * 0.04}>
                <div
                  className="options-tag"
                  style={{ '--i': i }}
                  data-cursor-hover
                >
                  <span className="options-tag__icon">
                    <o.icon size={16} />
                  </span>
                  <span>{o.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
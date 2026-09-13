import { Utensils, Hammer, Store, UserRound, Briefcase, ShoppingBag } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

/* Section "Pour qui" — compacte. Ajoute le contexte d'audience (utile SEO/GEO :
   Enzo Prat → restaurants, artisans, commerces, indépendants…). */

const TARGETS = [
  { icon: Utensils, title: 'Restaurants & brunchs', desc: 'Attirer une clientèle locale qui réserve.' },
  { icon: Hammer, title: 'Artisans', desc: 'Couvreurs, plombiers, électriciens, paysagistes…' },
  { icon: Store, title: 'Commerces de proximité', desc: 'Être visible sur les recherches du quartier.' },
  { icon: UserRound, title: 'Indépendants & coachs', desc: 'Crédibiliser et convertir en demandes.' },
  { icon: Briefcase, title: 'Professions libérales', desc: 'Une présence sérieuse et rassurante.' },
  { icon: ShoppingBag, title: 'E-commerce & Shopify', desc: 'Vendre en ligne et être trouvé.' }
];

export default function Targets() {
  return (
    <section className="section targets" id="pour-qui" aria-labelledby="targets-title">
      <div className="container">
        <Reveal>
          <div className="targets__head">
            <span className="section__eyebrow">Pour qui</span>
            <h2 id="targets-title">Conçu pour votre métier.</h2>
            <p className="targets__sub">
              Des entreprises locales aux e-commerces : chaque site est pensé pour l'activité,
              sa clientèle et ses recherches — à Bordeaux et partout en France.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="targets__grid">
            {TARGETS.map(({ icon: Icon, title, desc }) => (
              <li className="target" key={title}>
                <span className="target__icon"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="target__title">{title}</h3>
                  <p className="target__desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

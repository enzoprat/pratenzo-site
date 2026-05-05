'use client';

import Reveal from '@/app/components/shared/Reveal';
import Counter from '@/app/components/shared/Counter';
import Marquee from '@/app/components/shared/Marquee';

export default function Stats() {
  return (
    <section className="section section--deep">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="section__eyebrow">L'agence en chiffres</span>
            <h2>Une approche qualitative, pas quantitative</h2>
            <p>
              Chaque projet est traité avec le même niveau de soin, de la première
              maquette à la mise en ligne.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="stats">
            <div className="stat">
              <span className="stat__num">
                <Counter to={7} suffix="+" />
              </span>
              <div className="stat__label">Sites professionnels en ligne</div>
            </div>
            <div className="stat">
              <span className="stat__num">
                <Counter to={100} suffix="%" />
              </span>
              <div className="stat__label">Sites responsive mobile</div>
            </div>
            <div className="stat">
              <span className="stat__num">
                <Counter to={48} suffix="h" />
              </span>
              <div className="stat__label">Délai moyen de réponse</div>
            </div>
            <div className="stat">
              <span className="stat__num">
                <Counter to={0} />
              </span>
              <div className="stat__label">Frais cachés</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div style={{ marginTop: 80 }}>
        <Marquee
          className="marquee--inverted"
          speed={45}
          items={[
            'Site vitrine',
            'E-commerce',
            'Click & collect',
            'Refonte de site',
            'Shopify',
            'SEO local',
            'Mobile first',
            'Design premium',
            'Responsive',
            'Web3Forms'
          ]}
        />
      </div>
    </section>
  );
}
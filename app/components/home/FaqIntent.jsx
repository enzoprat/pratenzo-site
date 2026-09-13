import { Plus } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import { faqIntent } from '@/app/lib/data/faq';

/* FAQ basée sur les vraies questions Google (People Also Ask).
   <details> natifs : accessibles, sans JS, contenu crawlable (SEO/GEO). */
export default function FaqIntent() {
  return (
    <section className="section faqx" id="faq" aria-labelledby="faqx-title">
      <div className="container">
        <Reveal>
          <div className="faqx__head">
            <span className="section__eyebrow">FAQ</span>
            <h2 id="faqx-title">Les questions que vous posez à Google.</h2>
            <p className="faqx__sub">
              Les réponses aux recherches les plus fréquentes autour de la création de site,
              du référencement (SEO) et de la visibilité sur les moteurs IA (GEO).
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="faqx__list">
            {faqIntent.map((item, i) => (
              <details className="faqx__item" key={i} name="faqx">
                <summary className="faqx__q">
                  <span>{item.q}</span>
                  <Plus size={18} className="faqx__icon" aria-hidden="true" />
                </summary>
                <div className="faqx__a"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

'use client';

import Reveal from '@/app/components/shared/Reveal';
import DotGrid from '@/app/components/shared/DotGrid';

const items = [
  'Être crédible dès le premier contact',
  'Présenter ses services clairement',
  'Recevoir des demandes de devis',
  'Générer des appels',
  'Rassurer avec des photos de réalisations',
  'Avoir un lien à partager partout',
  'Être visible depuis Google et les réseaux sociaux',
  'Renforcer votre fiche Google Business ou vos publicités'
];

export default function WhyWebsite() {
  return (
    <section className="section section--deep why-section">
      <DotGrid />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <div className="section__head">
            <span className="section__eyebrow">Pourquoi un site ?</span>
            <h2>Votre site devient votre meilleure carte de visite</h2>
            <p>
              Aujourd'hui, un client se renseigne en ligne avant même de vous appeler.
              Sans site clair et professionnel, vous laissez de la place à vos concurrents.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="why-list">
            {items.map(i => <li key={i}>{i}</li>)}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="why-quote">
            « Un client qui ne trouve pas d'informations claires sur vous peut
            rapidement choisir un concurrent. »
          </div>
        </Reveal>
      </div>
    </section>
  );
}
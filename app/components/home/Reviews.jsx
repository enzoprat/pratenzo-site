import { Star, ExternalLink } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

/* Section Avis — vrais avis Google (fiche Prat Enzo, 5,0/5 · 8 avis).
   Textes verbatim relevés sur la fiche Google Business Profile.
   Pas de schema aggregateRating (avis auto-attribués = hors consignes Google) :
   preuve sociale reliée à la vraie fiche. */

const GBP_URL = 'https://share.google/GCTU7bzNwM4n10WkE';

const REVIEWS = [
  {
    name: 'Kylane', date: 'il y a 1 mois',
    text: "Nous avons confié la création de notre site internet à Enzo Prat pour présenter notre entreprise artisanale à Cestas. Il a parfaitement compris notre activité, nos prestations et les attentes de nos clients. Le site est moderne, rapide et très facile à utiliser sur téléphone. Nous recommandons Enzo pour la création d'un site vitrine professionnel."
  },
  {
    name: 'titou pompilio', date: 'il y a 1 mois',
    text: "Enzo nous a accompagnés sur la création du site, le référencement local et l'optimisation de notre présence sur Google à Léognan. Le fait d'avoir un seul interlocuteur pour l'ensemble du projet a vraiment simplifié les échanges. Le résultat est cohérent, professionnel et adapté à notre clientèle."
  },
  {
    name: 'Louann Menges', date: 'il y a 1 mois',
    text: "Refonte complète de notre site internet qui datait de 2015 et ne ramenait plus personne. Enzo a modernisé le design et bossé le référencement local sur Artigues. Deux mois après on reçoit des demandes de devis via le site, ce qui n'arrivait jamais avant. Sérieux et pro."
  },
  {
    name: 'ethan choukroun', date: 'il y a 1 mois',
    text: "Enzo a créé le site internet de notre entreprise de couverture à Bordeaux. Il a organisé nos services, nos réalisations et nos zones d'intervention de manière très claire. Le résultat donne une image beaucoup plus professionnelle à notre société et facilite les demandes de devis. Très satisfait de son accompagnement."
  },
  {
    name: 'Beja Halidi', date: 'il y a 3 semaines',
    text: "Nous avons sollicité Enzo pour améliorer le référencement naturel de notre site à Floirac. Il a réalisé un audit complet puis optimisé les textes, les balises, la structure des pages et les performances techniques. Nous avons particulièrement apprécié ses explications simples et son plan d'action précis."
  },
  {
    name: 'Nils Bouchilloux', date: 'il y a 1 an',
    text: "Bon conseiller très moderne dans sa manière de faire avec beaucoup d'écoute."
  }
];

function GoogleG({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="section reviews" id="avis" aria-labelledby="reviews-title">
      <div className="container">
        <Reveal>
          <div className="reviews__head">
            <span className="section__eyebrow">Avis clients</span>
            <h2 id="reviews-title">Ce que disent mes clients.</h2>
            <a className="reviews__rating" href={GBP_URL} target="_blank" rel="noopener noreferrer">
              <GoogleG size={20} />
              <span className="reviews__stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map(i => <Star key={i} size={16} fill="#F5A623" stroke="none" />)}
              </span>
              <strong>5,0</strong>
              <span className="reviews__count">· 8 avis Google</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="reviews__grid">
            {REVIEWS.map((r) => (
              <li className="review" key={r.name}>
                <div className="review__head">
                  <span className="review__avatar">{r.name.charAt(0).toUpperCase()}</span>
                  <div className="review__id">
                    <span className="review__name">{r.name}</span>
                    <span className="review__date">{r.date}</span>
                  </div>
                  <span className="review__g" title="Avis Google"><GoogleG size={16} /></span>
                </div>
                <div className="review__stars" aria-label="Note : 5 sur 5">
                  {[0, 1, 2, 3, 4].map(i => <Star key={i} size={14} fill="#F5A623" stroke="none" />)}
                </div>
                <p className="review__text">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="reviews__cta">
            <a className="btn btn--ghost" href={GBP_URL} target="_blank" rel="noopener noreferrer">
              Voir tous les avis sur Google <ExternalLink size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

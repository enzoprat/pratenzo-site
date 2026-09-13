import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Ship, Bot, Wrench, Check } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

/* ============================================================
   MODE RÉSULTATS — 4 études de cas (SEO + GEO)
   Données 100% réelles (captures GSC / ChatGPT). Aucune invention.
   Chaque projet porte l'accent couleur récupéré sur son propre site.
   ============================================================ */

const BRUNCH_QUERIES = [
  ['brunch autour de bordeaux', '1,0'],
  ['brunch talence', '1,0'],
  ['restaurant ouvert le dimanche pessac', '1,0'],
  ["brunch villenave-d'ornon", '1,1'],
  ['brunch mérignac', '1,2'],
  ['brunch pessac', '1,3'],
  ['meilleur brunch mérignac', '1,7'],
  ['restaurants pessac centre', '1,8']
];

const NILS_CHAIN = [
  'Nils Bouchilloux', 'Professeur de golf', 'Bordeaux',
  'Cours de golf', 'Expertise (BPJEPS)', 'ChatGPT'
];

export default function CaseStudies() {
  return (
    <section className="results" id="mode-resultats" aria-labelledby="results-title">
      <div className="container">
        <Reveal>
          <header className="results__head">
            <span className="section__eyebrow">Études de cas</span>
            <h2 id="results-title" className="results__title">Mode Résultats.</h2>
            <p className="results__sub">
              Quatre projets. Quatre preuves que le travail ne s'arrête pas à la mise en ligne.
            </p>
          </header>
        </Reveal>

        {/* ============ 01 · BRUNCH AREA ============ */}
        <Reveal>
          <article
            className="case"
            style={{ '--case': '#6E5BA8', '--case-2': '#B7A6E8', '--case-ink': '#2A2440' }}
          >
            <div className="case__ghost" aria-hidden="true">2,8</div>
            <div className="case__grid">
              <div className="case__info">
                <div className="case__meta">
                  <span className="case__num">01</span>
                  <span className="case__tag"><Zap size={13} /> SEO local · indexation rapide</span>
                </div>
                <h3 className="case__brand">Brunch Area</h3>
                <p className="case__sector">Restaurant &amp; brunch — Pessac, autour de Bordeaux</p>

                <p className="case__headline">48 heures pour atteindre les premières positions.</p>
                <p className="case__desc">
                  Enzo Prat a travaillé l'architecture SEO locale de Brunch Area pour le positionner sur les
                  recherches liées au brunch et à la restauration autour de Pessac, Mérignac, Talence,
                  Villenave-d'Ornon et Bordeaux. Plusieurs requêtes ont atteint les positions 1 à 2 dans les
                  48 heures suivant leur indexation, pour une <strong>position moyenne de 2,8</strong> sur les
                  recherches suivies.
                </p>

                <div className="case__metrics">
                  <div className="case__metric"><strong>2,8</strong><span>position moyenne</span></div>
                  <div className="case__metric"><strong>48 h</strong><span>après indexation</span></div>
                  <div className="case__metric"><strong>24 · 792</strong><span>clics · impressions</span></div>
                </div>

                <ol className="case__queries" aria-label="Requêtes et positions Google — Brunch Area">
                  {BRUNCH_QUERIES.map(([q, p], i) => (
                    <li key={q} style={{ '--i': i }}>
                      <span className="case__q-rank">{String(i + 1).padStart(2, '0')}</span>
                      <span className="case__q-text">{q}</span>
                      <span className="case__q-dots" aria-hidden="true" />
                      <span className="case__q-pos">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="case__proof">
                <figure className="proofwin">
                  <div className="proofwin__bar">
                    <span /><span /><span />
                    <div className="proofwin__title">Google Search Console — Brunch Area</div>
                  </div>
                  <Image
                    src="/results/gsc-bruncharea.webp" alt="Google Search Console de Brunch Area : position moyenne 2,8, 24 clics, 792 impressions"
                    width={1500} height={544} sizes="(max-width: 900px) 100vw, 640px" loading="lazy"
                    className="proofwin__img"
                  />
                </figure>
                <p className="proofwin__cap">Preuve : Google Search Console — position moyenne 2,8 sur la période.</p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ============ 02 · MASTER BOAT CHARTER ============ */}
        <Reveal>
          <article
            className="case case--rev"
            style={{ '--case': '#0E7A90', '--case-2': '#3ABEDB', '--case-ink': '#0A2A33' }}
          >
            <div className="case__ghost" aria-hidden="true">6,8<i>%</i></div>
            <div className="case__grid">
              <div className="case__info">
                <div className="case__meta">
                  <span className="case__num">02</span>
                  <span className="case__tag"><Ship size={13} /> Domaine neuf · trafic · leads</span>
                </div>
                <h3 className="case__brand">Master Boat Charter</h3>
                <p className="case__sector">Charter privé aux Seychelles</p>

                <p className="case__headline">1 mois en ligne. Déjà 5 leads convertis.</p>
                <p className="case__desc">
                  Enzo Prat a conçu et optimisé le site de Master Boat Charter, entreprise de charter privé
                  aux Seychelles. Un mois après son lancement, le nouveau domaine affiche un
                  <strong> CTR organique de 6,8 %</strong> et a déjà permis de convertir 5 leads — un signal
                  fort pour un nom de domaine sans historique.
                </p>

                <div className="case__metrics">
                  <div className="case__metric"><strong>1 mois</strong><span>depuis le lancement</span></div>
                  <div className="case__metric"><strong>6,8 %</strong><span>CTR organique</span></div>
                  <div className="case__metric"><strong>5</strong><span>leads convertis</span></div>
                </div>
              </div>

              <div className="case__proof">
                <figure className="proofwin">
                  <div className="proofwin__bar">
                    <span /><span /><span />
                    <div className="proofwin__title">Google Search Console — Master Boat Charter</div>
                  </div>
                  <Image
                    src="/results/gsc-masterboat.webp" alt="Google Search Console de Master Boat Charter : CTR organique 6,8 %, 49 clics, 720 impressions sur un mois"
                    width={1500} height={600} sizes="(max-width: 900px) 100vw, 640px" loading="lazy"
                    className="proofwin__img"
                  />
                </figure>
                <p className="proofwin__cap">Preuve : Google Search Console — CTR organique 6,8 % sur le 1er mois.</p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ============ 03 · NILS BOUCHILLOUX (GEO) ============ */}
        <Reveal>
          <article
            className="case"
            style={{ '--case': '#17643F', '--case-2': '#C43D28', '--case-ink': '#12362A' }}
          >
            <div className="case__ghost case__ghost--geo" aria-hidden="true">#1</div>
            <div className="case__grid">
              <div className="case__info">
                <div className="case__meta">
                  <span className="case__num">03</span>
                  <span className="case__tag"><Bot size={13} /> GEO · moteurs de réponse IA</span>
                </div>
                <h3 className="case__brand">Nils Bouchilloux</h3>
                <p className="case__sector">Professeur de golf à Bordeaux</p>

                <p className="case__headline">Cité en premier par ChatGPT.</p>
                <p className="case__desc">
                  Le travail réalisé autour du site, des contenus et de l'entité Nils Bouchilloux permet aux
                  moteurs génératifs de mieux comprendre son activité, sa localisation et son expertise dans
                  l'enseignement du golf à Bordeaux. Résultat observé : pour la recherche
                  «&nbsp;meilleur prof de golf Bordeaux&nbsp;», <strong>Nils Bouchilloux apparaît en première
                  position dans une réponse ChatGPT</strong>.
                </p>

                <div className="case__chain" aria-label="Chaîne d'entités comprise par les moteurs IA">
                  {NILS_CHAIN.map((n, i) => (
                    <span className="case__chain-node" key={n} style={{ '--i': i }}>
                      {i === NILS_CHAIN.length - 1 ? <Bot size={14} /> : null}{n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="case__proof">
                <figure className="proofwin proofwin--chat">
                  <div className="proofwin__bar proofwin__bar--chat">
                    <span className="proofwin__chatdot"><Bot size={13} /></span>
                    <div className="proofwin__title">ChatGPT — réponse réelle observée</div>
                  </div>
                  <Image
                    src="/results/nils-chatgpt.webp" alt="Réponse ChatGPT à « meilleur prof de golf bordeaux » citant en premier Cours de Golf Bordeaux Nils Bouchilloux"
                    width={1300} height={460} sizes="(max-width: 900px) 100vw, 640px" loading="lazy"
                    className="proofwin__img"
                  />
                </figure>
                <p className="proofwin__cap">
                  Preuve : réponse ChatGPT observée pour «&nbsp;meilleur prof de golf Bordeaux&nbsp;».
                  Formulation contextualisée — il ne s'agit pas d'un classement officiel.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ============ 04 · ADU PIÈCES AUTO ============ */}
        <Reveal>
          <article
            className="case case--rev"
            style={{ '--case': '#E10600', '--case-2': '#FF4D33', '--case-ink': '#0D0F12' }}
          >
            <div className="case__ghost" aria-hidden="true">3,9</div>
            <div className="case__grid">
              <div className="case__info">
                <div className="case__meta">
                  <span className="case__num">04</span>
                  <span className="case__tag"><Wrench size={13} /> SEO transactionnel · local</span>
                </div>
                <h3 className="case__brand">ADU Pièces Auto</h3>
                <p className="case__sector">Vente de pièces automobiles — Tarn-et-Garonne</p>

                <p className="case__headline">Position moyenne 3,9 en deux mois, sur une recherche commerciale.</p>
                <p className="case__desc">
                  ADU Pièces Auto s'est hissé à une <strong>position moyenne de 3,9 sur Google en deux mois</strong>,
                  sur des recherches directement commerciales liées à la vente de pièces automobiles dans sa région.
                  Il ne s'agit pas d'une requête informationnelle : c'est une intention d'achat — recherche de pièces,
                  entreprise locale, site, Google.
                </p>

                <div className="case__metrics">
                  <div className="case__metric"><strong>3,9</strong><span>position moyenne</span></div>
                  <div className="case__metric"><strong>2 mois</strong><span>de travail SEO</span></div>
                  <div className="case__metric"><strong>89 · 2,98 k</strong><span>clics · impressions</span></div>
                </div>
              </div>

              <div className="case__proof">
                <figure className="proofwin">
                  <div className="proofwin__bar">
                    <span /><span /><span />
                    <div className="proofwin__title">Google Search Console — ADU Pièces Auto</div>
                  </div>
                  <Image
                    src="/results/gsc-adu.webp" alt="Google Search Console d'ADU Pièces Auto : position moyenne 3,9, 89 clics, 2,98 k impressions sur deux mois"
                    width={1500} height={736} sizes="(max-width: 900px) 100vw, 640px" loading="lazy"
                    className="proofwin__img"
                  />
                </figure>
                <p className="proofwin__cap">Preuve : Google Search Console — position moyenne 3,9 sur environ deux mois.</p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ============ CTA ============ */}
        <Reveal>
          <div className="results__cta">
            <h3>Et votre site&nbsp;?</h3>
            <p>Savez-vous réellement ce qu'il produit aujourd'hui&nbsp;?</p>
            <Link href="/#simulateur" className="btn btn--primary">
              Analyser mon site <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

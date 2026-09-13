'use client';

import { useState } from 'react';
import { Search, Bot, MapPin, Globe, Check, Star } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';

/* ============================================================
   SECTION GOOGLE INTERACTIVE
   Le visiteur tape une recherche → SERP simulée (illustrative) →
   on montre les 4 surfaces où Enzo intervient : GEO, SEO local,
   SEO organique, Site web. Aucune position réelle affirmée.
   ============================================================ */

const SUGGESTIONS = ['couvreur Bordeaux', 'prof de golf Bordeaux', 'restaurant Pessac', 'plombier Mérignac'];

export default function GoogleSearch() {
  const [q, setQ] = useState('couvreur Bordeaux');
  const query = q.trim() || 'couvreur Bordeaux';

  return (
    <section className="section gsearch" id="recherche" aria-labelledby="gsearch-title">
      <div className="container">
        <Reveal>
          <header className="gsearch__head">
            <span className="section__eyebrow">La recherche aujourd'hui</span>
            <h2 id="gsearch-title">Là où vos clients vous cherchent — et là où j'interviens.</h2>
            <p className="gsearch__sub">
              Tapez une recherche. Une page de résultats ne se limite plus à dix liens bleus :
              elle mêle réponses IA, fiche Google et résultats naturels. J'interviens sur chacune de
              ces surfaces pour rendre une entreprise <strong>trouvée, comprise et choisie</strong>.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="gsim">
            {/* Barre de recherche */}
            <div className="gsim__bar">
              <Search size={20} aria-hidden="true" />
              <input
                type="text"
                className="gsim__input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Tapez une recherche"
                placeholder="Tapez une recherche…"
                spellCheck="false"
              />
              <span className="gsim__demo">démo</span>
            </div>
            <div className="gsim__chips">
              <span className="gsim__chips-label">Essayez :</span>
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  type="button"
                  className={`gsim__chip ${query.toLowerCase() === s.toLowerCase() ? 'is-on' : ''}`}
                  onClick={() => setQ(s)}
                >{s}</button>
              ))}
            </div>

            {/* SERP simulée */}
            <div className="gsim__serp">
              {/* GEO — réponse IA */}
              <div className="gsim__zone gsim__zone--geo">
                <div className="gsim__tab"><Bot size={14} /> GEO · Réponse IA</div>
                <div className="gsim__body">
                  <div className="gsim__card gsim__ai">
                    <div className="gsim__ai-q">« Quel {query} choisir ? »</div>
                    <p className="gsim__ai-a">
                      Plusieurs professionnels ressortent pour <strong>{query}</strong>. Les entreprises
                      dont le site est clair, structuré et bien référencé sont les plus faciles à comprendre
                      et à recommander.
                    </p>
                    <div className="gsim__sources"><span>Site</span><span>Fiche Google</span><span>Avis</span></div>
                  </div>
                  <p className="gsim__note">Être compris et cité par les moteurs de réponse IA (ChatGPT, Gemini, Perplexity, AI Overviews).</p>
                </div>
              </div>

              {/* SEO local — pack local / fiche Google */}
              <div className="gsim__zone gsim__zone--local">
                <div className="gsim__tab"><MapPin size={14} /> SEO local · Fiche Google</div>
                <div className="gsim__body">
                  <div className="gsim__card gsim__pack">
                    <div className="gsim__map" aria-hidden="true"><MapPin size={22} /></div>
                    <ul className="gsim__pack-list">
                      <li className="is-you">
                        <span className="gsim__pin">1</span>
                        <span className="gsim__pack-name">Votre entreprise <span className="gsim__badge"><Check size={11} /> optimisée</span></span>
                        <span className="gsim__stars"><Star size={11} /><Star size={11} /><Star size={11} /><Star size={11} /><Star size={11} /></span>
                      </li>
                      <li><span className="gsim__pin">2</span><span className="gsim__ghost-line" /></li>
                      <li><span className="gsim__pin">3</span><span className="gsim__ghost-line" /></li>
                    </ul>
                  </div>
                  <p className="gsim__note">Apparaître dans le pack local et soigner la fiche Google (Business Profile) — le réflexe n°1 en recherche locale.</p>
                </div>
              </div>

              {/* SEO organique */}
              <div className="gsim__zone gsim__zone--seo">
                <div className="gsim__tab"><Search size={14} /> SEO · Résultats naturels</div>
                <div className="gsim__body">
                  <div className="gsim__card gsim__organic">
                    <div className="gsim__result is-you">
                      <div className="gsim__result-url">votre-entreprise.fr</div>
                      <div className="gsim__result-title">{query.charAt(0).toUpperCase() + query.slice(1)} — votre entreprise</div>
                      <div className="gsim__result-desc">Site conçu pour répondre exactement à cette recherche.</div>
                    </div>
                    <div className="gsim__result gsim__result--ghost"><span /><span /><span /></div>
                  </div>
                  <p className="gsim__note">Se positionner sur les requêtes à intention commerciale, avec une architecture et des contenus pensés pour ça.</p>
                </div>
              </div>

              {/* SITE WEB */}
              <div className="gsim__zone gsim__zone--site">
                <div className="gsim__tab"><Globe size={14} /> Site web · Conversion</div>
                <div className="gsim__body">
                  <div className="gsim__card gsim__site">
                    <div className="gsim__site-mock" aria-hidden="true">
                      <span className="gsim__site-bar" />
                      <span className="gsim__site-hero" />
                      <span className="gsim__site-row" />
                      <span className="gsim__site-row short" />
                      <span className="gsim__site-cta" />
                    </div>
                    <div className="gsim__site-txt">
                      <strong>Le clic ne suffit pas.</strong>
                      <span>Un site clair, rapide et rassurant transforme la visite en demande de devis.</span>
                    </div>
                  </div>
                  <p className="gsim__note">Être convaincant : UX, vitesse, mobile, preuves et conversion.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

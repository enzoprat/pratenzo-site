'use client';

import { useState } from 'react';
import {
  ArrowRight, ArrowLeft, Sparkles, Check, Globe, Search,
  Bot, Send, CheckCircle, Link2, User
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import { config } from '@/app/lib/config';

const METIERS = [
  'Couvreur', 'Restaurant', 'Garage automobile', 'Artisan',
  'Commerce', 'Consultant', 'Profession libérale', 'Autre'
];

const STEPS = [
  { id: 1, label: 'Activité' },
  { id: 2, label: 'Demandes' },
  { id: 3, label: 'Valeur' },
  { id: 4, label: 'Conversion' }
];

const eur = (n) => Math.round(n).toLocaleString('fr-FR') + ' €';

export default function Simulator() {
  const [step, setStep] = useState(1);
  const [metier, setMetier] = useState('');
  const [demandes, setDemandes] = useState(12);
  const [panier, setPanier] = useState(1500);
  const [conversion, setConversion] = useState(30);
  const [extra, setExtra] = useState(5);

  // Lead
  const [lead, setLead] = useState({ url: '', name: '', contact: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  // Calcul 100 % local, transparent
  const taux = conversion / 100;
  const caActuel = demandes * taux * panier;
  const potentiel = extra * taux * panier;
  const potentielAn = potentiel * 12;

  const isResult = step === 'result';
  const canNext = step === 1 ? metier.trim().length > 0 : true;

  const go = (s) => setStep(s);
  const next = () => { if (canNext) setStep(s => (s < 4 ? s + 1 : 'result')); };
  const prev = () => setStep(s => (s === 'result' ? 4 : Math.max(1, s - 1)));

  const setLeadField = (f) => (e) => setLead({ ...lead, [f]: e.target.value });

  async function submitLead(e) {
    e.preventDefault();
    if (!lead.url.trim() || !lead.name.trim() || !lead.contact.trim()) return;
    setStatus('sending'); setError('');
    try {
      const payload = {
        access_key: config.web3formsKey,
        subject: 'Nouveau lead — Simulateur ROI (analyse de site)',
        from_name: 'Prat Enzo',
        replyto: lead.contact.includes('@') ? lead.contact : undefined,
        Prenom: lead.name,
        Contact: lead.contact,
        SiteAAnalyser: lead.url,
        Metier: metier || 'Non précisé',
        DemandesParMois: demandes,
        TauxConversion: conversion + ' %',
        PanierMoyen: eur(panier),
        CA_mensuel_estime: eur(caActuel),
        Hypothese_demandes_sup: extra,
        Potentiel_mensuel_estime: eur(potentiel),
        Potentiel_annuel_estime: eur(potentielAn)
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) setStatus('ok');
      else { setStatus('err'); setError(data.message || 'Une erreur est survenue.'); }
    } catch {
      setStatus('err'); setError('Connexion impossible. Réessayez.');
    }
  }

  return (
    <section className="section sim" id="simulateur" aria-labelledby="sim-title">
      <div className="container">
        <Reveal>
          <div className="sim__head">
            <span className="section__eyebrow">Simulateur</span>
            <h2 id="sim-title">Combien votre site internet pourrait-il réellement générer ?</h2>
            <p className="sim__lead">
              Estimez en quelques secondes le chiffre d'affaires que votre site actuel pourrait
              laisser inexploité, faute de visibilité ou de conversion. Une simulation transparente,
              basée uniquement sur vos hypothèses.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="sim__tool">
            {/* ---------- Panneau interactif ---------- */}
            <div className="sim__panel">
              <div className="sim__rail" role="list">
                {STEPS.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    role="listitem"
                    className={`sim__rail-step ${step === s.id ? 'is-active' : ''} ${(step === 'result' || step > s.id) ? 'is-done' : ''}`}
                    onClick={() => { if (step === 'result' || s.id < step) go(s.id); }}
                  >
                    <span className="sim__rail-num">
                      {(step === 'result' || step > s.id) ? <Check size={13} /> : String(s.id).padStart(2, '0')}
                    </span>
                    <span className="sim__rail-label">{s.label}</span>
                  </button>
                ))}
                <span className={`sim__rail-step sim__rail-step--end ${isResult ? 'is-active' : ''}`}>
                  <span className="sim__rail-num"><Sparkles size={13} /></span>
                  <span className="sim__rail-label">Résultat</span>
                </span>
              </div>

              <div className="sim__stage" key={String(step)}>
                {step === 1 && (
                  <div className="sim__q">
                    <div className="sim__q-eyebrow">Étape 01</div>
                    <h3 className="sim__q-title">Quel est votre métier ?</h3>
                    <p className="sim__q-help">Choisissez ou saisissez votre activité.</p>
                    <div className="sim__chips">
                      {METIERS.map(m => (
                        <button
                          key={m}
                          type="button"
                          className={`sim__chip ${metier === m ? 'is-on' : ''}`}
                          onClick={() => setMetier(m)}
                        >{m}</button>
                      ))}
                    </div>
                    <input
                      className="sim__free"
                      type="text"
                      value={metier}
                      onChange={(e) => setMetier(e.target.value)}
                      placeholder="Ou saisissez votre métier…"
                      aria-label="Votre métier"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="sim__q">
                    <div className="sim__q-eyebrow">Étape 02</div>
                    <h3 className="sim__q-title">Combien de demandes votre site vous apporte-t-il chaque mois ?</h3>
                    <div className="sim__value">{demandes >= 50 ? '50+' : demandes} <span>demandes / mois</span></div>
                    <input className="sim__slider" type="range" min="0" max="50" step="1"
                      style={{ '--fill': `${(demandes / 50) * 100}%` }}
                      value={demandes} onChange={(e) => setDemandes(+e.target.value)}
                      aria-label="Demandes par mois" />
                    <div className="sim__scale"><span>0</span><span>50+</span></div>
                  </div>
                )}

                {step === 3 && (
                  <div className="sim__q">
                    <div className="sim__q-eyebrow">Étape 03</div>
                    <h3 className="sim__q-title">Quelle est la valeur moyenne d'un nouveau client ?</h3>
                    <div className="sim__value">{panier.toLocaleString('fr-FR')} <span>€ en moyenne</span></div>
                    <input className="sim__slider" type="range" min="100" max="10000" step="50"
                      style={{ '--fill': `${((panier - 100) / 9900) * 100}%` }}
                      value={panier} onChange={(e) => setPanier(+e.target.value)}
                      aria-label="Panier moyen" />
                    <div className="sim__scale"><span>100 €</span><span>10 000 €+</span></div>
                    <input
                      className="sim__free sim__free--num"
                      type="number" min="0" step="50" value={panier}
                      onChange={(e) => setPanier(Math.max(0, +e.target.value || 0))}
                      aria-label="Valeur d'un client en euros"
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="sim__q">
                    <div className="sim__q-eyebrow">Étape 04</div>
                    <h3 className="sim__q-title">Combien de vos demandes deviennent réellement clientes ?</h3>
                    <div className="sim__value">{conversion} <span>%</span></div>
                    <input className="sim__slider" type="range" min="0" max="100" step="1"
                      style={{ '--fill': `${conversion}%` }}
                      value={conversion} onChange={(e) => setConversion(+e.target.value)}
                      aria-label="Taux de conversion" />
                    <div className="sim__scale"><span>0 %</span><span>100 %</span></div>
                    <p className="sim__q-help">Exemple : sur 10 demandes, 3 deviennent clientes = 30 %.</p>
                  </div>
                )}

                {isResult && (
                  <div className="sim__q sim__q--result">
                    <div className="sim__q-eyebrow"><Sparkles size={13} /> Résultat de la simulation</div>
                    <h3 className="sim__q-title">
                      Votre site pourrait générer plusieurs milliers d'euros d'opportunités supplémentaires chaque année.
                    </h3>

                    <div className="sim__scenario">
                      Et si votre site générait
                      <label className="sim__extra">
                        <input type="number" min="1" max="50" value={extra}
                          onChange={(e) => setExtra(Math.max(1, Math.min(50, +e.target.value || 1)))} />
                      </label>
                      demandes qualifiées supplémentaires par mois ?
                    </div>

                    <div className="sim__big">
                      ≈ {eur(potentiel)} <span>/ mois de potentiel supplémentaire*</span>
                    </div>
                    <div className="sim__big-sub">soit ≈ <strong>{eur(potentielAn)} / an</strong>, à panier et taux de conversion constants.</div>

                    <p className="sim__disclaimer">
                      *Simulation indicative basée uniquement sur les informations que vous avez renseignées.
                      Elle ne constitue pas une garantie de résultat.
                    </p>

                    {status !== 'ok' ? (
                      <form className="sim__lead" onSubmit={submitLead}>
                        <div className="sim__lead-head">Vous voulez savoir ce qui bloque réellement votre site ?</div>
                        <div className="sim__lead-field">
                          <Link2 size={15} />
                          <input type="url" required placeholder="URL de votre site" value={lead.url} onChange={setLeadField('url')} aria-label="URL de votre site" />
                        </div>
                        <div className="sim__lead-row">
                          <div className="sim__lead-field">
                            <User size={15} />
                            <input type="text" required placeholder="Prénom" value={lead.name} onChange={setLeadField('name')} aria-label="Prénom" />
                          </div>
                          <div className="sim__lead-field">
                            <Send size={15} />
                            <input type="text" required placeholder="Email ou téléphone" value={lead.contact} onChange={setLeadField('contact')} aria-label="Email ou téléphone" />
                          </div>
                        </div>
                        <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
                        <button type="submit" className="btn btn--primary sim__cta" disabled={status === 'sending'}>
                          {status === 'sending' ? 'Envoi…' : <>Analyser mon site <ArrowRight size={16} /></>}
                        </button>
                        {status === 'err' && <div className="form__msg form__msg--err">{error}</div>}
                        <p className="sim__lead-note">Vos réponses au simulateur sont jointes automatiquement : pas besoin de tout ressaisir.</p>
                      </form>
                    ) : (
                      <div className="sim__ok">
                        <CheckCircle size={20} />
                        <div>
                          <strong>C'est envoyé, {lead.name || 'merci'} !</strong>
                          <span>J'analyse votre site et je reviens vers vous avec les points concrets à améliorer.</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="sim__nav">
                <button type="button" className="btn btn--ghost" onClick={prev}
                  style={{ visibility: step === 1 ? 'hidden' : 'visible' }}>
                  <ArrowLeft size={16} /> Précédent
                </button>
                {!isResult && (
                  <button type="button" className="btn btn--primary" onClick={next} disabled={!canNext}>
                    {step === 4 ? <>Voir le résultat <Sparkles size={16} /></> : <>Suivant <ArrowRight size={16} /></>}
                  </button>
                )}
              </div>
            </div>

          </div>
        </Reveal>

        {/* ---------- Les 3 niveaux : SITE WEB → SEO → GEO ---------- */}
        <Reveal delay={0.15}>
          <div className="sim__levels">
            <p className="sim__levels-intro">
              Générer davantage de business ne se résume pas à « refaire le design ». Le potentiel se joue
              sur trois niveaux complémentaires :
            </p>
            <div className="sim__levels-grid">
              <div className="sim__level">
                <span className="sim__level-icon"><Globe size={20} /></span>
                <div className="sim__level-tag">Site web</div>
                <h3>Être convaincant</h3>
                <p>UX, vitesse, mobile, contenu, crédibilité et conversion : transformer un visiteur en demande.</p>
              </div>
              <div className="sim__level-arrow" aria-hidden="true">→</div>
              <div className="sim__level">
                <span className="sim__level-icon"><Search size={20} /></span>
                <div className="sim__level-tag">SEO</div>
                <h3>Être trouvé</h3>
                <p>Positionnement Google, architecture, pages services, contenu, SEO local et technique.</p>
              </div>
              <div className="sim__level-arrow" aria-hidden="true">→</div>
              <div className="sim__level">
                <span className="sim__level-icon"><Bot size={20} /></span>
                <div className="sim__level-tag">GEO</div>
                <h3>Être compris et recommandé</h3>
                <p>Structuration de l'information, autorité, entités et contenus citables par les moteurs de réponse IA.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------- Bloc éditorial SEO/GEO (vrai HTML, indépendant du simulateur) ---------- */}
        <Reveal delay={0.1}>
          <div className="sim__edito">
            <h3>Pourquoi un site internet peut-il générer peu de demandes ?</h3>
            <p>
              Un site peut être techniquement fonctionnel et pourtant rapporter peu. Dans la plupart des cas,
              ce n'est pas une question de « joli design » mais de <strong>rentabilité réelle</strong> : le site
              attire peu de visiteurs qualifiés, se positionne mal sur les intentions commerciales, ou ne
              convertit pas les visiteurs en demandes de devis. Les causes les plus fréquentes :
            </p>
            <ul>
              <li>peu visible dans les résultats de recherche (référencement naturel insuffisant) ;</li>
              <li>mal positionné sur les requêtes qui ont une vraie intention commerciale ;</li>
              <li>insuffisamment rassurant : preuves, avis, réalisations, clarté de l'offre ;</li>
              <li>difficile à utiliser sur mobile, ou trop lent (performance du site) ;</li>
              <li>mal structuré, pauvre en informations permettant aux moteurs de comprendre précisément l'entreprise.</li>
            </ul>
            <p>
              Améliorer le chiffre d'affaires généré par un site passe donc autant par la <strong>conversion</strong> et
              la <strong>visibilité Google</strong> que par la façon dont l'information est structurée. Deux leviers
              complémentaires :
            </p>
            <p>
              <strong>SEO (référencement naturel)</strong> : améliorer la visibilité et la compréhension du site dans
              les moteurs de recherche — architecture, contenu, pages services, SEO local et technique.
            </p>
            <p>
              <strong>GEO</strong> : travailler la structuration, la pertinence et l'autorité des informations afin
              d'améliorer leur compréhension et leur potentiel de citation dans les moteurs de réponse basés sur l'IA.
              Aucune méthode ne garantit une citation dans un moteur IA donné : l'objectif est de réunir les conditions
              qui rendent une entreprise claire, crédible et citable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

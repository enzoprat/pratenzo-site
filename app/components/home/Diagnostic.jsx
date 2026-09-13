'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Check, Send, CheckCircle, Link2, User, RefreshCcw } from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import { config } from '@/app/lib/config';

/* ============================================================
   DIAGNOSTIC INTERACTIF — 30 secondes
   4 questions → priorité calculée (Site web / SEO / SEO local / GEO /
   conversion, jamais d'Ads) → lead qualifié (Web3Forms).
   ============================================================ */

const QUESTIONS = [
  { id: 'site', label: 'Vous avez déjà un site internet ?', options: ['Oui', 'Non'] },
  { id: 'google', label: 'Vous apparaissez sur Google ?', options: ['Oui, bien', 'Un peu', 'Non / je ne sais pas'] },
  { id: 'demandes', label: 'Combien de demandes recevez-vous par mois ?', options: ['Quasiment aucune', 'Quelques-unes', 'Régulièrement'] },
  { id: 'pub', label: 'Vous faites de la publicité (Google / Meta Ads) ?', options: ['Oui', 'Non'] }
];

function computePriority(a) {
  let tags = [];
  if (a.site === 'Non') {
    return {
      tags: ['Site web', 'SEO local', 'Conversion'],
      detail: "Partir sur une base saine — structure pensée pour le SEO local et la conversion dès la conception — évite de tout reconstruire plus tard."
    };
  }
  if (a.google !== 'Oui, bien') tags.push('SEO local', 'SEO');
  if (a.demandes !== 'Régulièrement') tags.push('Conversion');
  if (a.google === 'Oui, bien' && a.demandes === 'Régulièrement') tags.push('GEO', 'Conversion');
  if (tags.length === 0) tags.push('SEO local', 'Conversion');
  tags = [...new Set(tags)].slice(0, 3);
  const detail = a.pub === 'Oui'
    ? "Vous investissez en publicité : le SEO et le GEO construisent une visibilité durable qui ne s'arrête pas quand le budget s'arrête."
    : "Sans publicité, votre visibilité repose entièrement sur le référencement — c'est exactement le levier à travailler.";
  return { tags, detail };
}

export default function Diagnostic() {
  const [step, setStep] = useState(0); // 0..3 questions, 'result'
  const [ans, setAns] = useState({ site: '', google: '', demandes: '', pub: '' });
  const [lead, setLead] = useState({ url: '', name: '', contact: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const isResult = step === 'result';
  const q = !isResult ? QUESTIONS[step] : null;
  const result = isResult ? computePriority(ans) : null;

  const choose = (id, value) => {
    setAns(a => ({ ...a, [id]: value }));
    setTimeout(() => setStep(s => (s >= QUESTIONS.length - 1 ? 'result' : s + 1)), 240);
  };
  const prev = () => setStep(s => (s === 'result' ? QUESTIONS.length - 1 : Math.max(0, s - 1)));
  const restart = () => { setAns({ site: '', google: '', demandes: '', pub: '' }); setStep(0); setStatus('idle'); };

  const setLeadField = (f) => (e) => setLead({ ...lead, [f]: e.target.value });

  async function submitLead(e) {
    e.preventDefault();
    if (!lead.name.trim() || !lead.contact.trim()) return;
    setStatus('sending'); setError('');
    try {
      const payload = {
        access_key: config.web3formsKey,
        subject: 'Nouveau lead — Diagnostic 30s',
        from_name: 'Prat Enzo',
        replyto: lead.contact.includes('@') ? lead.contact : undefined,
        Prenom: lead.name,
        Contact: lead.contact,
        Site: lead.url || (ans.site === 'Non' ? "Pas encore de site" : 'Non précisé'),
        A_deja_un_site: ans.site,
        Visible_sur_Google: ans.google,
        Demandes_par_mois: ans.demandes,
        Fait_de_la_publicite: ans.pub,
        Priorite_identifiee: result?.tags.join(' + ')
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

  const progress = isResult ? 100 : (step / QUESTIONS.length) * 100;

  return (
    <section className="section diag" id="diagnostic" aria-labelledby="diag-title">
      <div className="container">
        <Reveal>
          <div className="diag__head">
            <span className="section__eyebrow">Diagnostic · 30 secondes</span>
            <h2 id="diag-title">En 30 secondes, identifiez votre priorité.</h2>
            <p className="diag__lead">
              Quatre questions pour situer votre visibilité actuelle et savoir où concentrer les efforts —
              site web, référencement ou compréhension par les moteurs IA.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="diag__tool">
            <div className="diag__progress"><span style={{ width: `${progress}%` }} /></div>

            {!isResult ? (
              <div className="diag__q" key={q.id}>
                <div className="diag__q-count">Question {step + 1} / {QUESTIONS.length}</div>
                <h3 className="diag__q-title">{q.label}</h3>
                <div className="diag__options">
                  {q.options.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`diag__option ${ans[q.id] === opt ? 'is-on' : ''}`}
                      onClick={() => choose(q.id, opt)}
                    >
                      <span>{opt}</span>
                      {ans[q.id] === opt && <Check size={16} />}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button type="button" className="diag__back" onClick={prev}>
                    <ArrowLeft size={15} /> Précédent
                  </button>
                )}
              </div>
            ) : (
              <div className="diag__result">
                <div className="diag__q-count"><Sparkles size={14} /> Résultat</div>
                <p className="diag__result-label">Votre priorité</p>
                <div className="diag__tags">
                  {result.tags.map(t => <span className="diag__tag" key={t}>{t}</span>)}
                </div>
                <p className="diag__result-detail">{result.detail}</p>

                {status !== 'ok' ? (
                  <form className="diag__lead" onSubmit={submitLead}>
                    <div className="diag__lead-head">Recevez votre audit personnalisé</div>
                    {ans.site !== 'Non' && (
                      <div className="diag__lead-field">
                        <Link2 size={15} />
                        <input type="url" placeholder="URL de votre site (facultatif)" value={lead.url} onChange={setLeadField('url')} aria-label="URL de votre site" />
                      </div>
                    )}
                    <div className="diag__lead-row">
                      <div className="diag__lead-field">
                        <User size={15} />
                        <input type="text" required placeholder="Prénom" value={lead.name} onChange={setLeadField('name')} aria-label="Prénom" />
                      </div>
                      <div className="diag__lead-field">
                        <Send size={15} />
                        <input type="text" required placeholder="Email ou téléphone" value={lead.contact} onChange={setLeadField('contact')} aria-label="Email ou téléphone" />
                      </div>
                    </div>
                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
                    <button type="submit" className="btn btn--primary diag__cta" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Envoi…' : <>Recevoir mon audit <Send size={15} /></>}
                    </button>
                    {status === 'err' && <div className="form__msg form__msg--err">{error}</div>}
                    <p className="diag__lead-note">Vos réponses sont jointes automatiquement : l'audit sera adapté à votre situation.</p>
                  </form>
                ) : (
                  <div className="diag__ok">
                    <CheckCircle size={20} />
                    <div>
                      <strong>C'est noté, {lead.name || 'merci'} !</strong>
                      <span>Je prépare votre audit selon vos réponses et je reviens vers vous rapidement.</span>
                    </div>
                  </div>
                )}

                <button type="button" className="diag__restart" onClick={restart}>
                  <RefreshCcw size={13} /> Refaire le diagnostic
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

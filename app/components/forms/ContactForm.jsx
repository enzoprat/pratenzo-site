'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Clock, Send, CheckCircle, Sparkles, ArrowRight, ArrowLeft,
  Globe, ShoppingBag, Package, RefreshCcw, Layers, User, Building, AtSign,
  PhoneCall, Briefcase, MapPin, FileText, MessageSquare
} from 'lucide-react';
import Reveal from '@/app/components/shared/Reveal';
import MagneticButton from '@/app/components/shared/MagneticButton';
import { config } from '@/app/lib/config';

const projectTypes = [
  { value: 'Site vitrine', icon: Globe, desc: 'Présenter mon activité' },
  { value: 'E-commerce', icon: ShoppingBag, desc: 'Vendre en ligne' },
  { value: 'Click & collect', icon: Package, desc: 'Commande + retrait' },
  { value: 'Refonte de site', icon: RefreshCcw, desc: 'Moderniser un site' },
  { value: 'Autre', icon: Layers, desc: 'Projet sur mesure' }
];

const STEPS = [
  { id: 1, label: 'Projet', short: 'Type' },
  { id: 2, label: 'Vous', short: 'Coordonnées' },
  { id: 3, label: 'Détails', short: 'Activité' },
  { id: 4, label: 'Message', short: 'Finaliser' }
];

export default function ContactForm({ onSuccess }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    projectType: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    activity: '',
    services: '',
    zones: '',
    hasLogo: '',
    hasPhotos: '',
    message: ''
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const set = (field, value) => setForm({ ...form, [field]: value });

  const canNext = () => {
    if (step === 1) return !!form.projectType;
    if (step === 2) return form.name.trim() && form.email.trim();
    if (step === 3) return true; // tout optionnel à cette étape
    return form.message.trim();
  };

  const next = () => {
    if (!canNext()) return;
    setDirection(1);
    setStep(s => Math.min(STEPS.length, s + 1));
  };

  const prev = () => {
    setDirection(-1);
    setStep(s => Math.max(1, s - 1));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canNext()) return;
    setStatus('sending');
    setError('');

    try {
      const payload = {
        access_key: config.web3formsKey,
        subject: config.web3formsSubject,
        from_name: 'Prat Enzo',
        replyto: form.email,
        Nom: form.name,
        Entreprise: form.company,
        Email: form.email,
        Telephone: form.phone,
        TypeDeProjet: form.projectType,
        Activite: form.activity,
        Services: form.services,
        ZonesIntervention: form.zones,
        ALogo: form.hasLogo || 'Non précisé',
        APhotos: form.hasPhotos || 'Non précisé',
        Message: form.message
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        setStatus('ok');
        if (onSuccess) onSuccess();
        else router.push('/merci');
      } else {
        setStatus('err');
        setError(data.message || "Une erreur est survenue.");
      }
    } catch (err) {
      setStatus('err');
      setError("Connexion impossible. Réessayez.");
    }
  }

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 })
  };

  const progress = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <>
      {/* CTA banner */}
      <section className="cta-banner-section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-banner__bg" aria-hidden="true">
                <div className="cta-banner__blob cta-banner__blob--1" />
                <div className="cta-banner__blob cta-banner__blob--2" />
              </div>
              <div className="cta-banner__inner">
                <div className="cta-banner__pill">
                  <Sparkles size={14} /> Discutons de votre projet
                </div>
                <h2>
                  Un site clair, professionnel<br />
                  et prêt à être partagé.
                </h2>
                <p>
                  Envoyez votre demande, je reviens vers vous rapidement avec un
                  premier échange et une estimation adaptée à votre projet.
                </p>
                <div className="cta-banner__actions">
                  <MagneticButton className="magnetic--primary" href="#form">
                    Démarrer mon projet <ArrowRight size={16} />
                  </MagneticButton>
                  <a href={`tel:${config.phone.replace(/\s/g, '')}`} className="cta-banner__mail">
                    <Phone size={16} /> {config.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form multi-step */}
      <section className="section section--soft" id="contact">
        <div className="container" id="form">
          <div className="contact-wrap">
            <Reveal>
              <div className="contact-info">
                <span className="section__eyebrow">Contact</span>
                <h2>Parlons de votre projet</h2>
                <p>
                  4 étapes courtes, moins d'une minute. Plus vous donnez
                  d'informations, plus ma première réponse sera précise.
                </p>
                <ul>
                  <li><MessageSquare size={18} /> <a href="#form">Via le formulaire ci-contre</a></li>
                  <li><Phone size={18} /> <a href={`tel:${config.phone.replace(/\s/g, '')}`}>{config.phoneDisplay}</a></li>
                  <li><Clock size={18} /> Réponse rapide en jours ouvrés</li>
                </ul>

                <div className="contact-info__why">
                  <div className="contact-info__why-title">Ce qui se passe ensuite</div>
                  <div className="contact-info__step">
                    <span>1</span>
                    <div>J'étudie votre demande et clarifie vos besoins par mail.</div>
                  </div>
                  <div className="contact-info__step">
                    <span>2</span>
                    <div>Je vous propose une approche et une estimation adaptée.</div>
                  </div>
                  <div className="contact-info__step">
                    <span>3</span>
                    <div>Vous décidez sans engagement.</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form className="form form--wizard" onSubmit={handleSubmit} noValidate>
                {/* Progress bar */}
                <div className="wizard-progress">
                  <div className="wizard-progress__bar">
                    <div
                      className="wizard-progress__fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="wizard-progress__steps">
                    {STEPS.map(s => (
                      <button
                        type="button"
                        key={s.id}
                        className={`wizard-step ${step === s.id ? 'is-active' : ''} ${step > s.id ? 'is-done' : ''}`}
                        onClick={() => {
                          if (s.id < step) {
                            setDirection(-1);
                            setStep(s.id);
                          }
                        }}
                      >
                        <span className="wizard-step__num">
                          {step > s.id ? <CheckCircle size={14} /> : s.id}
                        </span>
                        <span className="wizard-step__label">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="wizard-body">
                  <AnimatePresence mode="wait" custom={direction}>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <div className="wizard-head">
                          <div className="wizard-eyebrow">Étape 1 / 4</div>
                          <h3>Quel type de projet ?</h3>
                          <p>Sélectionnez ce qui correspond le mieux à votre besoin.</p>
                        </div>
                        <div className="wizard-cards">
                          {projectTypes.map(t => (
                            <button
                              type="button"
                              key={t.value}
                              className={`wizard-card ${form.projectType === t.value ? 'is-active' : ''}`}
                              onClick={() => set('projectType', t.value)}
                            >
                              <span className="wizard-card__icon">
                                <t.icon size={22} />
                              </span>
                              <span className="wizard-card__title">{t.value}</span>
                              <span className="wizard-card__desc">{t.desc}</span>
                              {form.projectType === t.value && (
                                <span className="wizard-card__check">
                                  <CheckCircle size={16} />
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <div className="wizard-head">
                          <div className="wizard-eyebrow">Étape 2 / 4</div>
                          <h3>Comment vous joindre ?</h3>
                          <p>Vos coordonnées pour qu'on puisse revenir vers vous.</p>
                        </div>
                        <div className="form__row">
                          <div className="form__field">
                            <label htmlFor="name"><User size={14} /> Nom *</label>
                            <input id="name" type="text" required value={form.name} onChange={update('name')} placeholder="Jean Dupont" />
                          </div>
                          <div className="form__field">
                            <label htmlFor="company"><Building size={14} /> Entreprise</label>
                            <input id="company" type="text" value={form.company} onChange={update('company')} placeholder="Nom de l'entreprise" />
                          </div>
                        </div>
                        <div className="form__row">
                          <div className="form__field">
                            <label htmlFor="email"><AtSign size={14} /> Email *</label>
                            <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="vous@exemple.fr" />
                          </div>
                          <div className="form__field">
                            <label htmlFor="phone"><PhoneCall size={14} /> Téléphone</label>
                            <input id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="06 00 00 00 00" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <div className="wizard-head">
                          <div className="wizard-eyebrow">Étape 3 / 4</div>
                          <h3>Votre activité</h3>
                          <p>Quelques infos pour mieux comprendre votre univers.</p>
                        </div>
                        <div className="form__field">
                          <label htmlFor="activity"><Briefcase size={14} /> Activité de l'entreprise</label>
                          <input id="activity" type="text" value={form.activity} onChange={update('activity')} placeholder="Ex : Couvreur, coach sportif, e-commerce mode…" />
                        </div>
                        <div className="form__field">
                          <label htmlFor="services"><FileText size={14} /> Services proposés</label>
                          <input id="services" type="text" value={form.services} onChange={update('services')} placeholder="Décrivez en quelques mots" />
                        </div>
                        <div className="form__field">
                          <label htmlFor="zones"><MapPin size={14} /> Zones d'intervention</label>
                          <input id="zones" type="text" value={form.zones} onChange={update('zones')} placeholder="Ex : Bordeaux, Gironde, France entière…" />
                        </div>
                        <div className="form__row">
                          <div className="form__field">
                            <label>Avez-vous déjà un logo ?</label>
                            <div className="form__radio-group">
                              {['Oui', 'Non'].map(v => (
                                <label
                                  key={v}
                                  className={`form__radio ${form.hasLogo === v ? 'is-active' : ''}`}
                                >
                                  <input
                                    type="radio"
                                    name="hasLogo"
                                    value={v}
                                    checked={form.hasLogo === v}
                                    onChange={() => set('hasLogo', v)}
                                  />
                                  {v}
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className="form__field">
                            <label>Avez-vous déjà des photos ?</label>
                            <div className="form__radio-group">
                              {['Oui', 'Non'].map(v => (
                                <label
                                  key={v}
                                  className={`form__radio ${form.hasPhotos === v ? 'is-active' : ''}`}
                                >
                                  <input
                                    type="radio"
                                    name="hasPhotos"
                                    value={v}
                                    checked={form.hasPhotos === v}
                                    onChange={() => set('hasPhotos', v)}
                                  />
                                  {v}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <div className="wizard-head">
                          <div className="wizard-eyebrow">Étape 4 / 4</div>
                          <h3>Votre message</h3>
                          <p>Parlez-moi librement de votre projet, vos attentes, vos questions.</p>
                        </div>
                        <div className="form__field">
                          <label htmlFor="message">Message *</label>
                          <textarea
                            id="message"
                            required
                            value={form.message}
                            onChange={update('message')}
                            placeholder="Décrivez votre projet, vos délais, vos références si vous en avez…"
                            rows={6}
                          />
                        </div>

                        {/* Récap léger */}
                        <div className="wizard-recap">
                          <div className="wizard-recap__title">Récapitulatif</div>
                          <div className="wizard-recap__grid">
                            <div><span>Projet</span><strong>{form.projectType || '—'}</strong></div>
                            <div><span>Nom</span><strong>{form.name || '—'}</strong></div>
                            <div><span>Email</span><strong>{form.email || '—'}</strong></div>
                            <div><span>Activité</span><strong>{form.activity || '—'}</strong></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Anti-spam */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />

                {/* Footer wizard */}
                <div className="wizard-footer">
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={prev}
                    disabled={step === 1}
                    style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
                  >
                    <ArrowLeft size={16} /> Précédent
                  </button>

                  {step < STEPS.length ? (
                    <button
                      type="button"
                      className="btn btn--primary"
                      onClick={next}
                      disabled={!canNext()}
                    >
                      Suivant <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn--primary"
                      disabled={status === 'sending' || !canNext()}
                    >
                      {status === 'sending' ? 'Envoi…' : (
                        <>Envoyer ma demande <Send size={16} /></>
                      )}
                    </button>
                  )}
                </div>

                {status === 'ok' && (
                  <div className="form__msg form__msg--ok">
                    <CheckCircle size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                    Demande envoyée. Merci, je reviens vers vous rapidement.
                  </div>
                )}
                {status === 'err' && (
                  <div className="form__msg form__msg--err">{error}</div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
'use client';

import { useState } from 'react';
import { Plus, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/app/components/shared/Reveal';
import MagneticButton from '@/app/components/shared/MagneticButton';

const faq = [
  {
    cat: 'Général',
    q: 'Quel type de site pouvez-vous créer ?',
    a: 'Nous créons principalement des sites vitrines, des sites e-commerce, des sites click & collect et des landing pages professionnelles.'
  },
  {
    cat: 'Mobile',
    q: 'Est-ce que le site est adapté au téléphone ?',
    a: "Oui, chaque site est conçu pour être clair, rapide et agréable à utiliser sur mobile, tablette et ordinateur."
  },
  {
    cat: 'Contact',
    q: 'Est-ce que le site peut recevoir des demandes de contact ?',
    a: 'Oui, un formulaire de contact peut être intégré afin de recevoir directement les demandes par email.'
  },
  {
    cat: 'Contact',
    q: 'Est-ce que les visiteurs peuvent appeler directement ?',
    a: "Oui, des boutons d'appel peuvent être ajoutés pour faciliter la prise de contact depuis mobile."
  },
  {
    cat: 'Démarrage',
    q: 'Que faut-il fournir pour démarrer ?',
    a: "Il faut transmettre les services proposés, les zones d'intervention, les coordonnées, le logo, les photos de réalisations et les informations principales de l'entreprise."
  },
  {
    cat: 'Domaine',
    q: 'Le nom de domaine est-il inclus ?',
    a: "Le nom de domaine reste à la charge du client. Un accompagnement peut être prévu pour le choix, l'achat et la configuration."
  },
  {
    cat: 'Maintenance',
    q: "L'hébergement et la maintenance sont-ils inclus ?",
    a: "L'hébergement, la maintenance et les évolutions peuvent être proposés séparément selon les besoins du projet."
  },
  {
    cat: 'Évolutions',
    q: 'Est-il possible de modifier le site après livraison ?',
    a: "Oui, des modifications ou évolutions peuvent être réalisées après livraison. Elles sont traitées en supplément selon la demande."
  },
  {
    cat: 'Paiement',
    q: 'Comment se passe le paiement ?',
    a: 'Le paiement peut être effectué par virement ou espèces. Un acompte de 40% est demandé au démarrage du projet.'
  },
  {
    cat: 'Tarif',
    q: 'Combien coûte un site ?',
    a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après réception des informations du projet."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="faq-wrap">
          {/* Side info sticky */}
          <Reveal>
            <aside className="faq-side">
              <div className="faq-side__inner">
                <span className="section__eyebrow">FAQ</span>
                <h2>Toutes vos questions, des réponses claires</h2>
                <p>
                  Vous ne trouvez pas la réponse que vous cherchez ? Contactez-nous,
                  nous revenons vers vous rapidement avec un devis personnalisé.
                </p>

                <div className="faq-side__card">
                  <div className="faq-side__icon">
                    <MessageCircle size={22} />
                  </div>
                  <div className="faq-side__title">Une question spécifique ?</div>
                  <p className="faq-side__desc">
                    Décrivez votre projet, nous vous répondons sous 48h ouvrées.
                  </p>
                  <MagneticButton className="magnetic--primary" href="#contact">
                    Nous contacter <ArrowRight size={16} />
                  </MagneticButton>
                </div>

                <div className="faq-side__stat">
                  <HelpCircle size={18} />
                  <span><strong>{faq.length}</strong> questions fréquentes</span>
                </div>
              </div>
            </aside>
          </Reveal>

          {/* Accordéon */}
          <Reveal delay={0.1}>
            <div className="faq-list">
              {faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  >
                    <button
                      className="faq-item__q"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <div className="faq-item__main">
                        <span className="faq-item__cat">{item.cat}</span>
                        <span className="faq-item__title">{item.q}</span>
                      </div>
                      <span className="faq-item__icon">
                        <Plus size={16} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="faq-item__a">{item.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
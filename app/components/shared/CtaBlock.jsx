import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* Bloc CTA réutilisable en bas de page */
export default function CtaBlock({
  title = 'Prêt à démarrer votre projet ?',
  text = "Décrivez votre besoin via le formulaire, je reviens vers vous rapidement avec une première analyse et une estimation adaptée.",
  ctaLabel = 'Démarrer mon projet',
  ctaHref = '/contact'
}) {
  return (
    <section className="container">
      <div className="cta-block">
        <div className="cta-block__inner">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href={ctaHref} className="btn btn--primary" style={{ background: '#fff', color: 'var(--ink)' }}>
            {ctaLabel} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

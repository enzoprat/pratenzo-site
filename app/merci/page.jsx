import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';
import { buildMetadata } from '@/app/lib/seo';

export const metadata = buildMetadata({
  title: 'Demande envoyée | Prat Enzo',
  description: "Votre demande a bien été transmise. Un retour sera effectué rapidement.",
  path: '/merci',
  noindex: true
});

export default function MerciPage() {
  return (
    <main className="thanks">
      <div>
        <div className="thanks__icon">
          <Check size={36} strokeWidth={3} />
        </div>
        <h1>Demande envoyée</h1>
        <p style={{ maxWidth: 520, margin: '0 auto 28px' }}>
          Merci pour votre message. Votre demande a bien été transmise. Un retour sera
          effectué rapidement, en jours ouvrés.
        </p>
        <Link href="/" className="btn btn--ghost">
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

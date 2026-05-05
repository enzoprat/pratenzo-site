import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata = {
  title: 'Page introuvable — 404',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <main className="thanks">
      <div>
        <div className="thanks__icon" style={{ background: 'linear-gradient(135deg, #14532D, #16A34A)' }}>
          <span style={{ fontWeight: 800, fontSize: '1.8rem' }}>404</span>
        </div>
        <h1>Page introuvable</h1>
        <p style={{ maxWidth: 520, margin: '0 auto 28px' }}>
          La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil
          pour découvrir les services Prat Enzo.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--primary">
            <Home size={16} /> Retour à l'accueil
          </Link>
          <Link href="/realisations" className="btn btn--ghost">
            Voir les réalisations
          </Link>
        </div>
      </div>
    </main>
  );
}

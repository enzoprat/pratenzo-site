import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="brand" style={{ color: '#fff' }}>
              <span className="brand__mark">PE</span>
              <span className="brand__name" style={{ color: '#fff' }}>
                Prat <span style={{ color: 'var(--primary-3)' }}>Enzo</span>
              </span>
            </Link>
            <p style={{ marginTop: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 320 }}>
              Création de sites internet à Bordeaux et en Gironde : sites vitrines,
              e-commerce Shopify et click & collect pour professionnels.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Création site vitrine Bordeaux</Link></li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">Création site Shopify Bordeaux</Link></li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect Bordeaux</Link></li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte site internet</Link></li>
              <li><Link href="/site-internet-artisan-bordeaux">Site internet artisan Bordeaux</Link></li>
              <li><Link href="/seo-bordeaux">SEO Bordeaux</Link></li>
            </ul>
          </div>

          <div>
            <h4>Zones desservies</h4>
            <ul>
              <li><Link href="/creation-site-internet-bordeaux">Bordeaux</Link></li>
              <li><Link href="/creation-site-internet-merignac">Mérignac</Link></li>
              <li><Link href="/creation-site-internet-pessac">Pessac</Link></li>
              <li><Link href="/creation-site-internet-gironde">Gironde</Link></li>
              <li><Link href="/agence-web-bordeaux">Agence web Bordeaux</Link></li>
              <li><Link href="/seo-bordeaux">SEO Bordeaux</Link></li>
              <li><Link href="/secteurs">Secteurs accompagnés</Link></li>
            </ul>
          </div>

          <div>
            <h4>Ressources</h4>
            <ul>
              <li><Link href="/realisations">Réalisations</Link></li>
              <li><Link href="/tarifs-creation-site-internet">Tarifs</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <Link href="/contact" className="footer__cta" style={{ marginTop: 16, display: 'inline-flex' }}>
              Démarrer un projet <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <span>© {year} Prat Enzo. Tous droits réservés.</span>
            <span style={{ display: 'flex', gap: 18 }}>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">Confidentialité</Link>
              <Link href="/conditions-de-prestation">CGV</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

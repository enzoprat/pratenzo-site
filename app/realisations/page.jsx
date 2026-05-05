import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import {
  buildMetadata,
  buildCollectionSchema,
  buildBreadcrumbSchema
} from '@/app/lib/seo';
import { realisations } from '@/app/lib/data/realisations';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Réalisations | Sites créés par Prat Enzo à Bordeaux et en Gironde',
  description:
    "Sélection de sites internet créés par Prat Enzo : sites vitrines artisans, sites e-commerce, sites événementiels et sites premium pour des professionnels de Bordeaux et de la Gironde.",
  path: '/realisations'
});

const breadcrumb = [{ name: 'Réalisations', path: '/realisations' }];

const screenshot = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=500`;

export default function RealisationsPage() {
  const collection = buildCollectionSchema({ path: '/realisations', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: realisations.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://enzoprat.fr/realisations/${r.slug}`,
      name: r.name
    }))
  };

  return (
    <>
      <JsonLd data={[collection, bc, itemList]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Portfolio"
        h1={<>Quelques <strong>projets livrés</strong></>}
        sub="Une sélection de sites créés pour des artisans, indépendants, marques et entreprises de différents secteurs. Chaque projet est pensé pour servir un objectif précis : présenter, rassurer, convertir."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="grid grid--3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {realisations.map(r => (
              <article key={r.slug} className="real-card" style={{ flex: 'unset' }}>
                <div className="real-card__media">
                  <img
                    src={screenshot(r.url)}
                    alt={`Aperçu du site ${r.name}`}
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
                <div className="real-card__body">
                  <div className="real-card__cat">{r.category}</div>
                  <h2 className="real-card__title" style={{ fontSize: '1.2rem', margin: '4px 0' }}>{r.name}</h2>
                  <p className="real-card__desc">{r.description}</p>
                  <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                    <Link href={`/realisations/${r.slug}`} className="real-card__link">
                      Voir le détail →
                    </Link>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="real-card__link"
                      style={{ color: 'var(--muted)' }}
                    >
                      Site live <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBlock
          title="Créer un projet similaire"
          text="Vous avez un projet de site web ? Décrivez votre besoin via le formulaire, je reviens vers vous rapidement avec une proposition adaptée."
        />
      </PageShell>
    </>
  );
}

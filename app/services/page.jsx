import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import { services } from '@/app/lib/data/services';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Services création site internet à Bordeaux | Prat Enzo',
  description:
    "Services Prat Enzo : création de sites vitrines, e-commerce Shopify, click & collect et refonte à Bordeaux et en Gironde. Découvrez le service adapté à votre activité.",
  path: '/services'
});

const breadcrumb = [{ name: 'Services', path: '/services' }];

export default function ServicesPage() {
  const wp = buildWebPageSchema({ path: '/services', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://enzoprat.fr/services/${s.slug}`,
      name: s.title
    }))
  };

  return (
    <>
      <JsonLd data={[wp, bc, itemList]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Services"
        h1={<>Création de <strong>sites web sur mesure</strong> à Bordeaux</>}
        sub="Quatre solutions adaptées à votre activité, du site vitrine professionnel à la boutique en ligne complète. Chaque service est pensé pour générer des demandes et durer dans le temps."
      >
        <section className="container" style={{ paddingBottom: 80 }}>
          <div className="svc-list">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <span className="arrow">Découvrir <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>

        <CtaBlock />
      </PageShell>
    </>
  );
}

import Link from 'next/link';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Secteurs accompagnés | Prat Enzo',
  description:
    "Secteurs et métiers accompagnés par Prat Enzo : artisans du bâtiment, commerces, restaurants, coachs, instituts, conciergerie, événementiel, e-commerce.",
  path: '/secteurs'
});

const breadcrumb = [{ name: 'Secteurs', path: '/secteurs' }];

const sectors = [
  { name: 'Artisans du bâtiment', desc: 'Couvreurs, plombiers, électriciens, peintres, menuisiers, maçons, paysagistes', link: '/site-internet-artisan-bordeaux' },
  { name: 'Commerces', desc: 'Boutiques, magasins, points de vente avec ou sans click & collect' },
  { name: 'Restaurants & traiteurs', desc: 'Sites vitrines, click & collect et réservations' },
  { name: 'Coachs & thérapeutes', desc: 'Coachs sportifs, thérapeutes, consultants, formateurs' },
  { name: 'Instituts de beauté', desc: 'Salons de coiffure, instituts, esthétique, bien-être' },
  { name: 'Conciergerie', desc: 'Services aux particuliers et entreprises' },
  { name: 'Événementiel', desc: 'Organisateurs, animateurs, prestataires événementiels' },
  { name: 'E-commerce', desc: 'Marques, créateurs, vendeurs en ligne sur Shopify' },
  { name: 'Indépendants', desc: 'Freelances, prestataires de services, consultants' },
  { name: 'Entreprises locales', desc: 'PME, TPE, sociétés de proximité à Bordeaux et en Gironde' }
];

export default function SecteursPage() {
  const wp = buildWebPageSchema({ path: '/secteurs', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Secteurs"
        h1={<>Secteurs et <strong>métiers accompagnés</strong></>}
        sub="Prat Enzo intervient pour des professionnels de secteurs variés à Bordeaux et en Gironde. Le cœur de l'activité reste les artisans, commerces et indépendants locaux."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="related-links" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {sectors.map(s => (
              s.link ? (
                <Link key={s.name} href={s.link} className="related-link">
                  <span className="related-link__cat">Secteur</span>
                  <span className="related-link__title">{s.name}</span>
                  <span className="related-link__sub">{s.desc}</span>
                </Link>
              ) : (
                <div key={s.name} className="related-link">
                  <span className="related-link__cat">Secteur</span>
                  <span className="related-link__title">{s.name}</span>
                  <span className="related-link__sub">{s.desc}</span>
                </div>
              )
            ))}
          </div>
        </section>

        <CtaBlock title="Votre secteur n'est pas listé ?" text="Contactez-moi quand même : la majorité des projets sont sur mesure et la liste ci-dessus n'est pas exhaustive." />
      </PageShell>
    </>
  );
}

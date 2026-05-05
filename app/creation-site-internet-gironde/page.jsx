import Link from 'next/link';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import { locations } from '@/app/lib/data/locations';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Création site internet Gironde | Sites pro vitrines & e-commerce | Prat Enzo',
  description:
    "Création de sites internet en Gironde : sites vitrines, e-commerce et click & collect pour artisans, commerces et entreprises de tout le département.",
  path: '/creation-site-internet-gironde'
});

const breadcrumb = [{ name: 'Création site internet Gironde', path: '/creation-site-internet-gironde' }];

export default function CreationSiteInternetGirondePage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-gironde', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Gironde',
    containsPlace: locations.map(l => ({ '@type': 'City', name: l.name }))
  };

  return (
    <>
      <JsonLd data={[wp, bc, placeSchema]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Gironde · Page départementale"
        h1={<><strong>Création de site internet</strong> en Gironde</>}
        sub="Au-delà de Bordeaux, Prat Enzo accompagne les professionnels de toute la Gironde, de Mérignac à Libourne, de l'agglomération bordelaise au Bassin d'Arcachon."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un département dynamique pour les pros</h2>
            <p>
              La Gironde est l'un des départements les plus dynamiques de Nouvelle-Aquitaine. Bordeaux, sa métropole et
              ses villes voisines accueillent un tissu d'artisans, de commerces, d'indépendants et d'entreprises en
              constante évolution. Pour exister auprès d'une clientèle qui se renseigne en ligne, un site internet clair
              et professionnel est devenu un standard.
            </p>

            <h2>Communes desservies en Gironde</h2>
            <ul>
              {locations.map(l => (
                <li key={l.slug}>
                  {l.isPrimary ? (
                    <Link href="/creation-site-internet-bordeaux">{l.name}</Link>
                  ) : (
                    <span>{l.name}</span>
                  )}
                </li>
              ))}
            </ul>
            <p>
              Pour les communes individuelles, des pages dédiées sont en cours de création. En attendant, la zone
              d'intervention couvre l'ensemble du département. Une intervention à distance est également possible pour
              des projets en dehors de la Gironde.
            </p>

            <h2>Spécificités d'un site pour la Gironde</h2>
            <p>
              Un site pensé pour la Gironde mentionne explicitement les zones d'intervention, les villes ciblées et les
              spécificités locales. Cela renforce la pertinence aux yeux de Google et facilite la prise de contact
              depuis chaque ville couverte.
            </p>
            <p>
              La création de sites artisans est particulièrement adaptée à la Gironde, où de nombreux artisans
              indépendants cherchent à se distinguer par une présence en ligne soignée.
              <Link href="/site-internet-artisan-bordeaux"> Voir la page dédiée aux artisans</Link>.
            </p>

            <h2>Services principaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour présenter votre activité</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre en ligne</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour les commerces locaux</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant</li>
            </ul>
          </div>
        </section>

        <CtaBlock title="Lancer un projet en Gironde" />
      </PageShell>
    </>
  );
}

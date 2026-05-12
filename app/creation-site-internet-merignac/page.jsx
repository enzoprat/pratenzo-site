import Link from 'next/link';
import {
  buildMetadata,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema
} from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Création site internet Mérignac | Sites pour artisans et commerces | Prat Enzo',
  description:
    "Création de sites internet à Mérignac : vitrines, e-commerce et click & collect pour artisans, indépendants et commerces locaux.",
  path: '/creation-site-internet-merignac'
});

const breadcrumb = [{ name: 'Création site internet Mérignac', path: '/creation-site-internet-merignac' }];

const cityFaq = [
  {
    q: 'Intervenez-vous uniquement à Mérignac ?',
    a: "Non. Mérignac est l'une des communes couvertes en priorité, mais l'accompagnement s'étend à toute la Gironde et à distance pour des projets ailleurs en France."
  },
  {
    q: 'Faut-il être basé à Mérignac pour travailler ensemble ?',
    a: "Non, ce n'est pas nécessaire. Beaucoup d'échanges se font à distance par mail, téléphone ou visioconférence. Pour des rendez-vous physiques, Mérignac et l'agglomération bordelaise sont facilement accessibles."
  },
  {
    q: 'Combien coûte un site à Mérignac ?',
    a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet."
  }
];

export default function CreationSiteMerignacPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-merignac', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Mérignac · Page locale"
        h1={<><strong>Création de site internet</strong> à Mérignac</>}
        sub="Mérignac est l'une des communes les plus dynamiques de la métropole bordelaise. Pour les artisans, indépendants, commerces et entreprises basés à Mérignac ou y intervenant, un site internet clair et professionnel est devenu un standard pour attirer de nouveaux clients."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site adapté aux pros de Mérignac</h2>
            <p>
              Mérignac concentre une grande variété d'activités : artisans du bâtiment, services aux
              particuliers, commerces de proximité, entreprises tertiaires autour de l'aéroport et de la zone
              Yser-Marne. La concurrence locale est forte, ce qui rend un site clair et bien référencé
              indispensable pour se démarquer.
            </p>

            <h2>Services principaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour présenter votre activité, vos services et générer des demandes</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre vos produits en ligne</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour fluidifier votre service de proximité</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant</li>
            </ul>

            <h2>Spécificités d'un site optimisé Mérignac</h2>
            <p>
              Un site pensé pour ressortir sur les requêtes locales à Mérignac mentionne explicitement la
              ville, les zones d'intervention et les références locales. Le site peut aussi être complété par
              une fiche Google Business Profile cohérente.
            </p>
            <p>
              Pour les artisans (couvreurs, plombiers, électriciens, peintres, menuisiers), voir aussi la
              page dédiée <Link href="/site-internet-artisan-bordeaux">Site internet artisan Bordeaux</Link>.
            </p>

            <h2>Pour qui ?</h2>
            <ul>
              <li>Artisans à Mérignac et alentours</li>
              <li>Commerces de proximité (boulangeries, instituts, restaurants)</li>
              <li>Indépendants et consultants</li>
              <li>Entreprises de services aux particuliers et aux pros</li>
              <li>E-commerces basés à Mérignac</li>
            </ul>

            <h2>Approche locale</h2>
            <p>
              L'accompagnement couvre toute la Gironde — voir aussi <Link href="/creation-site-internet-bordeaux">Bordeaux</Link>
              et <Link href="/creation-site-internet-gironde">Gironde</Link>. Le SEO local fait partie de la
              démarche : page-ville dédiée, contenu mentionnant Mérignac et sa zone, balises adaptées et
              maillage avec les pages services. Voir <Link href="/seo-bordeaux">SEO Bordeaux</Link> pour plus
              de détails.
            </p>

            <h2>Questions fréquentes</h2>
            {cityFaq.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBlock title="Lancer votre site à Mérignac" />
      </PageShell>
    </>
  );
}

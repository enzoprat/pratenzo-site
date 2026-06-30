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
  title: 'Création de site internet à Marcheprime',
  description:
    "Création de site internet à Marcheprime : sites vitrines, e-commerce et click & collect pour artisans, commerces et pros entre Bordeaux et le Bassin. Devis et SEO local clairs.",
  path: '/creation-site-internet-marcheprime'
});

const breadcrumb = [{ name: 'Création site internet Marcheprime', path: '/creation-site-internet-marcheprime' }];

const cityFaq = [
  {
    q: "Marcheprime est entre Bordeaux et Arcachon, vous travaillez sur les deux zones ?",
    a: "Oui, c'est même un avantage. Une activité à Marcheprime peut viser les habitants de la commune et des communes voisines (Le Barp, Biganos, Mios, Lanton) tout en captant aussi la clientèle de passage entre Bordeaux et le Bassin. Le site peut être conçu pour exploiter les deux."
  },
  {
    q: "Mon activité est récente, est-ce que ça vaut le coup d'avoir un site ?",
    a: "Oui. Pour une jeune activité, le site est souvent la première preuve de sérieux pour un prospect. Il complète une fiche Google Business Profile et permet d'apparaître sur les recherches locales dès le lancement, même avec un petit budget initial."
  },
  {
    q: "Faut-il un site séparé par activité si j'en ai plusieurs ?",
    a: "Pas nécessairement. Plusieurs activités peuvent cohabiter sur un seul site bien organisé, avec une page dédiée à chacune. C'est généralement plus efficace en SEO et plus simple à maintenir qu'avoir plusieurs sites séparés."
  }
];

export default function CreationSiteMarcheprimePage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-marcheprime', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Marcheprime · Page locale"
        h1={<><strong>Création de site internet</strong> à Marcheprime</>}
        sub="Marcheprime est une commune en pleine croissance, à mi-chemin entre Bordeaux et le Bassin d'Arcachon. Pour les artisans, commerçants et indépendants installés ici, un site internet bien construit capte une demande locale en hausse, encore peu travaillée par la concurrence."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site adapté aux pros de Marcheprime</h2>
            <p>
              La position de Marcheprime, sur l'axe Bordeaux-Arcachon, en fait une zone d'installation
              attractive pour les jeunes familles et les artisans. Conséquence : une demande locale qui
              progresse rapidement (rénovation, construction, services à la personne, commerces de bouche)
              avec une offre en ligne souvent légère. Un site clair et géolocalisé fait la différence.
            </p>

            <h2>Services principaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour générer des contacts qualifiés sur Marcheprime et alentours</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre vos produits localement et au-delà</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour fluidifier les commandes de proximité</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site déjà en place qui ne convertit pas</li>
            </ul>

            <h2>Particularités d'un site optimisé Marcheprime</h2>
            <p>
              Le site mentionne explicitement Marcheprime et les communes voisines (Le Barp, Biganos,
              Mios, Lanton, Salles) pour capter les recherches locales. La fiche Google Business Profile
              doit être alignée avec le site (adresse, horaires, zones d'intervention). Les artisans
              trouveront aussi un complément utile sur la page
              <Link href="/site-internet-artisan-bordeaux"> Site internet artisan Bordeaux</Link>.
            </p>

            <h2>Pour qui ?</h2>
            <ul>
              <li>Artisans du bâtiment (couvreurs, plombiers, électriciens, paysagistes, menuisiers)</li>
              <li>Commerces de bouche et restaurateurs</li>
              <li>Services à la personne et aux entreprises</li>
              <li>Indépendants et professions libérales</li>
              <li>Producteurs locaux et activités saisonnières</li>
            </ul>

            <h2>Approche locale</h2>
            <p>
              L'accompagnement couvre toute la zone entre Bordeaux et le Bassin. Voir aussi
              <Link href="/creation-site-internet-arcachon"> Arcachon</Link>,
              <Link href="/creation-site-internet-bordeaux"> Bordeaux</Link> ou la page département
              <Link href="/creation-site-internet-gironde"> Gironde</Link>.
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

        <CtaBlock title="Lancer votre site à Marcheprime" />
      </PageShell>
    </>
  );
}

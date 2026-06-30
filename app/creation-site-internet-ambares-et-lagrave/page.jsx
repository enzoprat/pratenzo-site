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
  title: "Création de site internet à Ambarès-et-Lagrave",
  description:
    "Création de site internet à Ambarès-et-Lagrave : sites vitrines, e-commerce et click & collect pour artisans, commerces et PME de la rive droite. Devis clair, SEO local soigné.",
  path: '/creation-site-internet-ambares-et-lagrave'
});

const breadcrumb = [{ name: 'Création site internet Ambarès-et-Lagrave', path: '/creation-site-internet-ambares-et-lagrave' }];

const cityFaq = [
  {
    q: "Couvrez-vous toute la rive droite de Bordeaux ?",
    a: "Oui. Au-delà d'Ambarès-et-Lagrave, l'accompagnement couvre Bassens, Lormont, Cenon, Floirac, Artigues-près-Bordeaux, Sainte-Eulalie et plus largement la métropole bordelaise. La proximité géographique facilite les rendez-vous physiques quand ils sont utiles."
  },
  {
    q: "Mon entreprise est en zone d'activité, est-ce que c'est un frein pour le SEO local ?",
    a: "Non. Un site bien fait peut tout à fait référencer une activité en zone industrielle ou logistique. Le contenu doit clairement mentionner la commune, les zones desservies et le type de clientèle. La fiche Google Business Profile vient renforcer le signal local."
  },
  {
    q: "Combien de temps faut-il pour qu'un nouveau site remonte sur Google ?",
    a: "Pour des requêtes locales peu concurrentielles à Ambarès, on observe souvent une indexation rapide (quelques jours) et un positionnement progressif sur 1 à 3 mois selon le travail SEO de fond et la fréquence de mise à jour."
  }
];

export default function CreationSiteAmbaresPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-ambares-et-lagrave', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Ambarès-et-Lagrave · Page locale"
        h1={<><strong>Création de site internet</strong> à Ambarès-et-Lagrave</>}
        sub="Ambarès-et-Lagrave est une commune dynamique de la rive droite, à 15 minutes du centre de Bordeaux, avec un tissu actif d'artisans, commerces, services aux entreprises et activités logistiques. Un site internet clair et géolocalisé permet de capter une demande locale souvent sous-exploitée par la concurrence."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site adapté aux pros d'Ambarès</h2>
            <p>
              La rive droite a une particularité intéressante pour le SEO : la concurrence en ligne y est
              souvent plus faible que sur Bordeaux centre, ce qui rend les premières positions plus
              accessibles. Les activités les plus représentées à Ambarès : artisans du bâtiment,
              entreprises de transport et logistique, services aux particuliers, restauration et
              commerces de proximité, professions de santé.
            </p>

            <h2>Services principaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour présenter votre activité, vos services et obtenir des demandes</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre en ligne avec gestion stock et paiement</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour les commerces de proximité</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant trop ancien ou pas mobile</li>
            </ul>

            <h2>Particularités d'un site optimisé Ambarès</h2>
            <p>
              Pour bien ressortir sur les requêtes locales, le site mentionne explicitement Ambarès-et-Lagrave,
              les communes limitrophes desservies (Bassens, Sainte-Eulalie, Saint-Loubès, Carbon-Blanc) et
              le type de clientèle visée. Les artisans peuvent aussi consulter la page dédiée
              <Link href="/site-internet-artisan-bordeaux"> Site internet artisan Bordeaux</Link>.
            </p>

            <h2>Pour qui ?</h2>
            <ul>
              <li>Artisans du bâtiment (couvreurs, plombiers, électriciens, maçons, peintres, menuisiers)</li>
              <li>Entreprises de transport et logistique</li>
              <li>Commerces de proximité et restaurateurs</li>
              <li>Services à la personne et professionnels de santé</li>
              <li>PME et indépendants en zone d'activité</li>
            </ul>

            <h2>Approche locale</h2>
            <p>
              L'accompagnement couvre toute la métropole bordelaise et la Gironde. Voir aussi
              <Link href="/creation-site-internet-bordeaux"> Bordeaux</Link>,
              <Link href="/creation-site-internet-artigues-pres-bordeaux"> Artigues-près-Bordeaux</Link> ou
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

        <CtaBlock title="Lancer votre site à Ambarès-et-Lagrave" />
      </PageShell>
    </>
  );
}

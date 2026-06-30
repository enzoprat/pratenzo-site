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
  title: 'Création de site internet à Artigues-près-Bordeaux',
  description:
    "Création de site internet à Artigues-près-Bordeaux : sites vitrines, e-commerce et click & collect pour artisans, PME et commerces de la rive droite. SEO local et design soigné.",
  path: '/creation-site-internet-artigues-pres-bordeaux'
});

const breadcrumb = [{ name: 'Création site internet Artigues-près-Bordeaux', path: '/creation-site-internet-artigues-pres-bordeaux' }];

const cityFaq = [
  {
    q: "Pourquoi une page dédiée à Artigues-près-Bordeaux ?",
    a: "Parce que les recherches locales \"création site internet Artigues\" existent réellement et qu'une page-ville dédiée se positionne beaucoup mieux qu'une page Bordeaux générique. C'est la base d'un SEO local efficace, surtout sur des communes périphériques où la concurrence en ligne est plus faible."
  },
  {
    q: "Travaillez-vous avec les entreprises de la zone Bordeaux Lac et de la rive droite ?",
    a: "Oui. La rive droite (Artigues, Cenon, Floirac, Lormont, Bassens, Ambarès, Carbon-Blanc) fait partie de la zone d'intervention principale, au même titre que Bordeaux centre. Les rendez-vous physiques sont faciles, l'agglomération est très accessible."
  },
  {
    q: "Comment se passe la mise en ligne du site ?",
    a: "Une fois le site validé, la mise en ligne se fait sur votre nom de domaine. Si vous n'en avez pas, il peut être réservé pour vous. Le site est ensuite indexable rapidement par Google et peut être lié à votre fiche Google Business Profile pour renforcer la visibilité locale."
  }
];

export default function CreationSiteArtiguesPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-artigues-pres-bordeaux', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Artigues-près-Bordeaux · Page locale"
        h1={<><strong>Création de site internet</strong> à Artigues-près-Bordeaux</>}
        sub="Artigues-près-Bordeaux est une commune dynamique de la rive droite, à 10 minutes de Bordeaux centre. Pour les artisans, commerces et PME locales, un site internet bien construit attire des clients de proximité que la concurrence laisse souvent passer faute de présence en ligne soignée."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site adapté aux pros d'Artigues</h2>
            <p>
              Artigues-près-Bordeaux concentre une activité variée : artisanat du bâtiment, services
              aux entreprises (la commune accueille plusieurs zones d'activités), commerces de bouche,
              professions libérales et services à la personne. La concurrence en ligne y est nettement
              plus faible que sur Bordeaux centre : un site clair, géolocalisé et techniquement propre
              peut viser les premières positions Google sur des requêtes locales en quelques semaines.
            </p>

            <h2>Services principaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour générer des demandes locales qualifiées</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre en ligne en plus de votre activité physique</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour les commerces de centre-ville</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant qui n'apparaît plus dans Google</li>
            </ul>

            <h2>Particularités d'un site optimisé Artigues</h2>
            <p>
              Le site mentionne Artigues-près-Bordeaux explicitement, ainsi que les communes voisines
              desservies (Cenon, Lormont, Floirac, Carbon-Blanc, Bouliac). Le maillage avec une fiche
              Google Business Profile à jour et une page services dédiée fait la différence. Pour les
              artisans, voir aussi la page
              <Link href="/site-internet-artisan-bordeaux"> Site internet artisan Bordeaux</Link>.
            </p>

            <h2>Pour qui ?</h2>
            <ul>
              <li>Artisans du bâtiment et professionnels du second œuvre</li>
              <li>PME et entreprises de service en zone d'activité</li>
              <li>Commerces de bouche et restaurateurs</li>
              <li>Professions libérales et professions de santé</li>
              <li>Indépendants et auto-entrepreneurs</li>
            </ul>

            <h2>Approche locale</h2>
            <p>
              L'accompagnement couvre la métropole bordelaise et la Gironde. Voir aussi
              <Link href="/creation-site-internet-bordeaux"> Bordeaux</Link>,
              <Link href="/creation-site-internet-ambares-et-lagrave"> Ambarès-et-Lagrave</Link> ou
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

        <CtaBlock title="Lancer votre site à Artigues-près-Bordeaux" />
      </PageShell>
    </>
  );
}

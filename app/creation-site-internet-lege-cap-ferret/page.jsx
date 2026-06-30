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
  title: 'Création de site internet à Lège-Cap-Ferret',
  description:
    "Création de site internet à Lège-Cap-Ferret : sites vitrines, locations saisonnières, conciergeries et e-commerce pour les pros du Cap. SEO local et design soigné.",
  path: '/creation-site-internet-lege-cap-ferret'
});

const breadcrumb = [{ name: 'Création site internet Lège-Cap-Ferret', path: '/creation-site-internet-lege-cap-ferret' }];

const cityFaq = [
  {
    q: "Quelle clientèle vise un site sur le Cap Ferret ?",
    a: "Le Cap attire une clientèle haut de gamme, en grande partie touristique, mais aussi locale à l'année. Un site clair, soigné visuellement et orienté prise de contact rapide capte les deux publics : touristes en recherche d'hébergement ou de prestation, et locaux en recherche d'artisan ou de service de proximité."
  },
  {
    q: "Pouvez-vous gérer un site qui inclut des réservations en ligne ?",
    a: "Oui, c'est courant sur le Cap Ferret pour les chambres d'hôtes, gîtes et conciergeries. Un module de réservation peut être intégré, soit avec un outil tiers connecté (Lodgify, Bnbsitter, Booking widgets), soit avec un formulaire de demande de devis personnalisé."
  },
  {
    q: "Intervenez-vous uniquement sur Lège-Cap-Ferret ?",
    a: "Non. La zone couverte inclut tout le Bassin d'Arcachon, la presqu'île du Cap (Le Canon, Piraillan, L'Herbe, Petit Piquey, Grand Piquey, Claouey) et plus largement la Gironde. Les rendez-vous peuvent être physiques ou à distance."
  }
];

export default function CreationSiteCapFerretPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-lege-cap-ferret', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Lège-Cap-Ferret · Page locale"
        h1={<><strong>Création de site internet</strong> à Lège-Cap-Ferret</>}
        sub="Le Cap Ferret est un territoire à part : exigence visuelle élevée, clientèle internationale en saison, locaux fidèles à l'année. Un site bien pensé doit refléter ce positionnement haut de gamme tout en restant simple et rapide à utiliser."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site adapté aux pros du Cap</h2>
            <p>
              Sur la presqu'île, la concurrence visuelle est forte : chambres d'hôtes haut de gamme,
              conciergeries, ostréiculteurs, restaurants prisés, agences immobilières spécialisées.
              Un site qui ressort doit allier qualité photo, navigation fluide et information de contact
              immédiate. C'est aussi un territoire où la fiche Google Business Profile est très consultée :
              site et fiche doivent être parfaitement alignés.
            </p>

            <h2>Services principaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> haut de gamme pour hébergeurs, restaurateurs et prestataires</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour ostréiculteurs, producteurs et concept stores</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour les commerces de bourg et marchés</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant devenu daté</li>
            </ul>

            <h2>Particularités d'un site optimisé Cap Ferret</h2>
            <p>
              Pour ressortir sur des requêtes locales très concurrentielles (site Cap Ferret, agence
              web Cap Ferret, location Cap Ferret), le site doit mentionner clairement la commune,
              les hameaux desservis et les éventuelles spécialités. La rapidité de chargement compte
              énormément : une partie de la clientèle consulte le site depuis mobile en pleine saison,
              parfois avec une connexion 4G correcte mais sans plus.
            </p>

            <h2>Pour qui ?</h2>
            <ul>
              <li>Chambres d'hôtes, gîtes, conciergeries et locations saisonnières</li>
              <li>Restaurants, bars à huîtres et établissements de bord d'eau</li>
              <li>Ostréiculteurs et producteurs locaux</li>
              <li>Agences immobilières et chasseurs d'appartements</li>
              <li>Artisans (paysagistes, menuisiers, peintres, électriciens)</li>
              <li>Commerces de bourg et boutiques de créateurs</li>
            </ul>

            <h2>Approche locale</h2>
            <p>
              L'accompagnement couvre le Bassin et la Gironde. Voir aussi
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

        <CtaBlock title="Lancer votre site au Cap Ferret" />
      </PageShell>
    </>
  );
}

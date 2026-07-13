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
  // Cible "création site internet arcachon" + "site vitrine bordeaux" qui ont
  // chacune généré des impressions. "Bassin d'Arcachon" est inclus dans le H1
  // de page pour aller chercher la longue traîne associée.
  title: "Création de site internet à Arcachon et sur le Bassin",
  description:
    "Création de site internet à Arcachon : vitrine, e-commerce et click & collect pour commerces, hôteliers, restaurateurs et artisans du Bassin d'Arcachon. SEO local inclus.",
  path: '/creation-site-internet-arcachon'
});

const breadcrumb = [{ name: 'Création site internet Arcachon', path: '/creation-site-internet-arcachon' }];

const cityFaq = [
  {
    q: "Travaillez-vous avec des pros du Bassin d'Arcachon en dehors d'Arcachon ?",
    a: "Oui. La zone couverte inclut Arcachon, La Teste-de-Buch, Gujan-Mestras, Le Teich, Audenge, Lège-Cap-Ferret et plus largement tout le Bassin. Les échanges peuvent se faire à distance ou en rendez-vous physique selon votre préférence."
  },
  {
    q: "Mon activité est saisonnière, est-ce que ça change quelque chose pour le site ?",
    a: "Le site est pensé pour générer des demandes toute l'année, avec une mise en avant adaptable des prestations saisonnières (été, fêtes de fin d'année, événements locaux). Il peut afficher dynamiquement les périodes d'ouverture et les services du moment."
  },
  {
    q: "Faut-il une version en anglais pour les touristes ?",
    a: "Ce n'est pas obligatoire. Pour un commerce ou un hébergement très tourné international, une version anglaise simple peut être ajoutée. Pour la plupart des activités locales, le français reste suffisant pour capter la clientèle française qui représente la majorité du tourisme sur le Bassin."
  }
];

export default function CreationSiteArcachonPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-arcachon', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Arcachon · Page locale"
        h1={<><strong>Création de site internet</strong> à Arcachon</>}
        sub="Arcachon et le Bassin concentrent une économie locale forte : tourisme, ostréiculture, immobilier, restauration, artisanat et services à la personne. Un site internet local clair permet de capter la demande sur place toute l'année, et pas seulement en saison."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site adapté aux pros d'Arcachon et du Bassin</h2>
            <p>
              Le Bassin d'Arcachon a une particularité : une saisonnalité marquée et une clientèle mixte
              (résidents à l'année, résidences secondaires, touristes). Un site bien construit s'adresse
              à ces trois publics avec un message clair, des informations pratiques visibles dès la
              page d'accueil et un parcours de contact rapide. Les activités les plus représentées :
              hôtellerie, locations saisonnières, restaurants et bars, ostréiculteurs, paysagistes,
              artisans du bâtiment et agences immobilières.
            </p>

            <h2>Quel type de site pour une activité sur le Bassin ?</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour présenter votre activité, vos prestations et générer des contacts qualifiés</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre produits locaux, paniers ou cartes cadeaux</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour fluidifier les commandes des commerces et restaurateurs</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant qui ne convertit plus</li>
            </ul>

            <h2>Particularités d'un site optimisé Bassin d'Arcachon</h2>
            <p>
              Pour ressortir sur les requêtes locales (Arcachon, La Teste, Gujan-Mestras, Cap Ferret),
              le site mentionne explicitement la commune principale et la zone d'intervention. Le
              maillage avec une fiche Google Business Profile à jour est déterminant : c'est souvent
              la première chose que voit un client potentiel à Arcachon, avant même votre site.
            </p>
            <p>
              Une page locale dédiée existe aussi pour <Link href="/creation-site-internet-lege-cap-ferret">Lège-Cap-Ferret</Link>,
              utile si votre activité couvre les deux rives du Bassin.
            </p>

            <h2>À qui s'adresse un site sur le Bassin d'Arcachon ?</h2>
            <ul>
              <li>Hôteliers, gîtes, chambres d'hôtes et locations saisonnières</li>
              <li>Restaurateurs et bars à huîtres</li>
              <li>Ostréiculteurs et producteurs locaux</li>
              <li>Agences immobilières et conciergeries</li>
              <li>Artisans du bâtiment (couvreurs, plombiers, électriciens, paysagistes)</li>
              <li>Commerces de centre-ville et indépendants</li>
            </ul>

            <h2>Zone d'intervention autour du Bassin</h2>
            <p>
              L'accompagnement couvre tout le Bassin et plus largement la Gironde. Voir aussi
              <Link href="/creation-site-internet-bordeaux"> Bordeaux</Link> ou la page département
              <Link href="/creation-site-internet-gironde"> Gironde</Link>. Le SEO local fait partie
              du livrable : page-ville dédiée, balises adaptées, contenu mentionnant la zone précise
              et liens internes vers les services. Voir <Link href="/seo-bordeaux">SEO Bordeaux</Link> pour
              la méthode.
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

        <CtaBlock title="Lancer votre site à Arcachon" />
      </PageShell>
    </>
  );
}

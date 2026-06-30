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
  // Title optimisé : 57 caractères, suffixe " | Prat Enzo" retiré (l'ancien
  // était dur-codé et créait un suffixe en double avec le template global).
  // Couvre "création site internet pessac" et capte aussi "refonte site
  // internet pessac" via la section dédiée plus bas dans la page.
  title: 'Création de site internet à Pessac pour artisans et pros',
  description:
    "Création et refonte de site internet à Pessac : vitrine, e-commerce ou click & collect pour artisans, commerces et pros locaux. SEO local et design soigné.",
  path: '/creation-site-internet-pessac'
});

const breadcrumb = [{ name: 'Création site internet Pessac', path: '/creation-site-internet-pessac' }];

const cityFaq = [
  {
    q: 'Travaillez-vous avec des entreprises basées à Pessac ?',
    a: "Oui. Pessac fait partie des communes couvertes au cœur de l'activité, au même titre que Bordeaux et Mérignac. Les échanges peuvent être réalisés à distance ou en présentiel."
  },
  {
    q: 'Avez-vous des réalisations dans la zone de Pessac ?',
    a: "Plusieurs projets ont été livrés dans l'agglomération bordelaise. Voir la page Réalisations pour des exemples concrets, ou demander un projet similaire pour une activité comparable."
  },
  {
    q: "Faites-vous aussi de la refonte de site à Pessac ?",
    a: "Oui. Si vous avez déjà un site qui n'est plus à jour, pas responsive ou qui n'apparaît plus dans Google, une refonte permet de moderniser le design, repenser la structure et préserver le référencement existant grâce à des redirections propres. Le détail de la prestation est sur la page Refonte de site internet à Bordeaux."
  },
  {
    q: 'Combien coûte un site à Pessac ?',
    a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet."
  }
];

export default function CreationSitePessacPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-pessac', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(cityFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Pessac · Page locale"
        h1={<><strong>Création de site internet</strong> à Pessac</>}
        sub="Pessac est une commune dynamique de la métropole bordelaise, accueillant artisans, commerces, étudiants et entreprises. Un site internet professionnel est aujourd'hui indispensable pour exister en ligne et capter des prospects locaux."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site pensé pour Pessac et ses environs</h2>
            <p>
              Pessac et ses quartiers (Centre, Saige, Bellegrave, Toctoucau, France Alouette) abritent un
              tissu économique varié. Un site clair, responsive et bien référencé permet de toucher les
              prospects qui cherchent un professionnel près de chez eux via Google.
            </p>

            <h2>Services proposés</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine</Link> pour présenter une activité locale</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">E-commerce Shopify</Link> pour vendre en ligne</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link> pour les commerces de proximité</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte</Link> d'un site existant</li>
            </ul>

            <h2>Refonte de site internet à Pessac</h2>
            <p>
              Si votre site actuel a quelques années, n'est pas responsive ou n'apparaît plus dans
              Google, une refonte est souvent plus efficace qu'un nouveau site de zéro. La refonte
              permet de moderniser le design, repenser la structure, améliorer les performances et
              préserver le SEO acquis grâce à des redirections propres (301) des anciennes URLs vers
              les nouvelles. La méthode est détaillée sur la page
              <Link href="/services/refonte-site-internet-bordeaux"> Refonte de site internet à Bordeaux</Link>,
              elle s'applique exactement de la même façon à Pessac.
            </p>

            <h2>SEO local Pessac</h2>
            <p>
              Pour ressortir sur les requêtes locales (« plombier Pessac », « boulangerie Pessac »…), il faut
              une page web optimisée localement, une fiche Google Business Profile cohérente et un maillage
              interne logique entre les pages services et les pages-villes.
              Voir aussi <Link href="/seo-bordeaux">SEO Bordeaux</Link> pour la méthode complète.
            </p>

            <h2>Cibles fréquentes à Pessac</h2>
            <ul>
              <li>Artisans (couverture, plomberie, électricité, peinture, menuiserie) — voir
                <Link href="/site-internet-artisan-bordeaux"> Site artisan Bordeaux</Link></li>
              <li>Commerces de quartier (boulangerie, primeur, coiffeur, institut)</li>
              <li>Indépendants et professions libérales</li>
              <li>Restaurants, traiteurs, petits e-commerces</li>
              <li>Entreprises de services aux entreprises</li>
            </ul>

            <h2>Au-delà de Pessac</h2>
            <p>
              L'accompagnement couvre toute la métropole et la Gironde. Voir aussi
              <Link href="/creation-site-internet-bordeaux"> Bordeaux</Link>,
              <Link href="/creation-site-internet-merignac"> Mérignac</Link>, et la page
              <Link href="/creation-site-internet-gironde"> Gironde</Link> pour le périmètre complet.
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

        <CtaBlock title="Lancer votre site à Pessac" />
      </PageShell>
    </>
  );
}

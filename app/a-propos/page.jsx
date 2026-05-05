import Link from 'next/link';
import {
  buildMetadata,
  buildAboutSchema,
  buildBreadcrumbSchema,
  buildPersonSchema
} from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'À propos | Prat Enzo, création de sites internet à Bordeaux',
  description:
    "Prat Enzo accompagne les professionnels dans la création de sites internet pensés pour être beaux, clairs, utiles et orientés résultats. Une approche directe, sans intermédiaires inutiles.",
  path: '/a-propos'
});

const breadcrumb = [{ name: 'À propos', path: '/a-propos' }];

export default function AProposPage() {
  const about = buildAboutSchema({ path: '/a-propos', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const person = buildPersonSchema();

  return (
    <>
      <JsonLd data={[about, bc, person]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="À propos"
        h1={<>Une approche claire, moderne et <strong>orientée résultats</strong></>}
        sub="Prat Enzo accompagne les professionnels dans la création de sites internet pensés pour être beaux, clairs et utiles. L'objectif n'est pas seulement de créer un site esthétique, mais de construire un support capable de rassurer, convertir et évoluer avec l'activité."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>L'approche</h2>
            <p>
              Beaucoup de prestataires web livrent un site puis disparaissent. Beaucoup d'agences vendent des sites
              sur-dimensionnés à des artisans qui auraient juste besoin d'un site clair. Beaucoup de freelances bâclent
              le SEO ou le responsive.
            </p>
            <p>
              Prat Enzo travaille différemment : analyse réelle du besoin, structure pensée pour la conversion, design
              moderne, intégration propre, SEO local intégré dès la conception, mise en ligne accompagnée. Pas de
              promesses excessives, pas de top 1 Google garanti, juste un travail solide.
            </p>

            <h2>Expertises</h2>
            <ul>
              <li>Création de sites vitrines pour artisans, indépendants, commerces et entreprises locales</li>
              <li>Création de boutiques e-commerce Shopify</li>
              <li>Mise en place de solutions click & collect</li>
              <li>Refontes de sites existants</li>
              <li>SEO local pour Bordeaux et la Gironde</li>
              <li>Accompagnement à la mise en ligne et aux outils Google</li>
            </ul>

            <h2>Stack et outils</h2>
            <p>
              Selon le type de projet, plusieurs technologies peuvent être utilisées : Next.js / React pour les sites
              sur mesure performants, Webflow pour les vitrines à éditer en CMS, Shopify pour le e-commerce. Le code
              est propre, hébergé sur Vercel ou des plateformes équivalentes pour la performance, et complété par des
              outils comme Web3Forms pour les formulaires, Google Search Console et Google Business Profile pour la
              visibilité.
            </p>
            <p>
              L'objectif est toujours le même : choisir la bonne technologie pour le bon projet, sans complexifier
              inutilement.
            </p>

            <h2>Localisation</h2>
            <p>
              Basé à Bordeaux, intervention principalement sur la <Link href="/creation-site-internet-gironde">Gironde</Link>
              et la métropole bordelaise. Des projets sont également réalisés à distance pour des clients ailleurs en
              France selon les besoins.
            </p>

            <h2>Vision</h2>
            <p>
              Un site internet n'est pas une fin en soi. C'est un outil pour rendre une activité plus visible, plus
              crédible, plus accessible. Tout le travail est orienté autour de cette idée : que le site soit utile,
              clair pour le visiteur, et qu'il génère concrètement des demandes.
            </p>
          </div>
        </section>

        <CtaBlock title="Discutons de votre projet" />
      </PageShell>
    </>
  );
}

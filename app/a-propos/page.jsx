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
        h1={<>Moi, c'est <strong>Enzo</strong> — et je conçois vos sites</>}
        sub="Je m'appelle Enzo Prat et je crée des sites internet pour les professionnels de Bordeaux et de la Gironde. Pas une agence anonyme : une seule personne, qui conçoit votre site du premier appel à la mise en ligne, et qui reste joignable ensuite."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Mon approche</h2>
            <p>
              Beaucoup de prestataires web livrent un site puis disparaissent. Beaucoup d'agences vendent des sites
              sur-dimensionnés à des artisans qui auraient juste besoin d'un site clair. Beaucoup de freelances bâclent
              le SEO ou le responsive.
            </p>
            <p>
              Je travaille différemment : analyse réelle du besoin, structure pensée pour la conversion, design
              moderne, intégration propre, SEO local intégré dès la conception, mise en ligne accompagnée. Pas de
              promesses excessives, pas de top 1 Google garanti, juste un travail solide. Et surtout, vous savez avec
              qui vous travaillez : moi, directement, sans intermédiaire ni junior à qui le projet est refilé.
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
              Selon le type de projet, j'utilise plusieurs technologies : Next.js / React pour les sites
              sur mesure performants, Webflow pour les vitrines à éditer en CMS, Shopify pour le e-commerce. Je livre un
              code propre, hébergé sur Vercel ou des plateformes équivalentes pour la performance, et complété par des
              outils comme Web3Forms pour les formulaires, Google Search Console et Google Business Profile pour la
              visibilité.
            </p>
            <p>
              Mon objectif est toujours le même : choisir la bonne technologie pour le bon projet, sans complexifier
              inutilement.
            </p>

            <h2>Où je travaille</h2>
            <p>
              Je suis basé à Bordeaux et j'interviens principalement sur la <Link href="/creation-site-internet-gironde">Gironde</Link>
              et la métropole bordelaise. Je réalise aussi des projets à distance pour des clients ailleurs en
              France selon les besoins.
            </p>

            <h2>Ma vision</h2>
            <p>
              Un site internet n'est pas une fin en soi. C'est un outil pour rendre une activité plus visible, plus
              crédible, plus accessible. Tout mon travail est orienté autour de cette idée : que le site soit utile,
              clair pour le visiteur, et qu'il génère concrètement des demandes.
            </p>
          </div>
        </section>

        <CtaBlock title="Discutons de votre projet" />
      </PageShell>
    </>
  );
}

import Link from 'next/link';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Agence web Bordeaux | Création de sites internet professionnels | Prat Enzo',
  description:
    "Concepteur web indépendant à Bordeaux : sites vitrines, e-commerce Shopify et click & collect pensés pour les professionnels. L'alternative directe à la grosse agence.",
  path: '/agence-web-bordeaux'
});

const breadcrumb = [{ name: 'Agence web Bordeaux', path: '/agence-web-bordeaux' }];

export default function AgenceWebBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/agence-web-bordeaux', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Bordeaux · Agence web"
        h1={<><strong>Agence web</strong> à Bordeaux</>}
        sub="L'alternative directe à la grosse agence : un seul interlocuteur, de l'analyse à la mise en ligne, pour des sites professionnels qui durent et convertissent."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <p>
              «&nbsp;Agence web&nbsp;» à Bordeaux recouvre en réalité des structures très différentes&nbsp;: des grosses
              agences à plusieurs strates, des studios, et des indépendants. Prat Enzo, c'est cette dernière option&nbsp;:
              un interlocuteur unique qui prend en charge l'ensemble de la{' '}
              <Link href="/creation-site-internet-bordeaux">création de votre site internet à Bordeaux</Link>, sans les
              coûts ni les délais d'une organisation à multiples intermédiaires.
            </p>

            <h2>Pourquoi choisir Prat Enzo plutôt qu'une grosse agence ?</h2>
            <p>
              Beaucoup d'agences web bordelaises proposent des prestations très standardisées, avec des coûts gonflés
              par les multiples intermédiaires (chef de projet, designer, développeur, intégrateur, account manager…).
              Pour la majorité des projets de PME, artisans, indépendants et commerces, cette structure est inutile et
              coûteuse.
            </p>
            <p>
              Prat Enzo intervient directement, sans intermédiaires, avec une approche orientée résultat : analyse du
              besoin, design, intégration et mise en ligne. Le résultat est un site professionnel, livré dans de bons
              délais, avec une vraie réflexion sur la conversion et le SEO local. Pour comparer sereinement les deux
              modèles, voir le guide{' '}
              <Link href="/guides/freelance-vs-agence-web-bordeaux">freelance ou agence web à Bordeaux</Link>.
            </p>

            <h2>Approche</h2>
            <ul>
              <li>Échange direct, sans chef de projet entre nous</li>
              <li>Design pensé pour la conversion, pas pour le concours de beauté</li>
              <li>SEO local intégré dès la conception</li>
              <li>Site responsive et performant</li>
              <li>Code propre, maintenable, évolutif</li>
              <li>Mise en ligne accompagnée</li>
            </ul>

            <h2>Services proposés</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Création de site vitrine</Link></li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">Création de site e-commerce Shopify</Link></li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect</Link></li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte de site existant</Link></li>
              <li>SEO local et accompagnement à la visibilité Google</li>
              <li>Maintenance et évolutions selon les besoins</li>
            </ul>

            <h2>Pour qui ?</h2>
            <p>
              Artisans bordelais, indépendants, commerces locaux, entreprises de proximité et porteurs de projets qui
              veulent une présence en ligne professionnelle, sans le coût ni les délais d'une grosse agence.
            </p>

            <h2>Et les moyennes/grosses entreprises ?</h2>
            <p>
              Pour des projets plus complexes (intranet, applications métier, intégrations avancées), un travail
              collaboratif avec d'autres profils techniques peut être organisé. N'hésitez pas à
              <Link href="/contact"> en discuter</Link>.
            </p>
          </div>
        </section>

        <CtaBlock title="Discuter de votre projet web" />
      </PageShell>
    </>
  );
}

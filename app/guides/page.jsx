import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata, buildCollectionSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Guides création site web | Prat Enzo',
  description:
    "Guides pratiques sur la création de sites internet à Bordeaux : tarifs, choix entre site vitrine et e-commerce, Webflow vs Shopify, freelance vs agence, SEO local…",
  path: '/guides'
});

const breadcrumb = [{ name: 'Guides', path: '/guides' }];

const guides = [
  {
    slug: 'cout-site-internet-bordeaux',
    title: 'Combien coûte la création d\u2019un site internet à Bordeaux ?',
    intent: 'Comprendre le budget',
    desc: "Les facteurs qui influencent le prix d'un site web : type de site, pages, design, fonctionnalités."
  },
  {
    slug: 'site-vitrine-vs-page-facebook',
    title: 'Site vitrine ou page Facebook : que choisir pour un artisan ?',
    intent: 'Comparer les options',
    desc: "Pourquoi un site vitrine est un actif durable, là où une page Facebook reste dépendante d'une plateforme."
  },
  {
    slug: 'pourquoi-artisan-site-internet',
    title: 'Pourquoi un artisan à Bordeaux devrait avoir un site internet ?',
    intent: 'Convaincre',
    desc: 'Les bénéfices concrets : crédibilité, présentation, demandes qualifiées, visibilité Google.'
  },
  {
    slug: 'site-vitrine-vs-ecommerce',
    title: 'Site vitrine ou site e-commerce : comment choisir ?',
    intent: 'Choisir le bon type',
    desc: "Quand un site vitrine suffit, et quand il faut passer au e-commerce."
  },
  {
    slug: 'webflow-vs-shopify',
    title: 'Webflow ou Shopify : que choisir ?',
    intent: 'Choisir la techno',
    desc: 'Les forces et limites des deux plateformes selon votre projet.'
  },
  {
    slug: 'freelance-vs-agence-web-bordeaux',
    title: 'Freelance ou agence web à Bordeaux : comment choisir ?',
    intent: 'Comparer les prestataires',
    desc: 'Comment choisir entre une grosse agence et un prestataire indépendant.'
  },
  {
    slug: 'preparer-creation-site',
    title: 'Comment bien préparer la création de son site internet ?',
    intent: 'Préparer le projet',
    desc: 'Checklist des éléments à rassembler avant de démarrer un projet de site.'
  },
  {
    slug: 'site-fiche-google-business',
    title: 'Comment un site peut aider une fiche Google Business ?',
    intent: 'Comprendre le SEO local',
    desc: 'Le lien entre site web et fiche Google Business : la cohérence des informations.'
  },
  {
    slug: 'shopify-petites-entreprises',
    title: 'Shopify est-il adapté aux petites entreprises ?',
    intent: 'Évaluer Shopify',
    desc: 'Quand Shopify est pertinent pour une petite structure, et quand ce n\u2019est pas le cas.'
  },
  {
    slug: 'click-and-collect-pour-quels-commerces',
    title: 'Click & collect : pour quels commerces est-ce utile ?',
    intent: 'Évaluer le click & collect',
    desc: 'Les commerces où le click & collect a le plus d\u2019impact sur le service et la fidélisation.'
  }
];

export default function GuidesPage() {
  const collection = buildCollectionSchema({ path: '/guides', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[collection, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Ressources"
        h1={<>Guides sur la <strong>création de sites internet</strong></>}
        sub="Réponses aux questions les plus posées sur la création de sites internet à Bordeaux. Articles à venir, déjà thématisés par intention de recherche."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="related-links" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {guides.map(g => (
              <div key={g.slug} className="related-link" style={{ opacity: 0.85 }}>
                <span className="related-link__cat">{g.intent}</span>
                <span className="related-link__title">{g.title}</span>
                <span className="related-link__sub">{g.desc}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 8 }}>Article à venir</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--muted)' }}>
            En attendant la publication des articles, n'hésitez pas à
            <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}> poser votre question directement</Link>.
          </p>
        </section>

        <CtaBlock title="Une question sur votre projet ?" />
      </PageShell>
    </>
  );
}

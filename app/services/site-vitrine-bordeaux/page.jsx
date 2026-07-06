import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  buildFaqSchema
} from '@/app/lib/seo';
import { getServiceBySlug } from '@/app/lib/data/services';
import { realisations } from '@/app/lib/data/realisations';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import ServiceDetail from '@/app/components/shared/ServiceDetail';
import CtaBlock from '@/app/components/shared/CtaBlock';

const service = getServiceBySlug('site-vitrine-bordeaux');

export const metadata = buildMetadata({
  title: 'Création site vitrine Bordeaux | Sites pour artisans, indépendants et commerces',
  description: service.metaDescription,
  path: '/services/site-vitrine-bordeaux'
});

const breadcrumb = [
  { name: 'Services', path: '/services' },
  { name: 'Site vitrine Bordeaux', path: '/services/site-vitrine-bordeaux' }
];

const content = {
  intro: [
    "Un site vitrine professionnel est aujourd'hui le minimum pour exister en ligne à Bordeaux et en Gironde. La majorité des prospects qui découvrent une activité artisanale, un commerce local ou un indépendant passent d'abord par Google, les réseaux sociaux ou une fiche Google Business. Sans support clair à partager, vous perdez en crédibilité et en demandes.",
    "Le site vitrine Prat Enzo est conçu pour répondre à un seul objectif : transformer un prospect curieux en demande de contact qualifiée. Présentation de votre activité, mise en avant des prestations, photos des réalisations, zones d'intervention et formulaire de contact intégré.",
    "Vous travaillez directement avec le concepteur du site, sans intermédiaire ni junior. Un site sur mesure, développé avec une stack moderne rapide et bien référencée, pensé comme un investissement rentable plutôt qu'un site low-cost jetable."
  ],
  process: [
    "Le projet démarre par une analyse de votre activité, vos cibles et vos objectifs. La structure du site est ensuite définie, les contenus organisés, le design créé puis intégré, et le tout mis en ligne après validation.",
    "Aucune compétence technique n'est demandée de votre côté. Vous fournissez les éléments principaux (services, photos, coordonnées) et le site est construit autour."
  ],
  local: [
    "Bordeaux, Mérignac, Pessac, Talence, Bègles, Cenon, Lormont, Floirac, Gradignan, Villenave-d'Ornon, Libourne, Arcachon, Bassin d'Arcachon : Prat Enzo accompagne les professionnels de toute la Gironde. Le site peut être structuré pour ressortir sur des requêtes locales spécifiques (par exemple « plombier Mérignac » ou « couvreur Bordeaux »).",
    "Pour aller plus loin sur la visibilité locale, le site peut être complété par une fiche Google Business cohérente, des contenus orientés zones d'intervention et un maillage interne adapté."
  ],
  faq: [
    {
      q: 'Combien de pages contient un site vitrine ?',
      a: "Le nombre de pages dépend de votre activité. Une structure classique comprend une page d'accueil, une page services, une page réalisations et une page contact. Des pages supplémentaires peuvent être ajoutées selon le besoin (zones, équipe, secteurs)."
    },
    {
      q: 'Est-ce que je peux modifier le site moi-même après livraison ?',
      a: "Selon la solution technique retenue, des modifications simples peuvent être réalisées de votre côté. Sinon, les modifications peuvent être effectuées en supplément à la demande."
    },
    {
      q: 'Combien coûte la création d\u2019un site vitrine ?',
      a: "Un site vitrine professionnel conçu pour générer des demandes représente un investissement de plusieurs milliers d'euros, pas un site à quelques centaines d'euros. Le tarif exact dépend du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation gratuite est proposée après analyse du projet."
    }
  ],
  relatedServices: [
    {
      path: '/services/site-ecommerce-shopify-bordeaux',
      title: 'E-commerce Shopify Bordeaux',
      sub: 'Pour vendre vos produits en ligne avec une plateforme professionnelle.'
    },
    {
      path: '/services/refonte-site-internet-bordeaux',
      title: 'Refonte de site internet',
      sub: 'Si vous avez déjà un site mais qu\u2019il ne convertit plus.'
    },
    {
      path: '/site-internet-artisan-bordeaux',
      title: 'Site internet artisan Bordeaux',
      sub: 'Pour les couvreurs, plombiers, électriciens, peintres, menuisiers.'
    }
  ],
  relatedRealisations: realisations.filter(r => r.serviceSlug === 'site-vitrine-bordeaux').slice(0, 3)
};

export default function SiteVitrineBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/services/site-vitrine-bordeaux', title: metadata.title, description: metadata.description });
  const svc = buildServiceSchema({
    name: 'Création de site vitrine à Bordeaux',
    description: service.metaDescription,
    slug: 'site-vitrine-bordeaux'
  });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = content.faq ? buildFaqSchema(content.faq) : null;

  return (
    <>
      <JsonLd data={[wp, svc, bc, faq].filter(Boolean)} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Service · Site vitrine"
        h1={<><strong>Création de site vitrine</strong> à Bordeaux</>}
        sub={service.tagline + '. ' + service.description}
      >
        <ServiceDetail service={service} content={content} />
        <CtaBlock title="Un site vitrine pour booster votre activité" />
      </PageShell>
    </>
  );
}

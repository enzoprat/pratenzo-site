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

const service = getServiceBySlug('site-ecommerce-shopify-bordeaux');

export const metadata = buildMetadata({
  title: 'Création site Shopify Bordeaux | Boutique e-commerce professionnelle',
  description: service.metaDescription,
  path: '/services/site-ecommerce-shopify-bordeaux'
});

const breadcrumb = [
  { name: 'Services', path: '/services' },
  { name: 'Shopify Bordeaux', path: '/services/site-ecommerce-shopify-bordeaux' }
];

const content = {
  intro: [
    "Shopify est aujourd'hui la plateforme de référence pour vendre en ligne avec une fiabilité industrielle. Paiements sécurisés, gestion du stock, application mobile, infrastructure performante : tout ce dont a besoin une marque ou un commerce pour développer son activité e-commerce, sans dépendre d'un développeur pour chaque modification.",
    "L'objectif d'une boutique Shopify Prat Enzo n'est pas seulement d'être en ligne, mais de convertir : pages produits soignées, parcours d'achat optimisé, mise en valeur de la marque, expérience mobile fluide.",
    "Vous travaillez directement avec le concepteur de votre boutique, sans intermédiaire. Un e-commerce sur mesure conçu comme un outil de vente rentable, pas un template générique posé à la va-vite."
  ],
  process: [
    "Le projet démarre par une analyse de votre catalogue, votre identité de marque et vos objectifs commerciaux. La structure de la boutique est ensuite définie : collections, taxonomie produit, navigation, parcours d'achat.",
    "Le design est créé sur mesure, intégré dans Shopify, et la boutique est testée avant ouverture. Vous gardez la main sur le catalogue grâce à l'interface Shopify, accessible et intuitive."
  ],
  local: [
    "Pour les marques basées à Bordeaux ou en Gironde, une boutique Shopify peut être complétée par une vitrine locale (page contact, click & collect, retrait en boutique) si vous avez une présence physique.",
    "Le SEO local Shopify est tout à fait possible : balises adaptées, contenus orientés zone, fiche Google Business cohérente avec la marque."
  ],
  faq: [
    {
      q: 'Pourquoi choisir Shopify plutôt qu\u2019une solution gratuite ?',
      a: "Shopify offre une fiabilité, des paiements sécurisés, une infrastructure performante et une gestion du stock professionnelle. Les solutions gratuites montrent leurs limites dès que la boutique grandit."
    },
    {
      q: 'Combien de produits puis-je vendre ?',
      a: "Le nombre de produits n'est pas limité techniquement. Shopify gère sans problème des catalogues de quelques dizaines à plusieurs milliers de produits."
    },
    {
      q: 'Est-ce que je gère mes commandes moi-même ?',
      a: "Oui, l'interface Shopify vous permet de gérer commandes, stock, clients et facturation de manière autonome après la livraison."
    }
  ],
  relatedServices: [
    {
      path: '/services/click-and-collect-bordeaux',
      title: 'Click & collect',
      sub: 'Pour permettre à vos clients de commander en ligne et récupérer en boutique.'
    },
    {
      path: '/services/site-vitrine-bordeaux',
      title: 'Site vitrine',
      sub: 'Pour présenter votre activité sans vendre directement en ligne.'
    }
  ],
  relatedRealisations: realisations.filter(r => r.serviceSlug === 'site-ecommerce-shopify-bordeaux').slice(0, 3)
};

export default function SiteShopifyBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/services/site-ecommerce-shopify-bordeaux', title: metadata.title, description: metadata.description });
  const svc = buildServiceSchema({
    name: 'Création de site Shopify à Bordeaux',
    description: service.metaDescription,
    slug: 'site-ecommerce-shopify-bordeaux'
  });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(content.faq);

  return (
    <>
      <JsonLd data={[wp, svc, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Service · E-commerce Shopify"
        h1={<><strong>Création de site Shopify</strong> à Bordeaux</>}
        sub={service.description}
      >
        <ServiceDetail service={service} content={content} />
        <CtaBlock title="Lancer votre boutique Shopify" />
      </PageShell>
    </>
  );
}

import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  buildFaqSchema
} from '@/app/lib/seo';
import { getServiceBySlug } from '@/app/lib/data/services';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import ServiceDetail from '@/app/components/shared/ServiceDetail';
import CtaBlock from '@/app/components/shared/CtaBlock';

const service = getServiceBySlug('click-and-collect-bordeaux');

export const metadata = buildMetadata({
  title: 'Création site click & collect Bordeaux | Commande en ligne, retrait en boutique',
  description: service.metaDescription,
  path: '/services/click-and-collect-bordeaux'
});

const breadcrumb = [
  { name: 'Services', path: '/services' },
  { name: 'Click & collect Bordeaux', path: '/services/click-and-collect-bordeaux' }
];

const content = {
  intro: [
    "Le click & collect est devenu une attente standard pour de nombreux commerces de proximité. Boulangeries, primeurs, restaurants, traiteurs, fleuristes : permettre à vos clients de commander en ligne et de récupérer sur place fluidifie votre service, réduit les files d'attente et fidélise.",
    "Une solution click & collect Prat Enzo est conçue pour être simple à utiliser pour le client (mobile fluide, parcours rapide) et simple à gérer pour vous (notifications, gestion claire des commandes)."
  ],
  process: [
    "Le projet démarre par l'analyse de votre catalogue produits, vos horaires de retrait, vos contraintes (paiement en ligne ou sur place, plages de retrait, gestion du stock).",
    "La solution technique est ensuite choisie selon le besoin : un site sur mesure, une boutique Shopify avec retrait, ou une page de commande légère selon le volume."
  ],
  local: [
    "Pour un commerce local à Bordeaux ou en Gironde, le click & collect est aussi un levier de visibilité : une page web claire améliore le référencement local, complète une fiche Google Business et offre un point d'entrée à des nouveaux clients qui cherchent en ligne.",
    "La page peut mentionner explicitement votre quartier, votre rue ou votre zone pour ressortir sur des requêtes hyper-locales (par exemple « boulangerie click and collect Bordeaux centre »)."
  ],
  faq: [
    {
      q: 'Quels types de commerce peuvent utiliser le click & collect ?',
      a: "Tous les commerces dont les produits peuvent être préparés à l'avance et récupérés sur place : boulangeries, primeurs, restaurants, traiteurs, fleuristes, librairies, magasins de prêt-à-porter, etc."
    },
    {
      q: 'Faut-il accepter le paiement en ligne ?',
      a: "Non, le paiement peut être réalisé en boutique au moment du retrait. La commande en ligne sert alors à réserver les produits."
    },
    {
      q: 'Peut-on gérer plusieurs créneaux de retrait ?',
      a: "Oui, le système peut être configuré avec des créneaux horaires précis, des limites de commandes par créneau et des plages d'indisponibilité."
    }
  ],
  relatedServices: [
    {
      path: '/services/site-ecommerce-shopify-bordeaux',
      title: 'E-commerce Shopify',
      sub: 'Si vous voulez aussi vendre en ligne avec livraison et stock complet.'
    },
    {
      path: '/services/site-vitrine-bordeaux',
      title: 'Site vitrine',
      sub: 'Si vous avez besoin d\u2019abord d\u2019une présentation claire avant le e-commerce.'
    }
  ],
  relatedRealisations: []
};

export default function ClickAndCollectBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/services/click-and-collect-bordeaux', title: metadata.title, description: metadata.description });
  const svc = buildServiceSchema({
    name: 'Création de site click & collect à Bordeaux',
    description: service.metaDescription,
    slug: 'click-and-collect-bordeaux'
  });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = content.faq ? buildFaqSchema(content.faq) : null;

  return (
    <>
      <JsonLd data={[wp, svc, bc, faq].filter(Boolean)} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Service · Click & collect"
        h1={<>Création de site <strong>click & collect</strong> à Bordeaux</>}
        sub={service.description}
      >
        <ServiceDetail service={service} content={content} />
        <CtaBlock title="Mettre en place votre click & collect" />
      </PageShell>
    </>
  );
}

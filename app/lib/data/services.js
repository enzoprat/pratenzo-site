/* Services Prat Enzo — données partagées (utilisées par les pages services dédiées) */

export const services = [
  {
    slug: 'site-vitrine-bordeaux',
    title: 'Site vitrine Bordeaux',
    shortTitle: 'Site vitrine',
    h1: 'Création de site vitrine à Bordeaux',
    tagline: 'Votre activité présentée avec clarté',
    description:
      "Un site clair, moderne et professionnel pour présenter votre entreprise, vos services, vos réalisations et faciliter les demandes de contact. La référence pour les artisans, indépendants et commerces de Bordeaux et de la Gironde.",
    metaDescription:
      "Création de site vitrine professionnel à Bordeaux : présentation de votre activité, services, photos, formulaire de contact et SEO local. Pensé pour artisans, indépendants et entreprises locales.",
    forWho:
      "Artisans (couvreurs, plombiers, électriciens, peintres, menuisiers), indépendants, prestataires et commerces locaux à Bordeaux et en Gironde.",
    items: [
      "Présentation de l'entreprise",
      'Présentation des services',
      'Photos des prestations',
      "Zones d'intervention",
      'Formulaire de contact',
      "Boutons d'appel ou de contact",
      'Site responsive mobile / tablette / desktop',
      'Optimisation SEO de base'
    ],
    perks: [
      { label: 'Mobile first' },
      { label: 'Formulaire email' },
      { label: 'SEO local' }
    ]
  },
  {
    slug: 'site-ecommerce-shopify-bordeaux',
    title: 'Site Shopify Bordeaux',
    shortTitle: 'E-commerce Shopify',
    h1: 'Création de site e-commerce Shopify à Bordeaux',
    tagline: 'Une boutique professionnelle, prête à vendre',
    description:
      "Une boutique en ligne professionnelle pour vendre vos produits, structurer votre catalogue et offrir une expérience d'achat fluide. Shopify est la plateforme de référence pour la fiabilité, les paiements et l'évolution du catalogue.",
    metaDescription:
      "Création de boutique Shopify professionnelle à Bordeaux. Catalogue structuré, parcours d'achat optimisé, design responsive et mise en valeur de la marque.",
    forWho:
      "Marques, créateurs, vendeurs en ligne et commerces qui veulent vendre en ligne avec une plateforme fiable.",
    items: [
      'Création Shopify complète',
      'Pages produits soignées',
      'Collections organisées',
      'Tunnel de commande optimisé',
      'Design responsive',
      'Mise en valeur de la marque',
      'Structure catalogue'
    ],
    perks: [
      { label: 'Paiements sécurisés' },
      { label: 'Design premium' },
      { label: 'Mobile first' }
    ]
  },
  {
    slug: 'click-and-collect-bordeaux',
    title: 'Click & collect Bordeaux',
    shortTitle: 'Click & collect',
    h1: 'Création de site click & collect à Bordeaux',
    tagline: 'Commande en ligne, retrait sur place',
    description:
      "Une solution pratique pour permettre à vos clients de commander en ligne et récupérer sur place. Idéal pour les commerces de proximité, boulangeries, primeurs, restaurants ou points de vente qui veulent fluidifier leur service.",
    metaDescription:
      "Création de site click & collect à Bordeaux. Commande en ligne, retrait sur place, catalogue produits et expérience mobile soignée pour les commerces locaux.",
    forWho:
      "Commerces de proximité, boulangeries, primeurs, restaurants, traiteurs et points de vente locaux qui veulent fluidifier leur service.",
    items: [
      'Catalogue produits structuré',
      'Commande en ligne fluide',
      'Organisation des catégories',
      'Expérience mobile soignée',
      'Formulaire ou tunnel adapté',
      'Mise en place selon le besoin'
    ],
    perks: [
      { label: 'Commandes simples' },
      { label: 'Optimisé mobile' },
      { label: 'Notifications email' }
    ]
  },
  {
    slug: 'refonte-site-internet-bordeaux',
    title: 'Refonte site Bordeaux',
    shortTitle: 'Refonte de site',
    h1: 'Refonte de site internet à Bordeaux',
    tagline: 'Moderniser votre site existant',
    description:
      "Votre site actuel ne reflète plus votre activité, n'est pas responsive ou n'apparaît pas dans Google ? La refonte permet de moderniser le design, repenser la structure, améliorer les performances et préparer le SEO pour générer plus de demandes.",
    metaDescription:
      "Refonte de site internet à Bordeaux : design moderne, version mobile, performances et SEO préservé. Sans casser vos positions Google ni perdre vos contenus.",
    forWho:
      "Entreprises, artisans, commerces et indépendants qui ont un site existant à moderniser ou à repenser.",
    items: [
      'Audit du site existant',
      'Nouvelle direction artistique',
      'Nouvelle structure et arborescence',
      'Conservation des URLs et redirections SEO',
      'Migration des contenus',
      'Optimisation responsive et performances',
      'Nouvelle base SEO'
    ],
    perks: [
      { label: 'Redirections SEO' },
      { label: 'Design moderne' },
      { label: 'Mobile first' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}

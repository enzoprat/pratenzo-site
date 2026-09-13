/* Réalisations Prat Enzo — données partagées */

export const realisations = [
  {
    slug: 'brunch-area',
    name: 'Brunch Area',
    url: 'https://bruncharea.fr',
    category: 'Site restaurant · SEO local',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site pour une adresse de brunch à Pessac, pensé dès la conception pour le référencement local — positionné en tête de Google sur les recherches de brunch autour de Bordeaux, sans publicité.",
    detail: {
      context:
        "Brunch Area, adresse de brunch à Pessac (produits frais, recettes maison), voulait exister sur Google face à une clientèle qui cherche où bruncher autour de Bordeaux le week-end.",
      goal:
        "Être trouvé rapidement sur les recherches locales de brunch et de restauration, et transformer ces recherches en visites.",
      problem:
        "Un nouveau site n'a aucune visibilité tant qu'il n'est pas indexé puis positionné, et la concurrence locale sur le brunch autour de Bordeaux est forte.",
      solution:
        "Architecture SEO locale pensée dès la conception : contenus ciblant les intentions locales (brunch à Pessac, Talence, Mérignac, Villenave-d'Ornon, Bordeaux), balisage propre, base technique rapide et cohérence avec la fiche Google.",
      structure: [
        "Hero avec proposition claire (brunch, produits frais)",
        'La formule et les recettes maison',
        'Infos pratiques et horaires',
        "Accès et localisation (Pessac / Bordeaux)",
        'Contact et réservation'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'SEO local intégré dès la conception',
        'Contenus ciblant les recherches locales de brunch',
        'Base technique rapide (Core Web Vitals)',
        'Cohérence avec la fiche Google Business',
        'Indexation accompagnée'
      ],
      art: 'Direction chaleureuse et gourmande, palette douce, mise en valeur des produits.'
    },
    results: {
      accent: '#6E5BA8',
      intro:
        "Après indexation, Brunch Area s'est positionné en tête de Google sur de nombreuses recherches locales liées au brunch et à la restauration autour de Bordeaux — uniquement grâce au référencement naturel, sans aucune publicité en ligne. Plusieurs requêtes ont atteint les positions 1 à 2 dans les 48 heures suivant leur indexation.",
      metrics: [
        { value: '2,8', label: 'position moyenne' },
        { value: '48 h', label: 'après indexation' },
        { value: '24 · 792', label: 'clics · impressions' }
      ],
      proof: {
        src: '/results/gsc-bruncharea.webp', w: 1500, h: 544,
        alt: 'Google Search Console de Brunch Area : position moyenne 2,8, 24 clics, 792 impressions',
        caption: 'Preuve : Google Search Console — position moyenne 2,8 sur la période.'
      },
      queries: [
        ['brunch autour de bordeaux', '1,0'],
        ['brunch dimanche matin autour de moi', '1,0'],
        ['brunch talence', '1,0'],
        ['restaurant ouvert le dimanche pessac', '1,0'],
        ["brunch villenave-d'ornon", '1,1'],
        ['brunch mérignac', '1,2'],
        ['brunch pessac', '1,3'],
        ['brunch pessac centre', '1,3'],
        ['brunch autour de moi', '1,3'],
        ['meilleur brunch mérignac', '1,7'],
        ['restaurants pessac centre', '1,8'],
        ['restau pessac', '2,0']
      ]
    }
  },
  {
    slug: 'nils-bouchilloux',
    name: 'Nils Bouchilloux',
    url: 'https://www.nilsbouchilloux.fr',
    category: 'Site vitrine',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine professionnel pour présenter une activité, structurer les services et faciliter la prise de contact.",
    detail: {
      context:
        "Nils Bouchilloux souhaitait un site vitrine moderne pour présenter son activité de coach professionnel et faciliter la prise de contact des prospects.",
      goal:
        "Créer un support professionnel pour gagner en crédibilité, présenter clairement les prestations et générer des demandes qualifiées.",
      problem:
        "Avant le site, l'activité reposait essentiellement sur les réseaux sociaux. Difficile pour un prospect de se faire une idée complète, et peu de canaux pour le contacter directement.",
      solution:
        "Mise en place d'un site vitrine clair, soigné, avec une page d'accueil orientée présentation, des sections pour les services et les références, ainsi qu'un formulaire de contact intégré.",
      structure: [
        "Hero avec présentation directe",
        "Section services / prestations",
        "Galerie réalisations",
        "Présentation personnelle",
        "Formulaire de contact",
        "Footer avec coordonnées et liens"
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Formulaire de contact intégré',
        "Boutons d'appel direct",
        'Optimisation SEO de base',
        'Mise en ligne accompagnée'
      ],
      art: 'Direction artistique sobre et premium, palette claire, hiérarchie typographique soignée.'
    }
  },
  {
    slug: 'castagne-couverture',
    name: 'Castagné Couverture',
    url: 'https://www.castagnecouverture.fr',
    category: 'Site vitrine artisan',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine pour une entreprise de couverture, conçu pour présenter les prestations, les zones d'intervention et générer des demandes.",
    detail: {
      context:
        "Castagné Couverture, entreprise spécialisée en couverture et zinguerie, souhaitait un site vitrine professionnel pour rassurer ses prospects avant le premier appel.",
      goal:
        "Présenter clairement l'activité, les prestations et les zones d'intervention pour générer des demandes de devis qualifiées.",
      problem:
        "Sans site, l'entreprise dépendait du bouche-à-oreille et n'avait aucun support à partager pour des nouveaux prospects qui cherchent un couvreur en ligne.",
      solution:
        "Site vitrine artisan structuré : présentation des prestations, photos des chantiers réalisés, zones d'intervention claires et formulaire de demande de devis.",
      structure: [
        "Hero avec proposition de valeur claire",
        'Liste des prestations (couverture, zinguerie, isolation)',
        'Galerie chantiers réalisés',
        "Zones d'intervention",
        'Formulaire de demande de devis',
        'Footer avec coordonnées'
      ],
      features: [
        'Mise en avant des photos avant/après',
        'Boutons appel direct depuis mobile',
        'Optimisation SEO local',
        'Site responsive'
      ],
      art: 'Style artisan moderne, photos mises en valeur, palette inspirant la confiance.'
    }
  },
  {
    slug: 'adjadj-compagnie',
    name: 'ADJADJ Compagnie',
    url: 'https://adjadjcompagnie.fr',
    category: 'E-commerce / B2B',
    serviceSlug: 'site-ecommerce-shopify-bordeaux',
    description:
      "Site e-commerce professionnel pour une activité de grossiste, avec catalogue structuré et expérience adaptée aux clients professionnels.",
    detail: {
      context:
        "ADJADJ Compagnie, grossiste spécialisé, avait besoin d'une boutique en ligne professionnelle adaptée à ses clients B2B.",
      goal:
        "Permettre aux clients professionnels de commander en ligne, structurer le catalogue et offrir une expérience d'achat fluide.",
      problem:
        "Les commandes passaient par téléphone ou email, ce qui ralentissait le processus et limitait la croissance.",
      solution:
        "Création d'une boutique Shopify professionnelle avec catalogue structuré, pages produits soignées, parcours d'achat optimisé et identité visuelle premium.",
      structure: [
        'Hero avec mise en avant des collections',
        'Catalogue produits structuré',
        'Pages produits détaillées',
        'Tunnel de commande',
        'Espace client',
        'Footer avec informations légales'
      ],
      features: [
        'Boutique Shopify complète',
        'Pages produits soignées',
        'Parcours d\u2019achat optimisé',
        'Design responsive',
        'Mise en valeur de la marque'
      ],
      art: "Direction artistique épurée, mise en valeur produit, navigation B2B intuitive."
    }
  },
  {
    slug: 'starsonstage',
    name: 'Stars On Stage',
    url: 'https://www.starsonstage.fr',
    category: 'Site vitrine événementiel',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site de présentation pour une activité événementielle, pensé pour valoriser l'univers, les prestations et la crédibilité du projet.",
    detail: {
      context:
        "Stars On Stage avait besoin d'un site de présentation pour son activité événementielle.",
      goal:
        "Valoriser l'univers de la marque, présenter les prestations et inspirer confiance.",
      problem:
        "Pas de support de présentation officiel pour partager avec des partenaires ou clients potentiels.",
      solution:
        "Site vitrine premium avec direction artistique soignée, sections claires sur les prestations et formulaire de contact.",
      structure: [
        "Hero immersif",
        'Présentation de l\u2019univers',
        'Sections prestations',
        'Galerie événements',
        'Formulaire de contact'
      ],
      features: [
        'Site responsive',
        'Animations légères',
        'Formulaire de contact intégré'
      ],
      art: 'Univers visuel marqué, photos événementielles, ambiance premium.'
    }
  },
  {
    slug: 'couverture-gironde',
    name: 'Couverture Gironde',
    url: 'https://www.couverturegironde.fr',
    category: 'Site vitrine SEO local',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine orienté visibilité locale, conçu pour présenter les services, rassurer les prospects et renforcer la présence en ligne.",
    detail: {
      context:
        "Couverture Gironde, entreprise de couverture intervenant sur tout le département, voulait renforcer sa visibilité en ligne dans la zone.",
      goal:
        "Apparaître sur les requêtes locales de couverture en Gironde et générer des demandes de devis.",
      problem:
        "L'entreprise avait peu de présence en ligne et dépendait du bouche-à-oreille local.",
      solution:
        "Site vitrine artisan optimisé pour le SEO local : structure claire par services, mention explicite de la zone Gironde, photos chantiers et formulaire de devis.",
      structure: [
        "Hero avec mention claire de la zone d'intervention",
        'Sections par prestation',
        'Photos chantiers Gironde',
        'Formulaire de devis',
        'Coordonnées et zones desservies'
      ],
      features: [
        'Optimisation SEO local Gironde',
        'Boutons appel direct',
        'Mise en avant des prestations',
        'Site responsive'
      ],
      art: 'Direction artistique artisan moderne, photos chantiers, palette professionnelle.'
    }
  },
  {
    slug: 'westerfield-london',
    name: 'Westerfield London',
    url: 'https://www.westerfieldlondon.com',
    category: 'Site vitrine premium',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site professionnel avec direction artistique soignée, pensé pour présenter une marque et ses services avec crédibilité.",
    detail: {
      context:
        "Westerfield London souhaitait un site de présentation premium pour incarner sa marque haut de gamme.",
      goal:
        "Présenter la marque, ses services et inspirer confiance auprès d'une clientèle exigeante.",
      problem:
        "Aucun site officiel ne reflétait le positionnement haut de gamme de la marque.",
      solution:
        "Site vitrine premium avec direction artistique forte, mise en page éditoriale, et sections dédiées à l'univers et aux prestations.",
      structure: [
        'Hero éditorial',
        'Présentation de la marque',
        'Sections prestations',
        'Galerie / cas clients',
        'Contact'
      ],
      features: [
        'Direction artistique premium',
        'Animations subtiles',
        'Site responsive'
      ],
      art: 'Esthétique haut de gamme, typographie éditoriale, photos mises en valeur.'
    }
  },
  {
    slug: 'sm-couverture-pau',
    name: 'SM Couverture Pau',
    url: 'https://www.smcouverturepau.fr',
    category: 'Site vitrine artisan',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine pour une entreprise de couverture, structuré pour présenter l'activité, les prestations et les zones d'intervention.",
    detail: {
      context:
        "SM Couverture, basée à Pau, voulait un site vitrine professionnel pour présenter son activité de couverture.",
      goal:
        "Donner une image professionnelle, faciliter la prise de contact et générer des demandes locales.",
      problem:
        "Pas de présence en ligne structurée, alors que beaucoup de prospects cherchent un couvreur sur Google.",
      solution:
        "Site vitrine artisan clair avec présentation des prestations, photos chantiers, zones d'intervention et formulaire de demande de devis.",
      structure: [
        "Hero avec proposition de valeur",
        'Prestations',
        'Photos chantiers',
        'Zones desservies',
        'Formulaire de devis'
      ],
      features: [
        'Boutons appel direct mobile',
        'Site responsive',
        'Optimisation SEO local'
      ],
      art: 'Style artisan moderne, photos chantiers mises en valeur.'
    }
  }
];

export function getRealisationBySlug(slug) {
  return realisations.find(r => r.slug === slug);
}

export function getRelatedRealisations(slug, count = 2) {
  const current = getRealisationBySlug(slug);
  if (!current) return [];
  return realisations
    .filter(r => r.slug !== slug && r.serviceSlug === current.serviceSlug)
    .slice(0, count);
}

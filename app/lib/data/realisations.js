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
    category: 'Site vitrine · GEO',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine pour Nils Bouchilloux, professeur de golf à Bordeaux (diplômé BPJEPS) : présenter les cours, l'expertise et faciliter la prise de contact — travaillé pour le SEO local et la compréhension par les moteurs IA (GEO).",
    detail: {
      context:
        "Nils Bouchilloux, enseignant de golf diplômé BPJEPS à Bordeaux, souhaitait un site pour présenter ses cours (individuels, collectifs, travail au radar) et faciliter la prise de contact.",
      goal:
        "Gagner en visibilité et en crédibilité sur les recherches liées aux cours de golf à Bordeaux, et être clairement identifiable par les moteurs de recherche comme par les moteurs de réponse IA.",
      problem:
        "Avant le site, l'activité reposait surtout sur le bouche-à-oreille et les réseaux ; difficile pour un prospect — ou un moteur IA — de comprendre précisément l'offre, l'expertise et la zone.",
      solution:
        "Site vitrine structuré autour de l'entité « Nils Bouchilloux — professeur de golf à Bordeaux » : mise en avant de l'expertise (BPJEPS, compétitions PGA Grand Sud-Ouest), des cours et parcours (Mérignac, Cestas, Margaux), avec contenus et données structurées pensés pour le SEO local et le GEO.",
      structure: [
        "Hero — professeur de golf à Bordeaux",
        "Cours individuels et collectifs",
        "Travail au radar & parcours",
        "Expertise et parcours (BPJEPS)",
        "Zone d'intervention (Bordeaux, Mérignac…)",
        "Formulaire de contact"
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'SEO local (cours de golf Bordeaux)',
        "Structuration d'entité pour les moteurs IA (GEO)",
        'Contenus citables',
        'Formulaire de contact',
        'Mise en ligne accompagnée'
      ],
      art: 'Direction sobre et premium, univers golf (vert profond, crème), photos mises en valeur.'
    },
    results: {
      accent: '#17643F',
      intro:
        "Le travail réalisé sur le site, les contenus et l'entité Nils Bouchilloux permet aux moteurs de réponse IA de mieux comprendre son activité, sa localisation et son expertise. Résultat observé : pour la recherche « meilleur prof de golf Bordeaux », Nils Bouchilloux apparaît en première position dans une réponse ChatGPT.",
      metrics: [
        { value: '#1', label: 'cité par ChatGPT' },
        { value: 'GEO', label: 'moteurs de réponse IA' },
        { value: 'Bordeaux', label: 'recherche locale' }
      ],
      noadsText: "Cette visibilité est obtenue par le travail SEO / GEO sur l'entité — pas par de la publicité.",
      proofKind: 'chat',
      proof: {
        src: '/results/nils-chatgpt.webp', w: 1300, h: 460,
        alt: 'Réponse ChatGPT à « meilleur prof de golf bordeaux » citant en premier Nils Bouchilloux',
        bar: 'ChatGPT — réponse réelle observée',
        caption: "Preuve : réponse ChatGPT observée pour « meilleur prof de golf Bordeaux ». Formulation contextualisée — il ne s'agit pas d'un classement officiel."
      }
    }
  },
  {
    slug: 'master-boat-charter',
    name: 'Master Boat Charter',
    url: 'https://www.masterboatcharter.com',
    category: 'Site charter · SEO',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site pour Master Boat Charter, charter privé et excursions en bateau aux Seychelles (La Digue) — nouveau domaine qui génère déjà des demandes.",
    detail: {
      context:
        "Master Boat Charter, entreprise de charter privé et d'excursions en bateau basée à La Digue, aux Seychelles.",
      goal:
        "Lancer un nouveau domaine et générer rapidement des demandes qualifiées auprès d'une clientèle internationale.",
      problem:
        "Un nom de domaine neuf part de zéro : aucune autorité, aucune visibilité, tout est à construire.",
      solution:
        "Site premium à l'univers maritime, optimisé dès la conception pour le référencement et la conversion (demande de charter), pensé pour une clientèle internationale.",
      structure: [
        'Hero maritime immersif',
        'Excursions & charters privés',
        "La flotte / l'expérience",
        'Galerie',
        'Demande de réservation'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'SEO intégré dès la conception',
        'Base technique rapide',
        'Formulaire de demande',
        'Univers premium'
      ],
      art: 'Direction premium maritime : turquoise, bleu profond, blanc.'
    },
    results: {
      accent: '#0E7A90',
      intro:
        "Un mois après le lancement du nouveau domaine, Master Boat Charter affiche un CTR organique de 6,8 % et a déjà permis de convertir 5 leads — un signal fort pour un site sans historique, obtenu sans publicité.",
      metrics: [
        { value: '1 mois', label: 'depuis le lancement' },
        { value: '6,8 %', label: 'CTR organique' },
        { value: '5', label: 'leads convertis' }
      ],
      proof: {
        src: '/results/gsc-masterboat.webp', w: 1500, h: 600,
        alt: 'Google Search Console de Master Boat Charter : CTR organique 6,8 %, 49 clics, 720 impressions sur un mois',
        caption: 'Preuve : Google Search Console — CTR organique 6,8 % sur le 1er mois.'
      }
    }
  },
  {
    slug: 'adu-pieces-auto',
    name: 'ADU Pièces Auto',
    url: 'https://adupiecesauto.fr',
    category: 'Site vente · SEO local',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site pour ADU Pièces Auto (Labastide-Saint-Pierre) : vente de pièces automobiles, consommables et outillage pour professionnels et particuliers — positionné sur Google en deux mois.",
    detail: {
      context:
        "ADU Pièces Auto, vente de pièces automobiles, consommables et outillage pour professionnels et particuliers à Labastide-Saint-Pierre (Tarn-et-Garonne).",
      goal:
        "Capter les recherches commerciales de pièces auto dans la région et générer des demandes.",
      problem:
        "Les recherches de pièces auto sont très concurrentielles et à forte intention d'achat : sans référencement, impossible d'exister.",
      solution:
        "Site rapide structuré autour du catalogue et de l'intention commerciale, optimisé pour le SEO local et la conversion (demande de pièce, livraison express).",
      structure: [
        'Hero — pièces auto & outillage',
        'Familles de produits / catalogue',
        'Livraison express',
        'Demande de pièce',
        'Contact'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'SEO transactionnel & local',
        'Base technique rapide',
        'Demande de pièce en ligne',
        'Livraison express mise en avant'
      ],
      art: 'Direction sombre et automobile, accents rouges, lisibilité forte.'
    },
    results: {
      accent: '#E10600',
      intro:
        "Sur des recherches directement commerciales liées à la vente de pièces automobiles dans sa région, ADU Pièces Auto a atteint une position moyenne de 3,9 sur Google en deux mois — sans publicité.",
      metrics: [
        { value: '3,9', label: 'position moyenne' },
        { value: '2 mois', label: 'de travail SEO' },
        { value: '89 · 2,98 k', label: 'clics · impressions' }
      ],
      proof: {
        src: '/results/gsc-adu.webp', w: 1500, h: 736,
        alt: "Google Search Console d'ADU Pièces Auto : position moyenne 3,9, 89 clics, 2,98 k impressions sur deux mois",
        caption: 'Preuve : Google Search Console — position moyenne 3,9 sur environ deux mois.'
      }
    }
  },
  {
    slug: 'bona-bordeaux',
    name: 'Bona',
    url: 'https://bonabordeaux.fr',
    category: 'Site restaurant',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site pour Bona, brasserie à Bordeaux (cuisine 100 % faite maison et halal), pensé pour présenter la carte, l'histoire et faciliter la réservation.",
    detail: {
      context:
        "Bona, brasserie au cœur de Bordeaux (rue Sanche de Pomiers), propose une cuisine 100 % faite maison et halal à partir de produits frais, ouverte du vendredi au dimanche soir.",
      goal:
        "Donner une vitrine à la hauteur de la cuisine : présenter l'univers, la carte et déclencher des réservations.",
      problem:
        "Une bonne table reste invisible sans un site clair qui inspire confiance et donne envie avant même de venir.",
      solution:
        "Site vitrine immersif : présentation de l'histoire, mise en avant des signatures et de la carte, galerie, informations pratiques et réservation.",
      structure: [
        'Hero — brasserie à Bordeaux',
        'Histoire de la maison',
        'Les signatures & la carte',
        'Galerie',
        'Infos & horaires',
        'Réserver'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Galerie photos',
        'Réservation',
        'SEO local Bordeaux',
        'Base technique rapide'
      ],
      art: 'Direction élégante et gourmande, ambiance chaleureuse.'
    }
  },
  {
    slug: 'casanova-conciergerie',
    name: 'Casa Nova',
    url: 'https://www.casanova-conciergerie.fr',
    category: 'Site vitrine premium',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site premium pour Casa Nova, conciergerie haut de gamme à Bordeaux, sur le Bassin d'Arcachon et au Cap Ferret : gestion locative, ménage, accueil voyageurs.",
    detail: {
      context:
        "Casa Nova, conciergerie haut de gamme pour propriétaires exigeants, entre Bordeaux, le Bassin d'Arcachon et le Cap Ferret.",
      goal:
        "Attirer des propriétaires et convertir grâce à une image premium et un estimateur de revenus locatifs.",
      problem:
        "Sur un marché premium, la confiance se gagne dès la première impression : le site doit incarner l'excellence du service.",
      solution:
        "Site premium présentant le service complet (gestion, ménage, accueil, maintenance), la couverture locale et un estimateur de potentiel locatif pour générer des leads.",
      structure: [
        'Hero premium',
        'Le service complet',
        'Estimateur de revenus locatifs',
        'Couverture locale',
        'Contact'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Estimateur de revenus',
        'SEO local (Bordeaux, Bassin, Cap Ferret)',
        'Design premium',
        'Formulaire de contact'
      ],
      art: 'Direction élégante et épurée, univers haut de gamme.'
    }
  },
  {
    slug: 'koko-studio',
    name: 'Koko Studio',
    url: 'https://kokostudio.fr',
    category: 'Site vitrine · agence créative',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine premium pour Koko Studio, agence de création de vidéos en IA générative (vidéos hybrides réel × IA ou full IA) pour les marques.",
    detail: {
      context:
        "Koko Studio, agence spécialisée dans la création de vidéos en intelligence artificielle générative pour les marques.",
      goal:
        "Incarner un positionnement premium et créatif, et convertir les marques en prises de contact.",
      problem:
        "Un positionnement de pointe (IA générative) demande un site qui prouve le niveau créatif dès la première seconde.",
      solution:
        "Site vitrine premium à forte identité : mise en scène des formats, des réalisations et des deux approches (hybride / full IA), avec appels à l'action clairs.",
      structure: [
        'Hero à fort impact',
        'Formats proposés',
        'Approches (hybride / full IA)',
        'Références clients',
        'FAQ',
        'Contact / brief'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Direction artistique premium',
        'Animations soignées',
        'SEO de base',
        'Formulaire de brief'
      ],
      art: 'Direction artistique audacieuse et cinématographique.'
    }
  },
  {
    slug: 'ddsl-audio',
    name: 'DDSL Audio',
    url: 'https://www.ddslaudio.fr',
    category: 'Site vitrine',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site pour DDSL Audio, location de matériel son, lumière, scène et vidéo à Bordeaux et en Gironde (matériel seul ou installé sur place).",
    detail: {
      context:
        "DDSL Audio loue son parc son, lumière, scène et vidéo à Bordeaux et en Gironde, en location seule ou installée sur place.",
      goal:
        "Présenter le parc et les formules, et générer des demandes de devis pour événements.",
      problem:
        "Sans catalogue clair en ligne, difficile pour un organisateur d'événement de savoir ce qui est disponible et de demander un devis.",
      solution:
        "Site vitrine structuré autour du parc (son, lumière, scène, vidéo), des formules (seul / installé / clé en main) et d'un parcours de demande de devis.",
      structure: [
        'Hero — son, lumière, scène, vidéo',
        'Le parc en détail',
        'Formules (seul / installé)',
        "Déroulé d'une prestation",
        'Réalisations',
        'Devis'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Catalogue du parc',
        'SEO local (Bordeaux, Gironde)',
        'Demande de devis',
        'Réalisations'
      ],
      art: 'Direction sombre et scénique, mise en valeur du matériel.'
    }
  },
  {
    slug: 'lcc-espaces-verts',
    name: 'LCC Espaces Verts',
    url: 'https://lcc-espacesverts.fr',
    category: 'Site vitrine artisan',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine pour LCC Espaces Verts, élagueur à Mérignac et dans Bordeaux Métropole : élagage, abattage, démontage et soins aux arbres.",
    detail: {
      context:
        "LCC Espaces Verts, entreprise d'élagage et de soins aux arbres basée à Mérignac, intervenant dans Bordeaux Métropole.",
      goal:
        "Présenter les prestations, rassurer et générer des demandes de devis, y compris en urgence après tempête.",
      problem:
        "Les prospects cherchent un élagueur en ligne, souvent en urgence : il faut être trouvé et inspirer confiance vite.",
      solution:
        "Site vitrine artisan structuré par prestation (élagage, abattage, démontage, soins), avec déroulé d'intervention, réalisations et zone couverte.",
      structure: [
        'Hero — élagage à Mérignac',
        'Prestations sur les arbres',
        "Déroulé d'une intervention",
        'Réalisations avant / après',
        'Zone (Bordeaux Métropole)',
        'Contact / devis'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Pages prestations',
        'SEO local (élagueur Mérignac)',
        "Intervention d'urgence mise en avant",
        'Devis en ligne'
      ],
      art: 'Direction nature et professionnelle, mise en valeur des chantiers.'
    }
  },
  {
    slug: 'czir62',
    name: 'CZIR62',
    url: 'https://czir62.fr',
    category: 'Site vitrine artisan',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine pour CZIR62, entreprise familiale de couverture à Béthune (62) depuis 1925 : rénovation de toiture, zinguerie, démoussage et recherche de fuite.",
    detail: {
      context:
        "CZIR62, entreprise générale de couverture à Béthune (Pas-de-Calais), artisan familial depuis 1925.",
      goal:
        "Présenter clairement les prestations et rassurer les prospects avant le devis, avec une vraie présence locale.",
      problem:
        "Sans site, une entreprise de couverture dépend du bouche-à-oreille et n'a rien à montrer aux prospects qui cherchent un couvreur en ligne.",
      solution:
        "Site vitrine artisan structuré par prestation (couverture, rénovation, réparation, fuite, démoussage, zinguerie, étanchéité, couverture métallique), avec photos avant / après et déroulé d'intervention.",
      structure: [
        'Hero — couvreur à Béthune',
        'Prestations détaillées',
        "Déroulé d'une intervention",
        'Chantiers avant / après',
        "Zone d'intervention",
        'Contact / devis'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Pages prestations',
        'SEO local (couvreur Béthune)',
        'Photos de chantiers',
        'Devis en ligne'
      ],
      art: 'Direction sérieuse et rassurante, mise en avant du savoir-faire.'
    }
  },
  {
    slug: 'saint-medard-rugby-club',
    name: 'Saint-Médard Rugby Club',
    url: 'https://smrc33.fr',
    category: 'Site club sportif',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site pour le Saint-Médard Rugby Club (Saint-Médard-en-Jalles) : école de rugby, équipes, actualités, calendrier, résultats et partenaires.",
    detail: {
      context:
        "Saint-Médard Rugby Club, club de rugby de Saint-Médard-en-Jalles, 121 ans d'histoire, de l'école de rugby à la Nationale 2.",
      goal:
        "Fédérer autour du club, informer (actualités, calendrier, résultats) et valoriser les partenaires.",
      problem:
        "Un club vivant a besoin d'un point central en ligne pour ses membres, familles, supporters et partenaires.",
      solution:
        "Site club complet : présentation, actualités, équipes et école de rugby, calendrier / résultats, espace partenaires et contact.",
      structure: [
        'Hero — le club',
        'Actualités',
        'Équipes & école de rugby',
        'Calendrier & résultats',
        'Partenaires',
        'Contact'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Actualités du club',
        'Espace partenaires',
        'SEO local',
        'Contact'
      ],
      art: 'Direction dynamique aux couleurs du club (jaune et noir).'
    }
  },
  {
    slug: 'rosso-cafe',
    name: 'Rosso Café',
    url: 'https://www.rossocafe.com',
    category: 'Site restaurant',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site bilingue pour Rosso, diner italo-américain à Seseh (Bali) : pizza façon Detroit, pâtes maison, brunch et cocktails.",
    detail: {
      context:
        "Rosso, diner italo-américain à Seseh (Bali) : pâtes maison, pizza style Detroit, brunch toute la journée et cocktails.",
      goal:
        "Donner une vitrine internationale à l'adresse et inciter à réserver, en français comme en anglais.",
      problem:
        "Une adresse tendance a besoin d'un site à la hauteur de son ambiance pour convertir visiteurs locaux et voyageurs.",
      solution:
        "Site vitrine immersif et bilingue (EN / FR) : univers, menu, ambiance, informations pratiques et réservation.",
      structure: [
        'Hero — diner italo-américain, Bali',
        "L'histoire",
        'Le menu',
        "L'ambiance",
        'Nous trouver / horaires',
        'Réserver'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Bilingue EN / FR',
        'Galerie ambiance',
        'Réservation',
        'SEO international'
      ],
      art: 'Direction chaleureuse et vibrante, esprit diner.'
    }
  },
  {
    slug: 'w888-enalim',
    name: 'W888 Enalim',
    url: 'https://w888.fr',
    category: 'Site vitrine B2B',
    serviceSlug: 'site-vitrine-bordeaux',
    description:
      "Site vitrine B2B pour W888 Enalim, intermédiaire commercial indépendant en agroalimentaire, positionné entre l'Europe et le Maghreb.",
    detail: {
      context:
        "W888 Enalim, intermédiaire commercial indépendant en agroalimentaire, au carrefour de l'Europe et du Maghreb.",
      goal:
        "Crédibiliser une activité B2B et générer des prises de contact d'industriels et d'importateurs.",
      problem:
        "Une activité d'intermédiation B2B doit inspirer confiance et clarté immédiate à des mandants exigeants.",
      solution:
        "Site vitrine sobre et professionnel : proposition de valeur claire, cibles (industriels, importateurs), couverture géographique et contact.",
      structure: [
        'Hero — intermédiation agroalimentaire',
        'Pour qui (industriels, importateurs)',
        'Couverture Europe-Maghreb',
        'Approche',
        'Contact'
      ],
      features: [
        'Site responsive mobile / tablette / desktop',
        'Structure B2B claire',
        'SEO de base',
        'Formulaire de contact',
        'Bilingue possible'
      ],
      art: 'Direction sobre, institutionnelle et rassurante.'
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

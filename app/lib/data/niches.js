/* Pages niches (par métier) — positionnées France.
   Contenu spécifique par niche pour éviter toute impression de duplication :
   problèmes du métier, leviers, cas clients réels de la niche, FAQ dédiée. */

export const niches = [
  {
    urlSlug: 'creation-site-internet-restaurant',
    singular: 'restaurant',
    plural: 'restaurants',
    breadcrumbName: 'Site internet pour restaurants',
    eyebrow: 'Restaurants & brasseries',
    h1tail: 'pour les restaurants',
    title: 'Création de site internet pour restaurants | SEO local — Prat Enzo',
    description:
      "Création de site internet pour restaurants, brasseries et adresses gourmandes : être trouvé sur Google, donner faim et faciliter la réservation. Depuis Bordeaux, partout en France.",
    intro:
      "Vos futurs clients cherchent « où bruncher » ou « restaurant près de moi » sur Google et sur les cartes. Un restaurant qui n'apparaît pas perd ces couverts au profit du voisin. Je conçois des sites de restaurant pensés pour être trouvés localement, donner faim et transformer une recherche en réservation — depuis Bordeaux, partout en France.",
    pains: [
      "Invisible quand un client cherche un restaurant à proximité",
      "Une carte illisible ou des photos qui ne donnent pas envie",
      "Aucun moyen simple de réserver → des clients perdus",
      "Une fiche Google mal tenue (horaires, photos, avis)",
      "Un site lent sur mobile, là où tout se décide"
    ],
    levers: [
      { tag: 'Site web', title: 'Donner faim', desc: "Photos mises en valeur, carte lisible, ambiance — un site rapide sur mobile qui donne envie de venir." },
      { tag: 'SEO local', title: 'Être trouvé', desc: "Positionnement sur « restaurant + ville », « brunch près de moi »… et une fiche Google cohérente." },
      { tag: 'Conversion', title: 'Faire réserver', desc: "Réservation, appel et itinéraire en un geste : la recherche devient une visite." },
      { tag: 'GEO', title: 'Être recommandé par l’IA', desc: "Cuisine, horaires, quartier structurés pour être compris et cité par les moteurs de réponse IA." }
    ],
    caseSlugs: ['brunch-area', 'bona-bordeaux', 'rosso-cafe'],
    faq: [
      {
        q: "Comment mon restaurant peut-il apparaître sur Google ?",
        a: "En combinant un site optimisé pour les recherches locales (« restaurant + ville », « brunch près de moi ») et une fiche Google Business tenue à jour (horaires, photos, avis). Les deux se renforcent."
      },
      {
        q: "Un site sert-il encore quand on a déjà les réseaux et les plateformes ?",
        a: "Oui. Les réseaux et plateformes vous louent une audience et prélèvent des commissions. Votre site vous appartient, capte les recherches Google et convertit sans intermédiaire."
      },
      {
        q: "Peut-on intégrer la réservation ?",
        a: "Oui : réservation, appel direct et itinéraire peuvent être intégrés pour transformer une visite du site en client, en particulier sur mobile."
      }
    ]
  },
  {
    urlSlug: 'creation-site-internet-artisan',
    singular: 'artisan',
    plural: 'artisans',
    breadcrumbName: 'Site internet pour artisans',
    eyebrow: 'Artisans du bâtiment & du geste',
    h1tail: 'pour les artisans',
    title: 'Création de site internet pour artisans | SEO local — Prat Enzo',
    description:
      "Création de site internet pour artisans (couvreurs, plombiers, électriciens, paysagistes…) : être trouvé sur Google, rassurer et générer des demandes de devis. Depuis Bordeaux, partout en France.",
    intro:
      "Quand un particulier a une fuite, un volet cassé ou un arbre à élaguer, il cherche sur Google — souvent en urgence. L'artisan qui apparaît, rassure et montre ses chantiers décroche l'appel. Je conçois des sites d'artisan pensés pour être trouvés localement et transformer la recherche en demande de devis — depuis Bordeaux, partout en France.",
    pains: [
      "Dépendre uniquement du bouche-à-oreille",
      "Invisible sur « couvreur / plombier + ville »",
      "Rien à montrer : ni photos de chantiers, ni preuves",
      "Des prospects qui appellent le concurrent mieux référencé",
      "Aucun moyen simple de demander un devis"
    ],
    levers: [
      { tag: 'Site web', title: 'Rassurer', desc: "Réalisations, avant/après, zones d'intervention, avis : le prospect est convaincu avant même d'appeler." },
      { tag: 'SEO local', title: 'Être trouvé', desc: "Positionnement sur « métier + ville » et une fiche Google qui inspire confiance en cas d'urgence." },
      { tag: 'Conversion', title: 'Générer des devis', desc: "Bouton d'appel, formulaire de devis, mise en avant de l'urgence : chaque visite peut devenir une demande." },
      { tag: 'GEO', title: 'Être compris par l’IA', desc: "Métier, prestations et zone structurés pour être identifié par les moteurs de réponse IA." }
    ],
    caseSlugs: ['czir62', 'lcc-espaces-verts', 'couverture-gironde'],
    faq: [
      {
        q: "Comment être trouvé quand un client cherche un artisan en urgence ?",
        a: "Avec un site optimisé pour les recherches locales (« métier + ville ») et une fiche Google à jour : c'est le réflexe n°1 d'un particulier en cas d'urgence."
      },
      {
        q: "Faut-il vraiment montrer ses chantiers ?",
        a: "Oui — les photos avant/après et les réalisations sont ce qui rassure le plus un particulier avant de confier un chantier. C'est souvent ce qui fait la différence."
      },
      {
        q: "Combien de temps pour être visible sur Google ?",
        a: "Cela dépend de la concurrence locale et de l'ancienneté du domaine. Un site bien structuré peut se positionner rapidement sur des recherches locales précises, mais aucune 1ʳᵉ place n'est garantie."
      }
    ]
  }
];

export function getNicheBySlug(slug) {
  return niches.find(n => n.urlSlug === slug);
}

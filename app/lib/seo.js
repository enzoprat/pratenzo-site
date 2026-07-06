import { config } from './config';

const SITE_URL = config.baseUrl;

/* Normalise un title : string OU { absolute: '...' } (format Next.js) → string */
function asTitleString(title) {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object' && title.absolute) return title.absolute;
  return String(title || '');
}

/* Helper : génère les metadata Next.js pour une page */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/og-image.png',
  noindex = false
}) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    openGraph: {
      title,
      description,
      url,
      siteName: config.brandName,
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${image}`]
    }
  };
}

/* Schema : Person (Enzo Prat) */
export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Enzo Prat',
    url: SITE_URL,
    jobTitle: 'Concepteur de sites web',
    worksFor: { '@id': `${SITE_URL}/#agency` }
  };
}

/* Schema : Organization / ProfessionalService */
export function buildOrgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#agency`,
    name: config.brandName,
    description:
      "Création de sites internet pour professionnels : sites vitrines, e-commerce Shopify et click & collect à Bordeaux et en Gironde.",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.png`,
    telephone: config.phone,
    founder: { '@id': `${SITE_URL}/#person` },
    priceRange: 'Sur devis',
    areaServed: [
      { '@type': 'City', name: 'Bordeaux' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'City', name: 'Mérignac' },
      { '@type': 'City', name: 'Pessac' },
      { '@type': 'City', name: 'Talence' },
      { '@type': 'City', name: 'Bègles' },
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'City', name: 'Arcachon' }
    ],
    knowsAbout: [
      'Création de sites internet',
      'Site vitrine',
      'E-commerce Shopify',
      'Click and collect',
      'Refonte de site web',
      'SEO',
      'SEO local',
      'Design responsive'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services ${config.brandName}`,
      itemListElement: [
        offer('Site vitrine', 'Site clair et professionnel pour présenter une activité.'),
        offer('E-commerce Shopify', 'Boutique Shopify professionnelle.'),
        offer('Click & collect', 'Commande en ligne et retrait sur place.'),
        offer('Refonte de site web', 'Modernisation d\u2019un site existant.'),
        offer('SEO local', 'Optimisation SEO pour une visibilité locale.')
      ]
    }
  };
}

function offer(name, description) {
  return {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, description }
  };
}

/* Schema : WebSite */
export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: config.brandName,
    description: 'Création de sites internet à Bordeaux et en Gironde.',
    publisher: { '@id': `${SITE_URL}/#agency` },
    inLanguage: 'fr-FR'
  };
}

/* Schema : WebPage */
export function buildWebPageSchema({ path, title, description }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: asTitleString(title),
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#agency` }
  };
}

/* Schema : Service */
export function buildServiceSchema({ name, description, slug, areaServed = ['Bordeaux', 'Gironde'] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${slug}#service`,
    name,
    description,
    provider: { '@id': `${SITE_URL}/#agency` },
    areaServed: areaServed.map(a => ({ '@type': 'City', name: a })),
    url: `${SITE_URL}/services/${slug}`,
    serviceType: name
  };
}

/* Schema : BreadcrumbList */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

/* Schema : FAQPage */
export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a }
    }))
  };
}

/* Schema : CollectionPage (utilisé pour /realisations et /guides) */
export function buildCollectionSchema({ path, title, description }) {
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: asTitleString(title),
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };
}

/* Schema : CreativeWork pour une réalisation */
export function buildCreativeWorkSchema({ slug, name, description, sameAs }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/realisations/${slug}#work`,
    name,
    description,
    url: `${SITE_URL}/realisations/${slug}`,
    sameAs: sameAs ? [sameAs] : undefined,
    creator: { '@id': `${SITE_URL}/#agency` }
  };
}

/* Schema : AboutPage + Person */
export function buildAboutSchema({ path, title, description }) {
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#about`,
    url,
    name: asTitleString(title),
    description,
    mainEntity: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'fr-FR'
  };
}

/* Schema : ContactPage */
export function buildContactSchema({ path, title, description }) {
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${url}#contact`,
    url,
    name: asTitleString(title),
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };
}

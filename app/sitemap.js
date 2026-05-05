import { config } from './lib/config';
import { realisations } from './lib/data/realisations';
import { services } from './lib/data/services';

const SITE = config.baseUrl;

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${SITE}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${SITE}/services`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE}/realisations`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE}/creation-site-internet-bordeaux`, priority: 0.95, changeFrequency: 'monthly' },
    { url: `${SITE}/creation-site-internet-gironde`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${SITE}/site-internet-artisan-bordeaux`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${SITE}/agence-web-bordeaux`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${SITE}/tarifs-creation-site-internet`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE}/a-propos`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${SITE}/contact`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${SITE}/guides`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE}/secteurs`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${SITE}/mentions-legales`, priority: 0.2, changeFrequency: 'yearly' },
    { url: `${SITE}/politique-confidentialite`, priority: 0.2, changeFrequency: 'yearly' },
    { url: `${SITE}/conditions-de-prestation`, priority: 0.2, changeFrequency: 'yearly' }
  ];

  const servicePages = services.map(s => ({
    url: `${SITE}/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly'
  }));

  const realisationPages = realisations.map(r => ({
    url: `${SITE}/realisations/${r.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly'
  }));

  return [...staticPages, ...servicePages, ...realisationPages].map(p => ({
    ...p,
    lastModified: now
  }));
}

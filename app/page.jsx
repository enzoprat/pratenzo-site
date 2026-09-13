import { buildMetadata, buildWebPageSchema } from './lib/seo';
import JsonLd from './components/seo/JsonLd';

import Hero from './components/home/Hero';
import GoogleSearch from './components/home/GoogleSearch';
import CaseStudies from './components/home/CaseStudies';
import Diagnostic from './components/home/Diagnostic';
import ContactForm from './components/forms/ContactForm';

export const metadata = buildMetadata({
  title: 'Création site internet Bordeaux | Prat Enzo',
  description:
    "Création de sites vitrines, Shopify et click & collect à Bordeaux. Pour artisans, commerces, indépendants et entreprises locales en Gironde.",
  path: '/',
  image: '/og-image.png'
});

export default function HomePage() {
  const webpage = buildWebPageSchema({
    path: '/',
    title: metadata.title,
    description: metadata.description
  });

  return (
    <>
      <JsonLd data={[webpage]} />
      <main>
        {/* Socle home — refonte premium (Site web → SEO → GEO) */}
        <Hero />
        <GoogleSearch />
        <CaseStudies />
        <Diagnostic />
        <ContactForm />
      </main>
    </>
  );
}

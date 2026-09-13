import { buildMetadata, buildWebPageSchema, buildFaqSchema } from './lib/seo';
import { faqIntent } from './lib/data/faq';
import JsonLd from './components/seo/JsonLd';

import Hero from './components/home/Hero';
import GoogleSearch from './components/home/GoogleSearch';
import Targets from './components/home/Targets';
import CaseStudies from './components/home/CaseStudies';
import Reviews from './components/home/Reviews';
import Diagnostic from './components/home/Diagnostic';
import FaqIntent from './components/home/FaqIntent';
import ContactForm from './components/forms/ContactForm';

export const metadata = buildMetadata({
  title: 'Création de sites web, SEO & GEO pour entreprises | Prat Enzo',
  description:
    "Création de sites web pensés pour le SEO et le GEO : être trouvé sur Google et compris par les moteurs de recherche IA. Depuis Bordeaux, pour les entreprises partout en France.",
  path: '/',
  image: '/og-image.png'
});

export default function HomePage() {
  const webpage = buildWebPageSchema({
    path: '/',
    title: metadata.title,
    description: metadata.description
  });
  const faq = buildFaqSchema(faqIntent);

  return (
    <>
      <JsonLd data={[webpage, faq]} />
      <main>
        {/* Socle home — refonte premium (Site web → SEO → GEO) */}
        <Hero />
        <GoogleSearch />
        <Targets />
        <CaseStudies />
        <Reviews />
        <Diagnostic />
        <FaqIntent />
        <ContactForm />
      </main>
    </>
  );
}

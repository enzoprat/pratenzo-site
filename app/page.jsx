import { buildMetadata, buildFaqSchema, buildWebPageSchema } from './lib/seo';
import { faqHome } from './lib/data/faq';
import JsonLd from './components/seo/JsonLd';

import Hero from './components/home/Hero';
import Marquee from './components/shared/Marquee';
import ForWho from './components/home/ForWho';
import Services from './components/home/Services';
import Stats from './components/home/Stats';
import Included from './components/home/Included';
import WhyWebsite from './components/home/WhyWebsite';
import Process from './components/home/Process';
import Realisations from './components/home/Realisations';
import Options from './components/home/Options';
import Maintenance from './components/home/Maintenance';
import FAQ from './components/home/FAQ';
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
  const faq = buildFaqSchema(faqHome);

  return (
    <>
      <JsonLd data={[webpage, faq]} />
      <main>
        <Hero />
        <Marquee
          speed={50}
          items={[
            'Création site internet Bordeaux',
            'Site vitrine Bordeaux',
            'E-commerce Shopify',
            'Click & collect',
            'Refonte de site',
            'SEO local Gironde',
            'Site artisan',
            'Mobile first'
          ]}
        />
        <ForWho />
        <Services />
        <Stats />
        <Included />
        <WhyWebsite />
        <Process />
        <Realisations />
        <Options />
        <Maintenance />
        <FAQ />
        <ContactForm />
      </main>
    </>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema
} from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Pourquoi un artisan a besoin d\u2019un site internet (2026)',
  description:
    "Bouche-à-oreille, Google, concurrents déjà en ligne : pourquoi un artisan à Bordeaux a tout intérêt à avoir un vrai site internet, et ce qu'il doit contenir pour générer des demandes de devis.",
  path: '/guides/pourquoi-artisan-site-internet'
});

const breadcrumb = [
  { name: 'Guides', path: '/guides' },
  { name: 'Pourquoi un artisan a besoin d\u2019un site internet', path: '/guides/pourquoi-artisan-site-internet' }
];

const faq = [
  {
    q: 'Le bouche-à-oreille ne suffit-il pas pour un artisan ?',
    a: "Le bouche-à-oreille reste précieux, mais aujourd'hui la première chose que fait un client à qui l'on vous recommande, c'est chercher votre nom sur Google. S'il ne trouve rien de sérieux, le doute s'installe. Un site professionnel confirme la recommandation et rassure au lieu de laisser le prospect filer vers un concurrent visible en ligne."
  },
  {
    q: 'Une fiche Google Business ne remplace-t-elle pas un site ?',
    a: "La fiche Google Business est indispensable, mais elle ne suffit pas : elle est limitée, standardisée et identique pour tous. Un site vous permet de présenter vos chantiers, votre savoir-faire, vos zones d'intervention et de capter des recherches sur «\u00a0votre métier + votre ville\u00a0». Les deux sont complémentaires : la fiche pousse vers le site, le site convertit."
  },
  {
    q: 'Que doit contenir le site d\u2019un artisan pour générer des devis ?',
    a: "Une présentation claire du métier et des prestations, des photos de réalisations, les zones d'intervention, des éléments de réassurance (assurance, expérience, avis) et surtout un moyen de contact simple et visible. L'objectif n'est pas d'être joli, mais de transformer un visiteur en demande de devis."
  }
];

export default function PourquoiArtisanSiteInternetGuide() {
  const article = buildArticleSchema({
    slug: 'pourquoi-artisan-site-internet',
    title: metadata.title,
    description: metadata.description,
    datePublished: '2026-07-13'
  });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faqSchema = buildFaqSchema(faq);

  return (
    <>
      <JsonLd data={[article, bc, faqSchema]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Guide · Artisans"
        h1={<>Pourquoi un <strong>artisan</strong> a besoin d'un site internet</>}
        sub="Couvreur, plombier, électricien, maçon : vos clients vous cherchent d'abord sur Google. Voici pourquoi un vrai site change la donne, et ce qu'il doit contenir pour vous apporter des devis."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <p>
              Beaucoup d'artisans fonctionnent depuis des années au bouche-à-oreille et s'en sortent très bien.
              La question n'est pas de remettre ça en cause, mais de constater un changement simple&nbsp;: aujourd'hui,
              quand on vous recommande, le client tape votre nom sur Google avant même de décrocher son téléphone.
              Ce qu'il trouve — ou ne trouve pas — décide s'il vous appelle ou s'il passe au concurrent suivant.
            </p>

            <h2>Vos clients vous cherchent en ligne, même quand on vous a recommandé</h2>
            <p>
              Un prospect qui a votre nom cherche à se rassurer&nbsp;: est-ce sérieux, est-ce que ça a l'air pro,
              est-ce que d'autres en sont contents&nbsp;? Sans site, il tombe au mieux sur une fiche vide, au pire
              sur rien. Avec un site clair qui montre vos chantiers et votre savoir-faire, le doute disparaît et la
              recommandation se transforme en appel. Le site ne remplace pas le bouche-à-oreille&nbsp;: il le rend
              beaucoup plus efficace.
            </p>

            <h2>Vos concurrents sont déjà là</h2>
            <p>
              Sur des recherches comme «&nbsp;couvreur Bordeaux&nbsp;» ou «&nbsp;plombier Mérignac&nbsp;», ce sont
              les artisans visibles en ligne qui récupèrent les demandes. Chaque prospect qui ne vous trouve pas est
              un devis qui part ailleurs. Être présent au bon endroit, au moment où quelqu'un a un besoin urgent,
              c'est exactement ce que fait un{' '}
              <Link href="/site-internet-artisan-bordeaux">site internet pensé pour les artisans</Link>.
            </p>

            <h2>La fiche Google ne suffit pas</h2>
            <p>
              La fiche Google Business est essentielle et je recommande toujours de l'optimiser. Mais elle est
              standardisée, limitée et identique pour tous les artisans de votre secteur. Un site vous appartient&nbsp;:
              il présente vos réalisations, vos zones d'intervention, vos garanties, et capte des recherches que la
              fiche seule ne couvre pas. Les deux fonctionnent ensemble.
            </p>

            <h2>Ce qu'un bon site d'artisan doit contenir</h2>
            <p>
              Un site d'artisan efficace n'a pas besoin d'être compliqué. Il doit surtout&nbsp;:
            </p>
            <ul>
              <li>présenter clairement le métier et les prestations proposées&nbsp;;</li>
              <li>montrer des <Link href="/realisations">photos de chantiers réels</Link> qui prouvent le savoir-faire&nbsp;;</li>
              <li>indiquer les zones d'intervention (ville et communes autour)&nbsp;;</li>
              <li>rassurer&nbsp;: assurance décennale, expérience, avis clients&nbsp;;</li>
              <li>offrir un moyen de contact simple, visible dès la première page.</li>
            </ul>
            <p>
              L'objectif n'est pas d'avoir «&nbsp;un beau site&nbsp;», mais un site qui transforme un visiteur en
              demande de devis. C'est toute la différence entre une carte de visite en ligne et un vrai outil
              commercial.
            </p>

            <h2>Un investissement, pas une dépense</h2>
            <p>
              Pour un artisan, un seul chantier signé grâce au site couvre souvent une bonne partie de son coût.
              Ensuite, il continue d'apporter des demandes pendant des années. C'est la logique développée dans le
              guide{' '}
              <Link href="/guides/cout-site-internet-bordeaux">combien coûte un site internet à Bordeaux</Link>&nbsp;:
              le bon réflexe n'est pas de chercher le moins cher, mais ce que le site va rapporter.
            </p>

            <h2>Questions fréquentes</h2>
            {faq.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <p style={{ marginTop: 30 }}>
              <Link href="/site-internet-artisan-bordeaux" className="btn btn--primary">
                Voir la solution pour les artisans <ArrowRight size={16} />
              </Link>
            </p>
          </div>
        </section>

        <CtaBlock title="Artisan à Bordeaux ? Passons votre visibilité au niveau supérieur." />
      </PageShell>
    </>
  );
}

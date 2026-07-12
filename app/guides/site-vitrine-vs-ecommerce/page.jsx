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
  title: 'Site vitrine ou e-commerce : comment choisir ? (2026)',
  description:
    "Site vitrine ou site e-commerce : lequel choisir pour votre activité à Bordeaux ? Les différences concrètes, les cas où chacun s'impose, et comment ne pas surpayer une boutique inutile.",
  path: '/guides/site-vitrine-vs-ecommerce'
});

const breadcrumb = [
  { name: 'Guides', path: '/guides' },
  { name: 'Site vitrine ou e-commerce', path: '/guides/site-vitrine-vs-ecommerce' }
];

const faq = [
  {
    q: 'Quelle est la différence entre un site vitrine et un site e-commerce ?',
    a: "Un site vitrine présente une activité et transforme les visiteurs en demandes de contact ou de devis. Un site e-commerce ajoute une boutique complète : catalogue, fiches produits, panier, paiement en ligne et gestion des commandes. Le premier génère des contacts, le second encaisse directement des ventes."
  },
  {
    q: 'Un artisan ou un prestataire de services a-t-il besoin d\u2019un e-commerce ?',
    a: "Dans la grande majorité des cas, non. Un artisan, un indépendant ou un professionnel qui vend une prestation sur devis n'a pas de produits à mettre au panier : un site vitrine bien construit, orienté demande de contact, est plus efficace et moins coûteux. L'e-commerce se justifie quand on vend des produits physiques en ligne."
  },
  {
    q: 'Peut-on commencer par un site vitrine et ajouter la vente en ligne plus tard ?',
    a: "Oui, et c'est souvent la meilleure approche. On démarre avec un site vitrine solide qui installe votre présence et génère des demandes, puis on ajoute une brique e-commerce ou du click & collect quand l'activité le justifie. Le site est pensé dès le départ pour pouvoir évoluer."
  }
];

export default function SiteVitrineVsEcommerceGuide() {
  const article = buildArticleSchema({
    slug: 'site-vitrine-vs-ecommerce',
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
        eyebrow="Guide · Choix du site"
        h1={<>Site <strong>vitrine</strong> ou site <strong>e-commerce</strong> ?</>}
        sub="C'est la première décision structurante d'un projet web. Voici comment savoir lequel correspond vraiment à votre activité — et éviter de payer une boutique dont vous n'avez pas besoin."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <p>
              Avant même de parler design ou budget, une question détermine tout le projet&nbsp;: votre site doit-il
              <strong> présenter</strong> votre activité et vous apporter des demandes, ou <strong>vendre</strong>{' '}
              directement des produits en ligne&nbsp;? De cette réponse dépend le type de site, le travail à fournir
              et l'investissement. Se tromper de côté, c'est soit se priver de ventes, soit payer une machine qu'on
              n'utilisera jamais.
            </p>

            <h2>Le site vitrine : présenter et générer des demandes</h2>
            <p>
              Un <Link href="/services/site-vitrine-bordeaux">site vitrine</Link> a un objectif clair&nbsp;:
              présenter sérieusement votre activité et transformer les visiteurs en contacts ou en demandes de devis.
              Il met en avant vos prestations, vos réalisations, vos zones d'intervention et votre crédibilité, puis
              guide le visiteur vers un formulaire ou un appel. C'est le format idéal pour un artisan, un indépendant,
              un professionnel de service ou un commerce qui veut d'abord être trouvé et contacté.
            </p>

            <h2>Le site e-commerce : vendre en ligne</h2>
            <p>
              Un <Link href="/services/site-ecommerce-shopify-bordeaux">site e-commerce</Link> va plus loin&nbsp;:
              il ajoute un catalogue, des fiches produits, un panier, le paiement en ligne, la gestion des stocks et
              des commandes, la livraison. C'est un véritable outil de vente qui encaisse directement, mais qui
              demande aussi plus de conception, plus de contenu et un budget supérieur. Il se justifie quand vous
              avez réellement des produits à vendre en ligne.
            </p>

            <h2>Comment savoir de quel côté vous êtes</h2>
            <p>
              Quelques questions simples suffisent le plus souvent à trancher&nbsp;:
            </p>
            <ul>
              <li><strong>Vendez-vous un produit physique ou une prestation sur devis&nbsp;?</strong> Prestation → vitrine. Produit → e-commerce (ou vitrine + click &amp; collect).</li>
              <li><strong>Le client peut-il acheter sans échange préalable&nbsp;?</strong> S'il faut toujours discuter du besoin, le vitrine est plus adapté.</li>
              <li><strong>Avez-vous un catalogue à gérer&nbsp;?</strong> Beaucoup de références et de stock orientent vers l'e-commerce.</li>
              <li><strong>Voulez-vous surtout être trouvé localement&nbsp;?</strong> Un vitrine bien optimisé en SEO local suffit souvent à remplir l'objectif.</li>
            </ul>

            <h2>La solution intermédiaire : le click &amp; collect</h2>
            <p>
              Entre les deux existe une option souvent idéale pour les commerces de proximité&nbsp;: le{' '}
              <Link href="/services/click-and-collect-bordeaux">click &amp; collect</Link>. Le client réserve ou
              commande en ligne, puis récupère en boutique. On garde la simplicité d'un site vitrine tout en ajoutant
              une vraie fonction de vente, sans la lourdeur d'un e-commerce complet. C'est un excellent premier pas
              vers la vente en ligne.
            </p>

            <h2>Commencer vitrine, évoluer ensuite</h2>
            <p>
              Rien n'oblige à tout construire d'un coup. La démarche la plus saine consiste souvent à démarrer avec un
              site vitrine solide, à installer votre présence et vos premières demandes, puis à ajouter la vente en
              ligne quand l'activité le justifie. Un site bien conçu est pensé pour évoluer. Et si votre site actuel
              est dépassé, une <Link href="/services/refonte-site-internet-bordeaux">refonte</Link> peut poser cette
              base évolutive.
            </p>

            <h2>Et le budget dans tout ça ?</h2>
            <p>
              Le type de site est le premier facteur de prix&nbsp;: un e-commerce demande plus de travail qu'un
              vitrine, donc un budget supérieur. Le détail des facteurs qui font varier le coût est expliqué dans le
              guide{' '}
              <Link href="/guides/cout-site-internet-bordeaux">combien coûte un site internet à Bordeaux</Link>. Le
              bon réflexe&nbsp;: choisir le format qui sert vraiment votre activité, pas le plus impressionnant sur le
              papier.
            </p>

            <h2>Questions fréquentes</h2>
            {faq.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <p style={{ marginTop: 30 }}>
              <Link href="/contact" className="btn btn--primary">
                Discuter du bon format pour votre projet <ArrowRight size={16} />
              </Link>
            </p>
          </div>
        </section>

        <CtaBlock title="Vitrine, e-commerce ou click & collect ? Faisons le point." />
      </PageShell>
    </>
  );
}

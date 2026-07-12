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
  title: 'Freelance ou agence web à Bordeaux : comment choisir ?',
  description:
    "Freelance ou agence web à Bordeaux : différences de prix, d'interlocuteur, de réactivité et de suivi. Comment choisir le bon prestataire pour créer votre site internet.",
  path: '/guides/freelance-vs-agence-web-bordeaux'
});

const breadcrumb = [
  { name: 'Guides', path: '/guides' },
  { name: 'Freelance ou agence web à Bordeaux', path: '/guides/freelance-vs-agence-web-bordeaux' }
];

const faq = [
  {
    q: 'Un freelance est-il moins cher qu\u2019une agence web ?',
    a: "Souvent, oui, à qualité égale. Un indépendant n'a pas la structure lourde d'une agence (commerciaux, chef de projet, locaux, marges intermédiaires). Vous payez le travail de conception, pas les coûts de fonctionnement d'une organisation."
  },
  {
    q: 'Avec qui vais-je réellement travailler ?',
    a: "Avec un freelance, vous échangez directement avec la personne qui conçoit votre site, du premier appel à la mise en ligne. En agence, le commercial qui vend n'est souvent pas celui qui réalise : le projet peut être confié à un junior ou sous-traité."
  },
  {
    q: 'Un freelance est-il fiable pour un projet important ?',
    a: "Oui, à condition de vérifier ses réalisations et sa réactivité. Un indépendant établi s'appuie sur des outils professionnels et des partenaires si besoin. Pour un projet très volumineux avec de nombreux intervenants simultanés, une agence peut être plus adaptée."
  }
];

export default function FreelanceVsAgenceGuide() {
  const article = buildArticleSchema({
    slug: 'freelance-vs-agence-web-bordeaux',
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
        eyebrow="Guide · Choisir un prestataire"
        h1={<>Freelance ou <strong>agence web à Bordeaux</strong> : comment choisir ?</>}
        sub="Deux façons très différentes de faire créer son site. Voici les vraies différences en matière de prix, d'interlocuteur, de réactivité et de suivi — pour choisir en connaissance de cause."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <p>
              Pour créer un site internet à Bordeaux, deux voies principales existent : passer par une agence web,
              ou travailler avec un concepteur indépendant (freelance). Les deux peuvent livrer un excellent site.
              La différence tient surtout à la façon dont le projet est mené, à qui vous parlez, et à ce que vous
              payez réellement.
            </p>

            <h2>Le prix : structure légère contre structure lourde</h2>
            <p>
              Une agence, c'est une organisation : commerciaux, chefs de projet, développeurs, designers, locaux,
              charges. Tous ces coûts se retrouvent, logiquement, dans le devis. Un freelance porte une structure
              bien plus légère : vous payez essentiellement le travail de conception, sans les marges
              intermédiaires. À qualité égale, le budget est donc souvent plus contenu — un point détaillé sur la
              page <Link href="/tarifs-creation-site-internet">tarifs</Link>.
            </p>

            <h2>L'interlocuteur : qui fait vraiment le travail ?</h2>
            <p>
              C'est la différence la plus concrète au quotidien. En agence, la personne qui vous vend le projet
              n'est presque jamais celle qui le réalise. Une fois le contrat signé, le projet passe entre plusieurs
              mains, parfois confié à un junior ou sous-traité. Avec un indépendant, vous échangez directement avec
              la personne qui conçoit votre site, du premier appel à la mise en ligne. Pas de téléphone arabe, pas
              d'information perdue entre le commercial et le développeur.
            </p>

            <h2>La réactivité et le suivi après livraison</h2>
            <p>
              Un site n'est jamais totalement «&nbsp;fini&nbsp;» : il faut parfois modifier un texte, ajouter une
              page, corriger un détail. Avec un freelance, vous vous adressez à un interlocuteur unique qui connaît
              votre projet et reste joignable après la livraison. En agence, une petite modification peut passer par
              un ticket, un chef de projet, un planning — et prendre du temps. Pour un artisan ou un commerçant qui
              a besoin d'une réponse rapide, c'est un critère décisif.
            </p>

            <h2>Quand une agence reste plus adaptée</h2>
            <p>
              Soyons honnêtes : l'agence a ses cas d'usage. Pour un très gros projet avec de nombreux intervenants
              simultanés, des besoins techniques lourds ou un pilotage complexe, une structure dédiée peut être plus
              confortable. Pour la grande majorité des artisans, indépendants, commerces et PME de Bordeaux et de la
              Gironde, un concepteur indépendant offre le meilleur rapport qualité-prix-réactivité.
            </p>

            <h2>Mon approche</h2>
            <p>
              Je travaille en indépendant, précisément pour ces raisons : un seul interlocuteur, un contact direct,
              un site conçu sur mesure sans coûts superflus, et un suivi réel après la mise en ligne. Vous pouvez en
              savoir plus sur ma <Link href="/a-propos">démarche</Link>, consulter la page{' '}
              <Link href="/agence-web-bordeaux">agence web à Bordeaux</Link> pour comprendre ce positionnement, ou
              parcourir mes <Link href="/realisations">réalisations</Link> pour juger sur pièces.
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
                Discuter de votre projet directement <ArrowRight size={16} />
              </Link>
            </p>
          </div>
        </section>

        <CtaBlock title="Un projet de site à Bordeaux ?" />
      </PageShell>
    </>
  );
}

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
  title: 'Combien coûte un site internet à Bordeaux ? (guide 2026)',
  description:
    "Quel budget prévoir pour un site internet à Bordeaux ? Les vrais facteurs de prix d'un site vitrine, e-commerce ou refonte, et pourquoi le moins cher revient souvent le plus cher.",
  path: '/guides/cout-site-internet-bordeaux'
});

const breadcrumb = [
  { name: 'Guides', path: '/guides' },
  { name: 'Coût d\u2019un site internet à Bordeaux', path: '/guides/cout-site-internet-bordeaux' }
];

const faq = [
  {
    q: 'Combien coûte un site internet à Bordeaux en moyenne ?',
    a: "Un site professionnel conçu pour générer des demandes représente un investissement de plusieurs milliers d'euros. Le prix exact dépend du type de site, du nombre de pages, du design, des contenus et des fonctionnalités : c'est pourquoi il s'établit après analyse du projet plutôt que sur un tarif fixe affiché."
  },
  {
    q: 'Pourquoi un site à quelques centaines d\u2019euros est-il risqué ?',
    a: "Un site très bon marché repose généralement sur un template générique, sans stratégie ni SEO, et ne génère aucune demande. Il faut souvent le refaire au bout d'un an ou deux : le budget initial est perdu et il faut repayer. Le moins cher revient donc fréquemment le plus cher."
  },
  {
    q: 'Le prix d\u2019un site e-commerce est-il très différent d\u2019un site vitrine ?',
    a: "Oui. Un site vitrine présente une activité et génère des contacts ; un e-commerce ajoute un catalogue, des fiches produits, un tunnel d'achat, le paiement et la livraison. Le travail est plus important, donc le budget aussi."
  }
];

export default function CoutSiteInternetBordeauxGuide() {
  const article = buildArticleSchema({
    slug: 'cout-site-internet-bordeaux',
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
        eyebrow="Guide · Budget"
        h1={<>Combien coûte un <strong>site internet à Bordeaux</strong> ?</>}
        sub="La question que tout le monde se pose en premier. Voici les vrais facteurs qui déterminent le prix d'un site, et pourquoi il n'existe pas de tarif unique honnête."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <p>
              C'est la première question posée dans presque chaque demande de devis : «&nbsp;combien coûte
              un site internet&nbsp;?&nbsp;». La réponse honnête tient en une phrase : cela dépend de ce que
              le site doit accomplir. Un site conçu pour présenter sérieusement une activité et générer des
              demandes qualifiées à Bordeaux est un investissement de <strong>plusieurs milliers d'euros</strong>,
              pas un template à quelques centaines d'euros. Ce guide explique pourquoi, et surtout ce qui fait
              varier ce budget.
            </p>

            <h2>Le moins cher revient souvent le plus cher</h2>
            <p>
              On trouve des offres de sites à 300 ou 500&nbsp;€. Le problème n'est pas le prix en soi, mais ce
              qu'il achète : un template générique, sans stratégie de conversion, sans SEO local, souvent lent et
              impossible à faire évoluer. Un site de ce type ne génère aucune demande, et il faut généralement le
              refaire au bout d'un ou deux ans. Le budget de départ est alors perdu, et il faut repayer — cette
              fois pour de bon. Un site pensé comme un actif rentable coûte plus cher au départ, mais travaille
              pour vous pendant des années.
            </p>

            <h2>Les facteurs qui déterminent le prix</h2>
            <p>
              Plutôt qu'un tarif fixe, le budget d'un site se construit à partir de facteurs concrets. Voici les
              principaux&nbsp;:
            </p>
            <ul>
              <li><strong>Le type de site</strong> — un <Link href="/services/site-vitrine-bordeaux">site vitrine</Link> n'a pas le même coût qu'un <Link href="/services/site-ecommerce-shopify-bordeaux">e-commerce Shopify</Link> ou qu'une solution de <Link href="/services/click-and-collect-bordeaux">click &amp; collect</Link>.</li>
              <li><strong>Le nombre de pages</strong> — plus la structure est riche, plus le travail de conception et de contenu est important.</li>
              <li><strong>Le design</strong> — un template repris coûte moins qu'une direction artistique sur mesure avec animations et identité propre.</li>
              <li><strong>La rédaction</strong> — textes fournis par le client, ou rédigés pour vous (service supplémentaire, mais décisif pour le SEO).</li>
              <li><strong>Les photos</strong> — visuels fournis, banque d'images ou shooting dédié.</li>
              <li><strong>Les fonctionnalités</strong> — simple formulaire, réservation, espace client, boutique, intégrations (CRM, newsletter…).</li>
              <li><strong>Le SEO local</strong> — un site pensé pour ressortir sur «&nbsp;votre métier + votre ville&nbsp;» demande un travail de structure et de contenu spécifique.</li>
              <li><strong>La maintenance</strong> — ponctuelle à la livraison ou en suivi mensuel.</li>
            </ul>

            <h2>Vitrine, e-commerce, refonte : des budgets différents</h2>
            <p>
              Un <Link href="/services/site-vitrine-bordeaux">site vitrine</Link> reste le point d'entrée le plus
              fréquent pour un artisan, un indépendant ou un commerce : il présente l'activité et transforme les
              visiteurs en demandes de contact. Un <Link href="/services/site-ecommerce-shopify-bordeaux">site
              e-commerce</Link> ajoute tout un système de vente en ligne (catalogue, paiement, livraison) et
              représente donc un budget supérieur. Enfin, une <Link href="/services/refonte-site-internet-bordeaux">refonte</Link>
              part d'un site existant : le coût dépend de ce qui est récupérable et de l'ampleur du chantier.
            </p>

            <h2>Pourquoi je n'affiche pas de «&nbsp;à partir de&nbsp;»</h2>
            <p>
              Les prix d'appel «&nbsp;site à partir de X&nbsp;€&nbsp;» sont rarement justes. Ils débouchent soit
              sur une mauvaise surprise au devis détaillé, soit sur un site bâclé pour tenir le prix affiché. Je
              préfère établir un devis clair après quelques minutes d'échange sur votre projet : vous savez
              exactement ce que vous payez, et pourquoi. Le détail de cette approche est expliqué sur la page{' '}
              <Link href="/tarifs-creation-site-internet">tarifs</Link>.
            </p>

            <h2>Un site est un investissement, pas une dépense</h2>
            <p>
              La bonne question n'est pas «&nbsp;quel est le prix le plus bas&nbsp;?&nbsp;» mais «&nbsp;combien ce
              site va-t-il me rapporter&nbsp;?&nbsp;». Une seule demande de devis convertie couvre souvent une
              large part du budget. Un site bien conçu vous positionne au bon niveau face à vos concurrents à
              Bordeaux et en Gironde, et continue de travailler pendant des années. Pour comprendre l'ensemble de
              la démarche, voir la page{' '}
              <Link href="/creation-site-internet-bordeaux">création de site internet à Bordeaux</Link>.
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
                Obtenir une estimation pour votre projet <ArrowRight size={16} />
              </Link>
            </p>
          </div>
        </section>

        <CtaBlock title="Un budget en tête pour votre site ?" />
      </PageShell>
    </>
  );
}

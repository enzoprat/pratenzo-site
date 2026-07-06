import Link from 'next/link';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Tarif création site internet Bordeaux | Comprendre le prix d\u2019un site web | Prat Enzo',
  description:
    "Quel budget prévoir pour un site internet à Bordeaux ? Découvrez les facteurs qui influencent le prix d'un site vitrine, e-commerce ou click & collect.",
  path: '/tarifs-creation-site-internet'
});

const breadcrumb = [{ name: 'Tarifs', path: '/tarifs-creation-site-internet' }];

const tarifsFaq = [
  {
    q: 'Combien coûte la création d\u2019un site internet ?',
    a: "Un site professionnel conçu pour générer des demandes représente un investissement de plusieurs milliers d'euros, pas un site low-cost jetable. Le tarif exact dépend du type de site, du nombre de pages, du contenu et des fonctionnalités. Une estimation gratuite est proposée après analyse du projet."
  },
  {
    q: 'Y a-t-il des frais cachés ?',
    a: "Non. Le devis est clair et détaillé : ce qui est convenu au départ est ce qui sera facturé. Les éventuelles évolutions après livraison sont traitées en supplément, sur demande."
  },
  {
    q: 'Quel mode de paiement ?',
    a: "Le paiement peut être effectué par virement ou espèces. Un acompte de 40% est demandé au démarrage du projet."
  },
  {
    q: 'Le nom de domaine et l\u2019hébergement sont-ils inclus ?',
    a: "Le nom de domaine reste à la charge du client. L'hébergement, la maintenance et les évolutions peuvent être proposés séparément selon les besoins du projet."
  }
];

export default function TarifsPage() {
  const wp = buildWebPageSchema({ path: '/tarifs-creation-site-internet', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(tarifsFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Tarifs"
        h1={<>Combien coûte la création d'un <strong>site internet à Bordeaux</strong> ?</>}
        sub="Comprendre les facteurs qui influencent le prix d'un site, sans approximation ni promesse non tenable. Un devis clair, adapté à votre projet."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un investissement, pas une dépense</h2>
            <p>
              Un site professionnel qui présente votre activité, rassure vos prospects et vous amène des demandes
              qualifiées est un investissement de <strong>plusieurs milliers d'euros</strong>, pas un site à quelques
              centaines d'euros bâclé sur un template générique. C'est ce niveau d'exigence qui distingue un site qui
              travaille pour vous d'une simple présence en ligne oubliée.
            </p>
            <p>
              L'objectif n'est pas d'être le moins cher : c'est de créer un site rentable, conçu sur mesure, qui
              vous positionne au bon niveau face à vos concurrents et qui dure.
            </p>

            <h2>Pourquoi pas de prix fixes affichés ?</h2>
            <p>
              Les sites « à partir de X € » sont rarement justes : ils créent soit une mauvaise surprise au moment du
              devis détaillé, soit un site bâclé pour respecter le prix d'appel. La création d'un site internet
              dépend de beaucoup de facteurs concrets, et un vrai devis demande quelques minutes de discussion sur le
              projet. Vous savez exactement ce que vous payez, et pourquoi.
            </p>

            <h2>Les facteurs qui influencent le prix</h2>
            <ul>
              <li><strong>Le type de site</strong> : un site vitrine simple n'a pas le même coût qu'un site e-commerce Shopify complet.</li>
              <li><strong>Le nombre de pages</strong> : plus il y a de pages, plus le travail de structure et de contenu est important.</li>
              <li><strong>Le design</strong> : un site avec une direction artistique sur mesure, des animations et des éléments graphiques avancés demande plus de travail.</li>
              <li><strong>La rédaction des contenus</strong> : si les textes sont fournis, le travail est moindre. S'il faut les rédiger, c'est un service supplémentaire.</li>
              <li><strong>Les photos</strong> : photos fournies, achat de banque d'images ou shooting dédié influencent le budget.</li>
              <li><strong>Les fonctionnalités</strong> : formulaire simple, formulaire multi-étapes, système de réservation, boutique en ligne, espace client…</li>
              <li><strong>Le formulaire</strong> : un simple formulaire de contact est inclus, des intégrations avancées (CRM, Mailchimp, Zapier) demandent plus de travail.</li>
              <li><strong>Le e-commerce</strong> : nombre de produits, structure du catalogue, tunnel d'achat, paiement, livraison.</li>
              <li><strong>La maintenance</strong> : à la livraison ou en abonnement mensuel selon les besoins.</li>
              <li><strong>L'hébergement</strong> : peut être inclus dans une offre ou pris en charge par le client.</li>
              <li><strong>Le nom de domaine</strong> : à la charge du client mais accompagnement possible pour le choix et la configuration.</li>
              <li><strong>Les modifications après livraison</strong> : traitées en supplément à la demande.</li>
            </ul>

            <h2>Engagement</h2>
            <p>
              Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités
              souhaitées. <strong>Une estimation peut être proposée après analyse du projet</strong>, gratuitement et
              sans engagement. Ce qui est convenu au départ est ce qui sera facturé : aucun frais caché.
            </p>

            <h2>Mode de paiement</h2>
            <p>Le paiement peut être effectué par virement ou espèces. Un acompte de 40% est demandé au démarrage du projet.</p>

            <h2>Foire aux questions sur les tarifs</h2>
            {tarifsFaq.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <p style={{ marginTop: 30 }}>
              <Link href="/contact" className="btn btn--primary">
                Demander un devis personnalisé →
              </Link>
            </p>
          </div>
        </section>

        <CtaBlock title="Obtenir une estimation pour votre site" />
      </PageShell>
    </>
  );
}

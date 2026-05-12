import Link from 'next/link';
import {
  buildMetadata,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildFaqSchema
} from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'SEO Bordeaux | Référencement local pour artisans et commerces | Prat Enzo',
  description:
    "SEO local à Bordeaux : optimisation site, fiche Google Business, contenus locaux et maillage pour ressortir sur les requêtes locales en Gironde.",
  path: '/seo-bordeaux'
});

const breadcrumb = [{ name: 'SEO Bordeaux', path: '/seo-bordeaux' }];

const seoFaq = [
  {
    q: 'Combien de temps pour voir les résultats SEO ?',
    a: "Le SEO local demande en général entre 2 et 6 mois pour produire des résultats stables, selon la concurrence du secteur et l'état initial du site. Les premiers gains de visibilité peuvent apparaître dès les premières semaines après une optimisation technique."
  },
  {
    q: 'Garantissez-vous un top 1 Google ?',
    a: "Non. Aucun professionnel sérieux ne peut garantir une position précise sur Google : les résultats dépendent de l'algorithme, de la concurrence et de plusieurs facteurs hors de notre contrôle. L'engagement porte sur la qualité du travail effectué et les bonnes pratiques mises en place."
  },
  {
    q: 'Faut-il refaire mon site pour le SEO ?',
    a: "Pas systématiquement. Si la structure technique du site existant est correcte, des optimisations on-page et un travail de contenu peuvent suffire. Une refonte complète est conseillée si le site est obsolète techniquement ou structurellement."
  },
  {
    q: 'Le SEO local fonctionne-t-il pour un artisan ?',
    a: "Oui, c'est même un des leviers les plus efficaces pour les artisans. Une fiche Google Business optimisée, un site clair avec zones d'intervention bien définies et quelques avis clients suffisent souvent à ressortir sur des requêtes locales (par exemple « plombier Bordeaux » ou « couvreur Mérignac »)."
  },
  {
    q: 'Combien coûte un accompagnement SEO ?',
    a: "Le tarif dépend de l'état initial du site, du périmètre de l'accompagnement et de la durée. Une estimation peut être proposée après audit. Aucun frais caché : ce qui est convenu au départ est ce qui sera facturé."
  }
];

export default function SeoBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/seo-bordeaux', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const svc = buildServiceSchema({
    name: 'SEO local Bordeaux',
    description: 'Optimisation SEO locale pour artisans, commerces et entreprises de Bordeaux et de la Gironde.',
    slug: 'site-vitrine-bordeaux', // schéma rattaché au service vitrine
    areaServed: ['Bordeaux', 'Mérignac', 'Pessac', 'Talence', 'Gironde']
  });
  const faq = buildFaqSchema(seoFaq);

  return (
    <>
      <JsonLd data={[wp, bc, svc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="SEO local"
        h1={<><strong>SEO Bordeaux</strong> : être trouvé localement sur Google</>}
        sub="Le référencement local n'est plus une option pour un professionnel à Bordeaux. Un site bien structuré, une fiche Google Business cohérente et des contenus orientés zones d'intervention permettent de ressortir sur les requêtes locales et de générer des demandes qualifiées."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Pourquoi le SEO local est essentiel à Bordeaux</h2>
            <p>
              À Bordeaux et en Gironde, la majorité des clients passent par Google ou Google Maps avant de
              contacter un professionnel. Un site qui apparaît sur les premières positions des requêtes
              locales reçoit naturellement la majorité des appels et formulaires. Inversement, un site
              invisible perd ses prospects au profit de concurrents mieux référencés.
            </p>
            <p>
              Le SEO local repose sur trois piliers : la qualité du site (structure, performances, contenus
              adaptés), la fiche Google Business Profile, et la cohérence du nom, de l'adresse et du téléphone
              partout où ces informations apparaissent en ligne.
            </p>

            <h2>Les leviers du SEO local</h2>
            <ul>
              <li>
                <strong>Structure du site</strong> : une page d'accueil claire, des pages services dédiées
                (vitrine, e-commerce, click & collect…), et des pages par zone d'intervention (Bordeaux,
                Mérignac, Pessac…)
              </li>
              <li>
                <strong>Contenu local</strong> : mention explicite des villes desservies, des spécificités
                locales, des projets réalisés en Gironde
              </li>
              <li>
                <strong>Fiche Google Business Profile</strong> : catégorie correcte, zone d'intervention,
                photos, horaires, services proposés
              </li>
              <li>
                <strong>Maillage interne</strong> : liens entre pages services, pages villes, pages métiers
                pour faire circuler le « jus SEO »
              </li>
              <li>
                <strong>Balises techniques</strong> : title tags optimisés, meta descriptions, données
                structurées (LocalBusiness, FAQPage, Breadcrumb)
              </li>
              <li>
                <strong>Performance</strong> : temps de chargement, mobile-first, Core Web Vitals
              </li>
              <li>
                <strong>Backlinks locaux</strong> : annuaires CCI Bordeaux, partenaires locaux, presse
                régionale
              </li>
            </ul>

            <h2>Comment se déroule un accompagnement SEO</h2>
            <p>
              Le travail SEO démarre toujours par un <strong>audit technique et concurrentiel</strong> : état
              du site existant, requêtes ciblées, concurrents directs, opportunités. Sur cette base, un plan
              d'action est proposé avec des actions priorisées par impact et effort.
            </p>
            <p>
              Les optimisations on-page (balises, structure, contenus, maillage interne) sont mises en œuvre,
              puis le travail continue sur le contenu (nouvelles pages, articles guides, optimisations
              continues) et les signaux off-page (Google Business, backlinks).
            </p>

            <h2>Cibles accompagnées</h2>
            <ul>
              <li><Link href="/site-internet-artisan-bordeaux">Artisans</Link> (couvreurs, plombiers, électriciens, peintres, menuisiers)</li>
              <li>Commerces de proximité (boulangeries, instituts, restaurants)</li>
              <li>Indépendants et prestataires de services</li>
              <li>E-commerce locaux et marques bordelaises</li>
              <li>Entreprises avec plusieurs zones d'intervention en Gironde</li>
            </ul>

            <h2>Zones de référencement</h2>
            <p>
              L'accompagnement SEO couvre Bordeaux et toute la Gironde : Mérignac, Pessac, Talence, Bègles,
              Cenon, Lormont, Floirac, Gradignan, Villenave-d'Ornon, Libourne, Arcachon, Bassin d'Arcachon.
              Voir aussi la page <Link href="/creation-site-internet-gironde">Création de site en Gironde</Link>.
            </p>

            <h2>Services liés</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Création de site vitrine Bordeaux</Link></li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte de site internet</Link></li>
              <li><Link href="/creation-site-internet-bordeaux">Création de site internet Bordeaux</Link></li>
              <li><Link href="/agence-web-bordeaux">Agence web Bordeaux</Link></li>
            </ul>

            <h2>Questions fréquentes</h2>
            {seoFaq.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBlock title="Booster votre visibilité locale sur Google" />
      </PageShell>
    </>
  );
}

import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema
} from '@/app/lib/seo';
import { getServiceBySlug } from '@/app/lib/data/services';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import ServiceDetail from '@/app/components/shared/ServiceDetail';
import CtaBlock from '@/app/components/shared/CtaBlock';

const service = getServiceBySlug('refonte-site-internet-bordeaux');

export const metadata = buildMetadata({
  title: 'Refonte site internet Bordeaux | Moderniser votre site pro',
  description: service.metaDescription,
  path: '/services/refonte-site-internet-bordeaux'
});

const breadcrumb = [
  { name: 'Services', path: '/services' },
  { name: 'Refonte de site Bordeaux', path: '/services/refonte-site-internet-bordeaux' }
];

const content = {
  intro: [
    "Votre site actuel a quelques années, n'est pas responsive, n'apparaît pas dans Google, ne reflète plus votre activité ? La refonte permet de moderniser le design, repenser la structure, améliorer les performances et préparer le SEO sans repartir de zéro.",
    "Une refonte Prat Enzo est plus qu'un changement de design : c'est un audit complet de l'existant, une nouvelle architecture pensée pour la conversion, une migration propre des contenus, et une base SEO renforcée."
  ],
  process: [
    "Le projet démarre par un audit du site existant : structure, performances, mots-clés, points de friction. Sur cette base, une nouvelle arborescence est définie, le design retravaillé, les contenus migrés ou réécrits.",
    "Les URLs existantes sont conservées autant que possible, ou redirigées proprement (301) pour éviter de perdre la visibilité acquise."
  ],
  local: [
    "Pour les entreprises bordelaises et girondines qui ont déjà un site mais peinent à se positionner localement, la refonte est l'occasion de repenser le SEO local : balises adaptées, contenus orientés zones, fiche Google Business cohérente, maillage interne.",
    "Une refonte bien menée permet souvent de débloquer des positions Google qui stagnaient avec l'ancien site."
  ],
  faq: [
    {
      q: 'Vais-je perdre ma visibilité Google avec la refonte ?',
      a: "Non, à condition que les redirections soient bien gérées. Chaque ancienne URL est redirigée vers la nouvelle équivalente (301). Le nouveau site est ensuite généralement mieux référencé que l'ancien."
    },
    {
      q: 'Combien de temps prend une refonte ?',
      a: "Cela dépend de la taille du site existant et des nouveaux contenus. Une refonte simple peut être livrée rapidement, une refonte complexe demande davantage de travail."
    },
    {
      q: 'Faut-il refaire mes contenus ?',
      a: "Pas nécessairement. Les contenus existants peuvent être repris s'ils sont de qualité, ou retravaillés selon le besoin."
    }
  ],
  relatedServices: [
    {
      path: '/services/site-vitrine-bordeaux',
      title: 'Site vitrine Bordeaux',
      sub: 'Si vous voulez plutôt repartir d\u2019un site neuf complet.'
    },
    {
      path: '/services/site-ecommerce-shopify-bordeaux',
      title: 'Refonte vers Shopify',
      sub: 'Si votre boutique actuelle ne suit pas votre croissance.'
    }
  ],
  relatedRealisations: []
};

export default function RefonteBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/services/refonte-site-internet-bordeaux', title: metadata.title, description: metadata.description });
  const svc = buildServiceSchema({
    name: 'Refonte de site internet à Bordeaux',
    description: service.metaDescription,
    slug: 'refonte-site-internet-bordeaux'
  });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, svc, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Service · Refonte"
        h1={<><strong>Refonte de site internet</strong> à Bordeaux</>}
        sub={service.description}
      >
        <ServiceDetail service={service} content={content} />
        <CtaBlock title="Refondre votre site existant" />
      </PageShell>
    </>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/app/lib/seo';
import { faqHome } from '@/app/lib/data/faq';
import { realisations } from '@/app/lib/data/realisations';
import { locations } from '@/app/lib/data/locations';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  // Title raccourci : 58 caractères, intention locale claire.
  // L'ancien title dépassait 85 caractères et était tronqué dans la SERP.
  title: 'Création de site internet à Bordeaux pour artisans et pros',
  description:
    "Création de site internet à Bordeaux : vitrine, e-commerce Shopify, click & collect et refonte. Pour artisans, commerces, indépendants et entreprises locales.",
  path: '/creation-site-internet-bordeaux'
});

const breadcrumb = [{ name: 'Création site internet Bordeaux', path: '/creation-site-internet-bordeaux' }];

const localFaq = [
  faqHome.find(f => f.q.includes('Bordeaux')),
  faqHome.find(f => f.q.includes('artisans')),
  faqHome.find(f => f.q.includes('mobile')),
  faqHome.find(f => f.q.includes('coûte')),
  faqHome.find(f => f.q.includes('domaine'))
].filter(Boolean);

export default function CreationSiteInternetBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/creation-site-internet-bordeaux', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(localFaq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Bordeaux · Page locale"
        h1={<><strong>Création de site internet</strong> à Bordeaux</>}
        sub="Prat Enzo conçoit des sites professionnels pour les artisans, indépendants, commerces et entreprises de Bordeaux et de la Gironde. Sites vitrines, e-commerce Shopify, click & collect et refonte."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Pourquoi un site internet quand on est à Bordeaux ?</h2>
            <p>
              Bordeaux est une métropole en plein développement, avec un tissu d'artisans, de commerces et
              d'entrepreneurs particulièrement dynamique. Les prospects locaux passent désormais quasi-systématiquement
              par Google, les réseaux sociaux ou une fiche Google Business avant de prendre contact.
            </p>
            <p>
              Sans site internet clair, vous laissez ce premier filtre à vos concurrents. Avec un site bien structuré,
              vous transformez ce contact initial en demande qualifiée.
            </p>

            <h2>Les types de sites créés à Bordeaux</h2>
            <ul>
              <li><Link href="/services/site-vitrine-bordeaux">Site vitrine Bordeaux</Link> — pour présenter votre activité, vos services et générer des demandes de contact.</li>
              <li><Link href="/services/site-ecommerce-shopify-bordeaux">Site e-commerce Shopify Bordeaux</Link> — pour les marques et commerces qui veulent vendre en ligne.</li>
              <li><Link href="/services/click-and-collect-bordeaux">Click & collect Bordeaux</Link> — pour les commerces de proximité.</li>
              <li><Link href="/services/refonte-site-internet-bordeaux">Refonte de site internet</Link> — pour moderniser un site existant.</li>
            </ul>

            <h2>Pour qui ?</h2>
            <ul>
              <li><Link href="/site-internet-artisan-bordeaux">Artisans bordelais</Link> : couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes</li>
              <li>Indépendants : coachs, thérapeutes, consultants, prestataires</li>
              <li>Commerces locaux : boutiques, restaurants, instituts</li>
              <li>Entreprises locales en quête de crédibilité en ligne</li>
              <li>Porteurs de projets : lancement, refonte, nouvelle activité</li>
            </ul>

            <h2>Une approche locale</h2>
            <p>
              Travailler avec un concepteur basé à Bordeaux et habitué aux problématiques locales facilite la
              compréhension de votre marché, des attentes de vos clients et des codes du territoire. Les références
              locales, les zones desservies et le SEO local sont pris en compte dès la conception du site.
            </p>

            <h2>Tarifs et délais</h2>
            <p>
              Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités
              souhaitées. Une <Link href="/tarifs-creation-site-internet">estimation détaillée</Link> peut être proposée
              après analyse du projet. Aucun frais caché : ce qui est convenu au départ est ce qui sera facturé.
            </p>

            <h2>Réalisations à Bordeaux et en Gironde</h2>
            <p>Quelques projets récents :</p>
            <div className="related-links">
              {realisations.slice(0, 3).map(r => (
                <Link key={r.slug} href={`/realisations/${r.slug}`} className="related-link">
                  <span className="related-link__cat">{r.category}</span>
                  <span className="related-link__title">{r.name}</span>
                  <span className="related-link__sub">{r.description.slice(0, 90)}…</span>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/realisations">Voir toutes les réalisations <ArrowRight size={14} style={{ verticalAlign: 'middle' }} /></Link>
            </p>

            <h2>Zones desservies depuis Bordeaux</h2>
            <p>
              Au-delà de Bordeaux intra-muros, les projets sont également réalisés pour les communes
              de la métropole et de tout le département : {locations.filter(l => !l.isPrimary).map(l => l.name).join(', ')},
              ainsi que sur l'ensemble de la <Link href="/creation-site-internet-gironde">Gironde</Link> et
              à distance selon les besoins.
            </p>
            <p>
              Pages locales dédiées disponibles pour
              <Link href="/creation-site-internet-merignac"> Mérignac</Link>,
              <Link href="/creation-site-internet-pessac"> Pessac</Link>,
              <Link href="/creation-site-internet-arcachon"> Arcachon</Link>,
              <Link href="/creation-site-internet-lege-cap-ferret"> Lège-Cap-Ferret</Link>,
              <Link href="/creation-site-internet-ambares-et-lagrave"> Ambarès-et-Lagrave</Link>,
              <Link href="/creation-site-internet-artigues-pres-bordeaux"> Artigues-près-Bordeaux</Link> et
              <Link href="/creation-site-internet-marcheprime"> Marcheprime</Link>.
            </p>

            <h2>Questions fréquentes</h2>
            {localFaq.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBlock title="Démarrer votre projet à Bordeaux" />
      </PageShell>
    </>
  );
}

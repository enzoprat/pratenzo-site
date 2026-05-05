import Link from 'next/link';
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema, buildServiceSchema } from '@/app/lib/seo';
import { realisations } from '@/app/lib/data/realisations';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

export const metadata = buildMetadata({
  title: 'Site internet artisan Bordeaux | Couvreurs, plombiers, électriciens | Prat Enzo',
  description:
    "Création de site internet pour artisans à Bordeaux : couvreurs, plombiers, électriciens, peintres, menuisiers. Site vitrine pensé pour rassurer et générer des demandes de devis.",
  path: '/site-internet-artisan-bordeaux'
});

const breadcrumb = [{ name: 'Site internet artisan Bordeaux', path: '/site-internet-artisan-bordeaux' }];

const artisanReals = realisations.filter(r =>
  ['castagne-couverture', 'couverture-gironde', 'sm-couverture-pau'].includes(r.slug)
);

export default function SiteArtisanBordeauxPage() {
  const wp = buildWebPageSchema({ path: '/site-internet-artisan-bordeaux', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const svc = buildServiceSchema({
    name: 'Création de site internet pour artisan à Bordeaux',
    description: 'Site vitrine professionnel pour artisans : couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes.',
    slug: 'site-vitrine-bordeaux',
    areaServed: ['Bordeaux', 'Gironde']
  });

  return (
    <>
      <JsonLd data={[wp, bc, svc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Persona · Artisans"
        h1={<><strong>Site internet artisan</strong> à Bordeaux</>}
        sub="Pour les couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes et entreprises du bâtiment de Bordeaux et de la Gironde : un site vitrine pensé pour rassurer les prospects et générer des demandes de devis."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="prose">
            <h2>Un site fait pour la réalité d'un artisan</h2>
            <p>
              Un artisan qui cherche un site internet n'a pas besoin d'un site complexe. Il a besoin d'un support
              professionnel qui rassure le prospect en quelques secondes, présente clairement ses prestations, ses zones
              d'intervention et facilite l'appel ou la demande de devis.
            </p>
            <p>
              Le site vitrine artisan Prat Enzo est structuré exactement autour de ces priorités : présentation
              claire, photos avant/après, zones d'intervention détaillées, formulaire de devis et boutons d'appel
              direct.
            </p>

            <h2>Métiers accompagnés</h2>
            <ul>
              <li>Couvreurs et zingueurs</li>
              <li>Plombiers et chauffagistes</li>
              <li>Électriciens</li>
              <li>Peintres et façadiers</li>
              <li>Menuisiers</li>
              <li>Paysagistes</li>
              <li>Maçons</li>
              <li>Carreleurs</li>
              <li>Entreprises de nettoyage</li>
            </ul>

            <h2>Ce qui est inclus pour un site artisan</h2>
            <ul>
              <li>Présentation de l'entreprise et de l'équipe</li>
              <li>Liste détaillée des prestations</li>
              <li>Galerie chantiers réalisés (photos avant/après)</li>
              <li>Zones d'intervention claires (Bordeaux et communes desservies)</li>
              <li>Formulaire de demande de devis</li>
              <li>Boutons d'appel direct depuis mobile</li>
              <li>Liens vers Google Business et avis</li>
              <li>Optimisation SEO local</li>
            </ul>

            <h2>SEO local pour artisans</h2>
            <p>
              Pour un artisan, les requêtes les plus rentables sont locales : « couvreur Bordeaux », « plombier
              Mérignac », « électricien Pessac ». Un site bien structuré, avec des contenus orientés zones, des
              balises adaptées et une fiche Google Business cohérente, permet de remonter sur ces requêtes.
            </p>
            <p>
              Le site peut être complété par des pages dédiées par ville ou par prestation pour aller plus loin sur le
              SEO local.
            </p>

            <h2>Réalisations dans le bâtiment</h2>
            <div className="related-links">
              {artisanReals.map(r => (
                <Link key={r.slug} href={`/realisations/${r.slug}`} className="related-link">
                  <span className="related-link__cat">{r.category}</span>
                  <span className="related-link__title">{r.name}</span>
                  <span className="related-link__sub">{r.description.slice(0, 90)}…</span>
                </Link>
              ))}
            </div>

            <h2>Foire aux questions</h2>
            <h3>Combien coûte un site pour artisan ?</h3>
            <p>Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.</p>

            <h3>Faut-il que je prenne les photos moi-même ?</h3>
            <p>Vos photos de chantiers (avant/après) sont les plus parlantes. Si vous n'en avez pas encore, des photos plus simples peuvent être utilisées en attendant.</p>

            <h3>Le site fonctionne-t-il pour des prospects qui m'appellent depuis leur téléphone ?</h3>
            <p>Oui, le site est conçu mobile-first. Un bouton d'appel est mis en évidence pour faciliter les prises de contact directes depuis un smartphone.</p>
          </div>
        </section>

        <CtaBlock title="Lancer votre site artisan" />
      </PageShell>
    </>
  );
}

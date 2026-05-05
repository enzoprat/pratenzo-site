import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';

export const metadata = buildMetadata({
  title: 'Mentions légales | Prat Enzo',
  description: 'Mentions légales du site Prat Enzo, création de sites internet à Bordeaux.',
  path: '/mentions-legales'
});

const breadcrumb = [{ name: 'Mentions légales', path: '/mentions-legales' }];

export default function MentionsLegalesPage() {
  const wp = buildWebPageSchema({ path: '/mentions-legales', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Légal"
        h1="Mentions légales"
        sub="Informations légales relatives à l'éditeur du site."
      >
        <section className="container" style={{ paddingBottom: 80 }}>
          <div className="prose">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Prat Enzo</strong><br />
              [Statut juridique à compléter]<br />
              [Adresse à compléter]<br />
              SIRET : [à compléter]<br />
              Email : à demander via le formulaire de contact
            </p>

            <h2>Responsable de la publication</h2>
            <p>Enzo Prat</p>

            <h2>Hébergeur</h2>
            <p>
              Le site est hébergé par Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>Nom de domaine</h2>
            <p>Le nom de domaine est enregistré auprès d'un registrar partenaire (OVH ou équivalent).</p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site (textes, images, structure, code) est la propriété de Prat Enzo, sauf
              mention contraire. Toute reproduction, représentation, modification, publication, transmission ou
              exploitation de tout ou partie du site, sans autorisation écrite préalable, est interdite et constitue
              une contrefaçon au sens des articles L335-2 et suivants du Code de la propriété intellectuelle.
            </p>

            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Prat Enzo n'exerce aucun contrôle sur ces sites et
              ne peut être tenu responsable de leur contenu.
            </p>

            <h2>Contact</h2>
            <p>Pour toute question relative à ces mentions légales, vous pouvez utiliser le formulaire de contact.</p>
          </div>
        </section>
      </PageShell>
    </>
  );
}

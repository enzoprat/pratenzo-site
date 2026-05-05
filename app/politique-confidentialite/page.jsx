import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';

export const metadata = buildMetadata({
  title: 'Politique de confidentialité | Prat Enzo',
  description: 'Politique de confidentialité du site Prat Enzo : utilisation des données et formulaires de contact.',
  path: '/politique-confidentialite'
});

const breadcrumb = [{ name: 'Politique de confidentialité', path: '/politique-confidentialite' }];

export default function ConfidentialitePage() {
  const wp = buildWebPageSchema({ path: '/politique-confidentialite', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Confidentialité"
        h1="Politique de confidentialité"
        sub="Comment vos données sont collectées, utilisées et protégées sur ce site."
      >
        <section className="container" style={{ paddingBottom: 80 }}>
          <div className="prose">
            <h2>Données collectées</h2>
            <p>
              Lorsque vous utilisez le formulaire de contact, les données suivantes peuvent être collectées : nom,
              nom de l'entreprise, email, téléphone, type de projet, activité, services proposés, zones d'intervention,
              message. Ces données sont collectées exclusivement pour traiter votre demande.
            </p>

            <h2>Finalité du traitement</h2>
            <p>
              Les données du formulaire sont utilisées uniquement pour répondre à votre demande de contact, vous
              proposer un échange et éventuellement une estimation pour votre projet de site internet.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Les données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à
              partir du dernier contact. Au-delà, elles sont supprimées sauf accord explicite pour les conserver.
            </p>

            <h2>Partage des données</h2>
            <p>
              Vos données ne sont jamais vendues ni partagées avec des tiers à des fins commerciales. Le formulaire
              utilise le service Web3Forms pour transmettre les emails. Web3Forms agit comme sous-traitant et ne
              conserve les données que le temps de la transmission.
            </p>

            <h2>Cookies</h2>
            <p>
              Le site utilise un nombre minimal de cookies, principalement pour la mesure d'audience anonymisée et le
              bon fonctionnement de l'interface. Aucun cookie publicitaire ou de profilage n'est déposé sans
              consentement.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition
              concernant vos données personnelles. Vous pouvez exercer ces droits en utilisant le formulaire de
              contact en précisant votre demande.
            </p>

            <h2>Sécurité</h2>
            <p>
              Le site est servi en HTTPS, hébergé sur une infrastructure professionnelle (Vercel) et utilise des
              en-têtes de sécurité standards (HSTS, X-Frame-Options, Content-Security-Policy).
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative à cette politique ou au traitement de vos données, utilisez le formulaire
              de contact.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}

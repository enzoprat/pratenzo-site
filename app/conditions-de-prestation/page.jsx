import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';

export const metadata = buildMetadata({
  title: 'Conditions de prestation | Prat Enzo',
  description: 'Conditions générales de prestation pour la création de sites internet par Prat Enzo.',
  path: '/conditions-de-prestation'
});

const breadcrumb = [{ name: 'Conditions de prestation', path: '/conditions-de-prestation' }];

export default function CGVPage() {
  const wp = buildWebPageSchema({ path: '/conditions-de-prestation', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Légal"
        h1="Conditions de prestation"
        sub="Cadre des prestations de création de sites internet réalisées par Prat Enzo."
      >
        <section className="container" style={{ paddingBottom: 80 }}>
          <div className="prose">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions définissent le cadre des prestations de création de sites internet, refonte,
              maintenance et accompagnement réalisées par Prat Enzo pour ses clients professionnels.
            </p>

            <h2>2. Devis</h2>
            <p>
              Toute prestation fait l'objet d'un devis préalable validé par le client. Le devis détaille la nature de
              la prestation, le périmètre, les délais et le prix. Aucune prestation n'est engagée sans devis signé.
            </p>

            <h2>3. Acompte et paiement</h2>
            <p>
              Un acompte de 40% est demandé au démarrage du projet. Le solde est dû à la livraison ou selon un
              échéancier convenu dans le devis. Le paiement peut être effectué par virement ou espèces.
            </p>

            <h2>4. Délais</h2>
            <p>
              Les délais sont indiqués à titre indicatif et dépendent de la fourniture des éléments par le client
              (textes, photos, logo, accès). Tout retard côté client peut décaler le planning.
            </p>

            <h2>5. Validation et livraison</h2>
            <p>
              Le site est présenté au client pour validation avant mise en ligne. Une fois la mise en ligne réalisée,
              le projet est considéré comme livré. Les modifications postérieures sont traitées en supplément.
            </p>

            <h2>6. Modifications après livraison</h2>
            <p>
              Toute modification après livraison fait l'objet d'un devis complémentaire. Les évolutions, ajouts de
              pages ou refontes partielles sont chiffrés selon le besoin.
            </p>

            <h2>7. Hébergement et nom de domaine</h2>
            <p>
              Le nom de domaine reste à la charge du client. L'hébergement, la maintenance et le suivi peuvent être
              proposés séparément selon les besoins du projet.
            </p>

            <h2>8. Propriété</h2>
            <p>
              Une fois le solde réglé, le client est propriétaire du site livré. Prat Enzo conserve le droit de citer
              la prestation comme référence dans son portfolio.
            </p>

            <h2>9. Responsabilité</h2>
            <p>
              Prat Enzo s'engage à mettre en œuvre tous les moyens nécessaires à la bonne réalisation de la
              prestation. La responsabilité ne saurait être engagée pour les contenus fournis par le client, les
              services tiers utilisés ou des problèmes techniques liés à des prestataires extérieurs (hébergeur,
              registrar, plateformes).
            </p>

            <h2>10. Contact</h2>
            <p>Pour toute question, utilisez le formulaire de contact du site.</p>
          </div>
        </section>
      </PageShell>
    </>
  );
}

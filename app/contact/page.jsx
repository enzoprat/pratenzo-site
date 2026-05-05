import { buildMetadata, buildContactSchema, buildBreadcrumbSchema } from '@/app/lib/seo';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import ContactForm from '@/app/components/forms/ContactForm';

export const metadata = buildMetadata({
  title: 'Contact | Prat Enzo, création de sites internet à Bordeaux',
  description:
    "Décrivez votre projet de site internet via le formulaire. Réponse rapide en jours ouvrés. Bordeaux, Gironde et à distance selon les besoins.",
  path: '/contact'
});

const breadcrumb = [{ name: 'Contact', path: '/contact' }];

export default function ContactPage() {
  const contact = buildContactSchema({ path: '/contact', title: metadata.title, description: metadata.description });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[contact, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Contact"
        h1={<>Discutons de <strong>votre projet</strong></>}
        sub="4 étapes courtes pour décrire votre besoin. Plus vous donnez d'informations, plus la première réponse sera précise. Réponse rapide en jours ouvrés."
      >
        <ContactForm />
      </PageShell>
    </>
  );
}

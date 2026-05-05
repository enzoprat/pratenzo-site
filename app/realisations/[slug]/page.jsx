import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, Target, AlertTriangle, Wrench, Layers, Sparkles, Palette } from 'lucide-react';
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildCreativeWorkSchema,
  buildWebPageSchema
} from '@/app/lib/seo';
import {
  realisations,
  getRealisationBySlug,
  getRelatedRealisations
} from '@/app/lib/data/realisations';
import { getServiceBySlug } from '@/app/lib/data/services';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

const screenshot = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1000&h=625`;

export function generateStaticParams() {
  return realisations.map(r => ({ slug: r.slug }));
}

export function generateMetadata({ params }) {
  const r = getRealisationBySlug(params.slug);
  if (!r) {
    return { title: 'Réalisation introuvable' };
  }
  return buildMetadata({
    title: `${r.name} — ${r.category} | Réalisation Prat Enzo`,
    description: r.description,
    path: `/realisations/${r.slug}`
  });
}

export default function RealisationDetailPage({ params }) {
  const r = getRealisationBySlug(params.slug);
  if (!r) notFound();

  const breadcrumb = [
    { name: 'Réalisations', path: '/realisations' },
    { name: r.name, path: `/realisations/${r.slug}` }
  ];

  const related = getRelatedRealisations(r.slug, 2);
  const linkedService = getServiceBySlug(r.serviceSlug);

  const wp = buildWebPageSchema({
    path: `/realisations/${r.slug}`,
    title: `${r.name} — ${r.category}`,
    description: r.description
  });
  const cw = buildCreativeWorkSchema({
    slug: r.slug,
    name: r.name,
    description: r.description,
    sameAs: r.url
  });
  const bc = buildBreadcrumbSchema(breadcrumb);

  return (
    <>
      <JsonLd data={[wp, cw, bc]} />
      <main>
        <div className="container">
          <div style={{ paddingTop: 0 }}>
            <nav className="breadcrumbs" aria-label="Fil d'Ariane">
              <ol>
                <li><Link href="/">Accueil</Link></li>
                <li>›</li>
                <li><Link href="/realisations">Réalisations</Link></li>
                <li>›</li>
                <li aria-current="page">{r.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="detail-hero">
          <div className="container">
            <span className="detail-hero__cat">{r.category}</span>
            <h1>{r.name}</h1>
            <p className="detail-hero__lead">{r.description}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Voir le site live <ExternalLink size={14} />
              </a>
              <Link href="/contact" className="btn btn--ghost">
                Créer un projet similaire
              </Link>
            </div>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="detail-grid">
            <div className="detail-media">
              <img
                src={screenshot(r.url)}
                alt={`Aperçu du site ${r.name}`}
                width="1000"
                height="625"
                loading="eager"
              />
            </div>

            <div>
              <div className="detail-block">
                <h2><Target size={18} /> Contexte</h2>
                <p>{r.detail.context}</p>
              </div>
              <div className="detail-block">
                <h2><Sparkles size={18} /> Objectif</h2>
                <p>{r.detail.goal}</p>
              </div>
              <div className="detail-block">
                <h2><AlertTriangle size={18} /> Problématique</h2>
                <p>{r.detail.problem}</p>
              </div>
              <div className="detail-block">
                <h2><Wrench size={18} /> Solution</h2>
                <p>{r.detail.solution}</p>
              </div>
              <div className="detail-block">
                <h2><Layers size={18} /> Structure</h2>
                <ul>
                  {r.detail.structure.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="detail-block">
                <h2><Sparkles size={18} /> Fonctionnalités</h2>
                <ul>
                  {r.detail.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="detail-block">
                <h2><Palette size={18} /> Direction artistique</h2>
                <p>{r.detail.art}</p>
              </div>
            </div>
          </div>

          {linkedService && (
            <div style={{ maxWidth: 760, margin: '0 auto 40px' }}>
              <div className="prose">
                <h2>Service associé</h2>
                <p>
                  Ce projet a été réalisé dans le cadre du service{' '}
                  <Link href={`/services/${linkedService.slug}`}>
                    {linkedService.title}
                  </Link>
                  . Vous avez un projet similaire en tête ?
                </p>
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <div className="prose">
                <h2>Autres réalisations similaires</h2>
              </div>
              <div className="related-links">
                {related.map(rr => (
                  <Link key={rr.slug} href={`/realisations/${rr.slug}`} className="related-link">
                    <span className="related-link__cat">{rr.category}</span>
                    <span className="related-link__title">{rr.name}</span>
                    <span className="related-link__sub">{rr.description.slice(0, 90)}…</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <CtaBlock
          title="Créer un projet similaire"
          text="Décrivez votre projet via le formulaire, je reviens vers vous rapidement avec une proposition adaptée à votre activité."
        />
      </main>
    </>
  );
}

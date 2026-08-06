import Link from 'next/link';
import { buildMetadata, buildBreadcrumbSchema } from '@/app/lib/seo';
import { config } from '@/app/lib/config';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';
import VideoCard from '@/app/components/videos/VideoCard';
import { getAllVideos, getThemes } from '@/app/lib/videos';

const PER_PAGE = 20;

export const metadata = buildMetadata({
  title: 'Vidéos — conseils création de site & SEO local | Prat Enzo',
  description:
    "Toutes mes vidéos sur la création de site internet, le SEO local et le web pour artisans et commerces à Bordeaux et en Gironde. YouTube, Instagram, TikTok et LinkedIn réunis.",
  path: '/videos'
});

const breadcrumb = [{ name: 'Vidéos', path: '/videos' }];

const PLATFORMS = [
  { key: 'youtube', label: 'YouTube' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'linkedin', label: 'LinkedIn' }
];

function buildQuery({ theme, plateforme, page }) {
  const p = new URLSearchParams();
  if (theme) p.set('theme', theme);
  if (plateforme) p.set('plateforme', plateforme);
  if (page && page > 1) p.set('page', String(page));
  const s = p.toString();
  return s ? `/videos?${s}` : '/videos';
}

export default async function VideosPage({ searchParams }) {
  const theme = searchParams?.theme || null;
  const plateforme = searchParams?.plateforme || null;
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1);

  const all = await getAllVideos();
  const filtered = all.filter(
    v => (!theme || v.theme === theme) && (!plateforme || v.platform === plateforme)
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const themes = getThemes();
  const bc = buildBreadcrumbSchema(breadcrumb);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${config.baseUrl}/videos#list`,
    name: 'Vidéos Prat Enzo',
    itemListElement: pageItems.map((v, i) => ({
      '@type': 'ListItem',
      position: start + i + 1,
      url: v.url,
      name: v.title
    }))
  };

  return (
    <>
      <JsonLd data={[itemList, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Vidéos"
        h1={<>Mes vidéos sur le <strong>web & le SEO local</strong></>}
        sub="Chaque jour, des conseils courts sur la création de site, le référencement local et le web pour les artisans et commerces de Bordeaux et de Gironde. Retrouvez ici tout ce que je publie sur YouTube, Instagram, TikTok et LinkedIn."
      >
        <section className="container" style={{ paddingBottom: 60 }}>
          <div className="video-filters" aria-label="Filtrer les vidéos">
            <div className="video-filters__row">
              <span className="video-filters__label">Plateforme :</span>
              <Link className={!plateforme ? 'chip chip--on' : 'chip'} href={buildQuery({ theme })}>Toutes</Link>
              {PLATFORMS.map(p => (
                <Link
                  key={p.key}
                  className={plateforme === p.key ? 'chip chip--on' : 'chip'}
                  href={buildQuery({ theme, plateforme: p.key })}
                >
                  {p.label}
                </Link>
              ))}
            </div>
            {themes.length > 0 && (
              <div className="video-filters__row">
                <span className="video-filters__label">Thème :</span>
                <Link className={!theme ? 'chip chip--on' : 'chip'} href={buildQuery({ plateforme })}>Tous</Link>
                {themes.map(t => (
                  <Link
                    key={t}
                    className={theme === t ? 'chip chip--on' : 'chip'}
                    href={buildQuery({ theme: t, plateforme })}
                  >
                    {t}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {pageItems.length === 0 ? (
            <p style={{ color: 'var(--muted)', marginTop: 30 }}>
              Aucune vidéo ne correspond à ce filtre pour l'instant.
            </p>
          ) : (
            <div className="video-grid">
              {pageItems.map(v => (
                <VideoCard key={v.slug} video={v} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className="video-pagination" aria-label="Pagination">
              {current > 1 && (
                <Link className="chip" href={buildQuery({ theme, plateforme, page: current - 1 })}>
                  ← Précédent
                </Link>
              )}
              <span className="video-pagination__count">Page {current} / {totalPages}</span>
              {current < totalPages && (
                <Link className="chip" href={buildQuery({ theme, plateforme, page: current + 1 })}>
                  Suivant →
                </Link>
              )}
            </nav>
          )}
        </section>

        <CtaBlock title="Un projet de site à Bordeaux ?" />
      </PageShell>
    </>
  );
}

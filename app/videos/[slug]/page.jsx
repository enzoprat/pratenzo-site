import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, buildBreadcrumbSchema, buildWebPageSchema } from '@/app/lib/seo';
import { config } from '@/app/lib/config';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';
import VideoCard from '@/app/components/videos/VideoCard';
import { getVideoBySlug, getTranscriptSlugs } from '@/app/lib/videos';

// Seules les vidéos avec une transcription rédigée ont une page dédiée.
// Toute autre URL /videos/... renvoie un 404 propre.
export const dynamicParams = false;

export function generateStaticParams() {
  return getTranscriptSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const v = await getVideoBySlug(params.slug);
  if (!v || !v.transcript) return { title: 'Vidéo introuvable' };
  return buildMetadata({
    title: `${v.title} | Vidéo Prat Enzo`,
    description: v.description || v.transcript.slice(0, 155),
    path: `/videos/${v.slug}`
  });
}

function absolute(url) {
  if (!url) return undefined;
  return url.startsWith('http') ? url : `${config.baseUrl}${url}`;
}

export default async function VideoDetailPage({ params }) {
  const v = await getVideoBySlug(params.slug);
  if (!v || !v.transcript) notFound();

  const breadcrumb = [
    { name: 'Vidéos', path: '/videos' },
    { name: v.title, path: `/videos/${v.slug}` }
  ];

  const wp = buildWebPageSchema({
    path: `/videos/${v.slug}`,
    title: v.title,
    description: v.description
  });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const videoObject = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${config.baseUrl}/videos/${v.slug}#video`,
    name: v.title,
    description: v.description || v.transcript.slice(0, 200),
    thumbnailUrl: absolute(v.thumbnail),
    uploadDate: v.date,
    contentUrl: v.url,
    embedUrl: v.embedUrl || v.url,
    publisher: { '@id': `${config.baseUrl}/#agency` }
  };

  return (
    <>
      <JsonLd data={[videoObject, wp, bc]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow="Vidéo"
        h1={<strong>{v.title}</strong>}
        sub={v.description}
      >
        <section className="container" style={{ paddingBottom: 60, maxWidth: 820 }}>
          <div className="video-detail__player">
            <VideoCard video={v} />
          </div>

          <div className="prose" style={{ marginTop: 40 }}>
            <h2>Transcription</h2>
            {v.transcript.split(/\n{2,}/).map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>

          {v.pageLiee && (
            <p style={{ marginTop: 30 }}>
              Pour aller plus loin :{' '}
              <Link href={v.pageLiee} style={{ color: 'var(--primary)', fontWeight: 600 }}>
                voir la page dédiée
              </Link>
              .
            </p>
          )}

          <p style={{ marginTop: 24 }}>
            <Link href="/videos" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              ← Toutes les vidéos
            </Link>
          </p>
        </section>

        <CtaBlock title="Un projet de site à Bordeaux ?" />
      </PageShell>
    </>
  );
}

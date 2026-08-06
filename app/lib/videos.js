import { XMLParser } from 'fast-xml-parser';
import manualVideos from './data/videos.json';

/*
 * Module unique du hub vidéos.
 * Fusionne deux sources : le flux RSS YouTube (auto) et data/videos.json (manuel),
 * les normalise dans une forme commune, et renvoie une liste triée par date.
 *
 * ID de chaîne stocké en variable d'env (fallback = valeur résolue une fois pour
 * @enzoprat.studio, pour que build/dev fonctionnent même sans env configurée).
 */
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCf395BCK6LDzYjKg-JFPtrw';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

/* Les vidéos antérieures à 2026 (anciennes publications) ne sont pas affichées sur le site. */
const MIN_DATE = new Date('2026-01-01T00:00:00Z');

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

/* Construit l'URL d'embed selon la plateforme. null = pas d'embed fiable → lien sortant. */
function embedFor(platform, url) {
  if (platform === 'instagram') {
    return url.replace(/\/+$/, '') + '/embed';
  }
  if (platform === 'tiktok') {
    const m = url.match(/video\/(\d+)/);
    return m ? `https://www.tiktok.com/embed/v2/${m[1]}` : null;
  }
  // LinkedIn : aucune API/embed public fiable pour les posts perso → lien sortant.
  return null;
}

function normalizeManual(v) {
  const transcript = typeof v.transcript === 'string' && v.transcript.trim() ? v.transcript.trim() : null;
  return {
    id: v.id,
    slug: v.id,
    title: v.titre,
    description: v.description || '',
    platform: v.plateforme,
    url: v.url,
    date: v.date,
    theme: v.theme || null,
    pageLiee: v.pageLiee || null,
    thumbnail: v.thumbnail || null,
    embedUrl: embedFor(v.plateforme, v.url),
    transcript,
    source: 'manual'
  };
}

async function fetchYouTube() {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const data = parser.parse(xml);
    const entries = data?.feed?.entry;
    if (!entries) return [];
    const arr = Array.isArray(entries) ? entries : [entries];
    return arr.map(e => {
      const videoId = e['yt:videoId'];
      const link = Array.isArray(e.link) ? e.link[0]?.['@_href'] : e.link?.['@_href'];
      const mg = e['media:group'] || {};
      const rawDesc = mg['media:description'];
      const description = typeof rawDesc === 'string' ? rawDesc.slice(0, 280) : '';
      const thumb = mg['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      return {
        id: videoId,
        slug: `youtube-${videoId}`,
        title: typeof e.title === 'string' ? e.title : String(e.title ?? ''),
        description,
        platform: 'youtube',
        url: link || `https://www.youtube.com/watch?v=${videoId}`,
        date: e.published,
        theme: null,
        pageLiee: null,
        thumbnail: thumb,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        transcript: null,
        source: 'youtube'
      };
    });
  } catch {
    // Réseau indisponible / flux cassé : on dégrade proprement, la page reste servie.
    return [];
  }
}

/* Liste complète, fusionnée, triée par date décroissante. */
export async function getAllVideos() {
  const youtube = await fetchYouTube();
  const manual = manualVideos.map(normalizeManual);
  return [...youtube, ...manual]
    .filter(v => new Date(v.date) >= MIN_DATE)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getVideoBySlug(slug) {
  const all = await getAllVideos();
  return all.find(v => v.slug === slug) || null;
}

/* Slugs des vidéos manuelles avec transcription rédigée → seules à avoir une page dédiée. */
export function getTranscriptSlugs() {
  return manualVideos
    .filter(v => typeof v.transcript === 'string' && v.transcript.trim())
    .map(v => v.id);
}

/* Liste des thèmes présents (pour les filtres). */
export function getThemes() {
  const themes = new Set(manualVideos.map(v => v.theme).filter(Boolean));
  return [...themes].sort();
}

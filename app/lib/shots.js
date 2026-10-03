import fs from 'fs';
import path from 'path';

/* Vignettes des réalisations.
   On sert la vraie capture locale (/public/realisations/<slug>.webp) si elle
   existe — fiable et rapide. Sinon, repli sur mShots (généré à la volée).
   La liste des captures disponibles est lue une fois au build (SSG). */
let available = new Set();
try {
  const dir = path.join(process.cwd(), 'public', 'realisations');
  available = new Set(
    fs.readdirSync(dir).filter(f => f.endsWith('.webp')).map(f => f.replace('.webp', ''))
  );
} catch {
  /* dossier absent : tout repli sur mShots */
}

export function siteThumb(slug, url) {
  if (available.has(slug)) return `/realisations/${slug}.webp`;
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=500`;
}

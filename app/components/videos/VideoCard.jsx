'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';

const PLATFORM_LABEL = {
  youtube: 'YouTube',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  linkedin: 'LinkedIn'
};

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const label = PLATFORM_LABEL[video.platform] || video.platform;

  return (
    <article className="video-card">
      <div className="video-card__media">
        {playing && video.embedUrl ? (
          <iframe
            className="video-card__iframe"
            src={video.embedUrl}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-card__facade"
            aria-label={video.embedUrl ? `Lire : ${video.title}` : `Voir sur ${label} : ${video.title}`}
            onClick={() => {
              if (video.embedUrl) setPlaying(true);
              else window.open(video.url, '_blank', 'noopener,noreferrer');
            }}
          >
            {video.thumbnail ? (
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <span className="video-card__placeholder">{label}</span>
            )}
            <span className="video-card__play">
              {video.embedUrl ? <Play size={22} /> : <ExternalLink size={20} />}
            </span>
          </button>
        )}
        <span className="video-card__badge">{label}</span>
      </div>

      <div className="video-card__body">
        <h3 className="video-card__title">{video.title}</h3>
        {video.description && <p className="video-card__desc">{video.description}</p>}
        <div className="video-card__meta">
          <time dateTime={video.date}>{formatDate(video.date)}</time>
          <a href={video.url} target="_blank" rel="nofollow noopener noreferrer">
            Voir sur {label}
          </a>
        </div>
        {video.pageLiee && (
          <Link href={video.pageLiee} className="video-card__internal">
            En savoir plus sur ce sujet
          </Link>
        )}
      </div>
    </article>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.wp.com',
        pathname: '/mshots/**'
      }
    ],
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      // === Forcer www → non-www (301) ===
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.enzoprat.fr' }],
        destination: 'https://enzoprat.fr/:path*',
        permanent: true
      },

      // === Redirections URLs anciennes / cassées détectées dans GSC (audit SEO mai 2026) ===
      // Ancienne URL site vitrine → vraie URL
      {
        source: '/services/creation-site-vitrine-bordeaux',
        destination: '/services/site-vitrine-bordeaux',
        permanent: true
      },
      // Ancienne URL refonte → vraie URL
      {
        source: '/services/refonte-site-web-bordeaux',
        destination: '/services/refonte-site-internet-bordeaux',
        permanent: true
      },
      // SEO Bordeaux : pas encore créé en page dédiée (V2), redirection vers Bordeaux pilier en attendant
      // ATTENTION : à supprimer dès que /seo-bordeaux est créé pour qu'il soit indexable directement.
      // (Une page /seo-bordeaux dédiée existe maintenant, donc on n'ajoute pas de redirect)

      // Variantes communes saisies à la main par les utilisateurs
      {
        source: '/creation-site-vitrine-bordeaux',
        destination: '/services/site-vitrine-bordeaux',
        permanent: true
      },
      {
        source: '/creation-site-shopify-bordeaux',
        destination: '/services/site-ecommerce-shopify-bordeaux',
        permanent: true
      },
      {
        source: '/click-and-collect-bordeaux',
        destination: '/services/click-and-collect-bordeaux',
        permanent: true
      },
      {
        source: '/refonte-site-internet-bordeaux',
        destination: '/services/refonte-site-internet-bordeaux',
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
        ]
      }
    ];
  }
};

export default nextConfig;

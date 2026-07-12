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
      // ============================================================
      // Domaine canonique : www.enzoprat.fr
      // ------------------------------------------------------------
      // Vercel applique déjà apex → www en 307. On ajoute la même
      // règle ici en filet de sécurité (308 permanent) au cas où la
      // primary domain Vercel changerait. L'ancienne règle
      // "www → apex" a été supprimée : elle entrait en conflit
      // direct avec Vercel et envoyait à Google un signal canonical
      // contradictoire (canonical déclaré apex pendant que l'hôte
      // servi était www), ce qui produisait les
      // "Erreur liée à des redirections" vues dans Search Console.
      // ============================================================
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'enzoprat.fr' }],
        destination: 'https://www.enzoprat.fr/:path*',
        permanent: true
      },

      // ============================================================
      // Redirections URLs cassées détectées dans GSC (audit juin 2026)
      // 5 URLs 404 actives → pages existantes équivalentes
      // ============================================================
      {
        // Page B2B/grossiste retirée : Shopify reste la solution
        // e-commerce couvrant ce besoin (commande pro, comptes clients).
        source: '/b2b-grossiste',
        destination: '/services/site-ecommerce-shopify-bordeaux',
        permanent: true
      },
      {
        // Ancien slug court → page service équivalente
        source: '/click-and-collect',
        destination: '/services/click-and-collect-bordeaux',
        permanent: true
      },
      {
        // Ancien slug court → page service e-commerce
        source: '/site-ecommerce',
        destination: '/services/site-ecommerce-shopify-bordeaux',
        permanent: true
      },
      {
        // Ancien slug court → page service site vitrine
        source: '/site-vitrine',
        destination: '/services/site-vitrine-bordeaux',
        permanent: true
      },
      {
        // Ancienne réalisation Nils Bouchilloux → nouveau slug en sous-dossier
        source: '/realisations-nils-bouchilloux',
        destination: '/realisations/nils-bouchilloux',
        permanent: true
      },
      {
        // Ancienne réalisation Adjadj → nouveau slug en sous-dossier
        source: '/realisations-adjadj',
        destination: '/realisations/adjadj-compagnie',
        permanent: true
      },
      {
        // Ancienne réalisation Couverture Gironde → nouveau slug
        source: '/realisations-couverture-gironde',
        destination: '/realisations/couverture-gironde',
        permanent: true
      },

      // ============================================================
      // Redirections URLs anciennes / cassées audit SEO mai 2026
      // ============================================================
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

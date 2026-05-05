import { config } from './lib/config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/merci', '/api/']
      }
    ],
    sitemap: `${config.baseUrl}/sitemap.xml`,
    host: config.baseUrl
  };
}

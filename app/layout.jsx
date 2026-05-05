import { Inter } from 'next/font/google';
import './globals.css';
import { config } from './lib/config';
import { buildOrgSchema, buildWebsiteSchema, buildPersonSchema } from './lib/seo';
import JsonLd from './components/seo/JsonLd';
import { ToastProvider } from './components/shared/Toast';
import SmoothScroll from './components/shared/SmoothScroll';
import ScrollProgress from './components/shared/ScrollProgress';
import ScrollVelocity from './components/shared/ScrollVelocity';
import CustomCursor from './components/shared/CustomCursor';
import Grain from './components/shared/Grain';
import LoadingScreen from './components/shared/LoadingScreen';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import MobileCTA from './components/shared/MobileCTA';
import ContextualPops from './components/shared/ContextualPops';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    default: `${config.brandName} — Création de sites internet à Bordeaux`,
    template: `%s | ${config.brandName}`
  },
  description:
    "Création de sites internet à Bordeaux et en Gironde : sites vitrines, e-commerce Shopify, click & collect et refonte. Pensé pour artisans, indépendants et entreprises locales.",
  applicationName: config.brandName,
  authors: [{ name: 'Enzo Prat', url: config.baseUrl }],
  creator: 'Enzo Prat',
  publisher: config.brandName,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }]
  },
  manifest: undefined,
  alternates: { canonical: config.baseUrl },
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Bordeaux',
    'ICBM': '44.8378, -0.5792'
  }
};

export const viewport = {
  themeColor: '#0A1628',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }) {
  const orgSchema = buildOrgSchema();
  const websiteSchema = buildWebsiteSchema();
  const personSchema = buildPersonSchema();

  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <JsonLd data={[orgSchema, websiteSchema, personSchema]} />
        <ToastProvider>
          <SmoothScroll />
          <ScrollProgress />
          <ScrollVelocity />
          <CustomCursor />
          <Grain />
          <LoadingScreen />
          <Header />
          {children}
          <Footer />
          <MobileCTA />
          <ContextualPops />
        </ToastProvider>
      </body>
    </html>
  );
}

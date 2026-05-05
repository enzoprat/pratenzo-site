# Prat Enzo — Site agence

Site Next.js 14 (App Router) pour **Prat Enzo**, création de sites internet à Bordeaux et en Gironde. Architecture SEO multi-pages, design premium green, animations soignées, formulaire Web3Forms.

---

## 🚀 Lancer le projet en local

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build SSG / production
npm start            # serveur de production
```

---

## 📁 Structure

```
app/
├── layout.jsx                       Layout racine (metadata, fonts, JSON-LD global, providers)
├── page.jsx                         Homepage (/)
├── globals.css                      Tous les styles
├── not-found.jsx                    404
├── sitemap.js                       Sitemap auto-généré
├── robots.js                        robots.txt auto-généré
│
├── lib/
│   ├── config.js                    ⚠️ Config éditable (téléphone, Web3Forms key)
│   ├── seo.js                       Helpers metadata + JSON-LD
│   └── data/
│       ├── realisations.js          Données réalisations (7 projets)
│       ├── services.js              Données services
│       ├── faq.js                   FAQ
│       └── locations.js             Villes desservies
│
├── components/
│   ├── shared/                      Header, Footer, MobileCTA, ContextualPops, etc.
│   ├── home/                        Sections de la homepage
│   ├── forms/ContactForm.jsx        Formulaire wizard multi-step
│   └── seo/JsonLd.jsx               Composant JSON-LD inline
│
└── [22 routes]/page.jsx             Pages SEO (services, locales, réalisations…)

public/
├── favicon.svg                      Favicon (PE en green)
├── og-image.svg                     OG placeholder (à convertir en PNG 1200×630)
└── og-image.png                     ⚠️ À fournir pour FB / LinkedIn

content-roadmap.md                   Roadmap éditoriale (pages futures)
next.config.mjs
package.json
vercel.json
README.md
```

---

## ✏️ Éléments à modifier

### 1. **Téléphone & Web3Forms** → `app/lib/config.js`

```js
phone: '+33 0 00 00 00 00',
phoneDisplay: '+33 0 00 00 00 00',
web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',  // récupérée sur https://web3forms.com
```

> 🔑 **Web3Forms** : créer un compte avec **`enzoprat@icloud.com`** comme email destinataire, récupérer la clé d'accès, la coller ici. L'email reste invisible côté front.

### 2. **Domaine final** → `app/lib/config.js` (`baseUrl`)

```js
baseUrl: 'https://pratenzo.fr',  // remplacer si différent
```

Cela met automatiquement à jour les canonical, OG, sitemap, JSON-LD, etc.

### 3. **Réalisations** → `app/lib/data/realisations.js`

Ajouter / modifier les 7 entrées avec leur `slug`, `url`, `category`, `description` et le bloc `detail` complet (contexte, objectif, problème, solution, structure, fonctionnalités, art).

### 4. **Logo & Favicon** → `public/favicon.svg`

Remplacer par votre logo. Le mark "PE" est intégré en SVG.

### 5. **Open Graph image** → `public/og-image.png`

Convertir `public/og-image.svg` en PNG 1200×630. Recommandation : ouvrir le SVG dans Figma/Sketch et exporter en PNG, puis remplacer le fichier dans `public/`.

### 6. **Mentions légales** → `app/mentions-legales/page.jsx`

Compléter les zones `[à compléter]` : statut juridique, adresse, SIRET.

---

## ☁️ Déployer sur Vercel

### Méthode recommandée : GitHub → Vercel

```bash
git init
git add .
git commit -m "Initial commit — Prat Enzo"
git branch -M main
git remote add origin https://github.com/VOUS/pratenzo.git
git push -u origin main
```

Puis sur [vercel.com](https://vercel.com) → **Add New Project** → importer le repo. Vercel détecte Next.js automatiquement, le build est en SSG (statique pour la majorité des pages).

### Méthode CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

---

## 🌐 Connecter le domaine OVH

### Côté Vercel
- Project → Settings → Domains → ajouter `pratenzo.fr` + `www.pratenzo.fr`

### Côté OVH (manager.ovh.com)
- Zone DNS du domaine
- Pour `pratenzo.fr` (apex) : enregistrement **A** → `76.76.21.21`
- Pour `www` : enregistrement **CNAME** → `cname.vercel-dns.com.`

Certificat SSL Let's Encrypt émis automatiquement par Vercel.

---

## 🔧 Google Search Console

1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter la propriété `https://pratenzo.fr`
3. Validation : ajouter une balise `<meta name="google-site-verification" content="...">` dans `app/layout.jsx` (champ `verification.google`), puis push
4. Soumettre le sitemap : `https://pratenzo.fr/sitemap.xml`
5. Demander l'indexation de la homepage et des pages prioritaires (Bordeaux, services principaux)

---

## 📊 Google Analytics 4

1. Créer une propriété GA4 sur [analytics.google.com](https://analytics.google.com)
2. Récupérer le **Measurement ID** (G-XXXXXXX)
3. Ajouter le composant `<Script>` Next.js dans `app/layout.jsx` :

```jsx
import Script from 'next/script';

// Dans le JSX du layout
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
  strategy="afterInteractive"
/>
<Script id="ga4" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
  `}
</Script>
```

### Events recommandés (à wirer côté composants)
- `click_cta_hero` → bouton "Demander mon site" du Hero
- `click_cta_contact` → CTA banner contact
- `submit_contact_form` → soumission du formulaire (dans `ContactForm.jsx` succès)
- `click_phone` → bouton téléphone mobile-CTA
- `click_realisation_external` → liens externes vers les sites live

---

## 🔍 Microsoft Clarity

1. Compte sur [clarity.microsoft.com](https://clarity.microsoft.com)
2. Créer un projet, récupérer l'ID
3. Ajouter dans `app/layout.jsx` :

```jsx
<Script id="clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","CLARITY-PROJECT-ID");
  `}
</Script>
```

---

## 🏪 Google Business Profile

1. Créer une fiche pour **Prat Enzo** sur [business.google.com](https://business.google.com)
2. Catégorie : **Concepteur de site web** (ou Webdesigner)
3. Zone d'intervention : **Bordeaux et environs** (cocher « Je livre des biens et services à mes clients »)
4. Site web : `https://pratenzo.fr` (ou `https://pratenzo.fr/creation-site-internet-bordeaux`)
5. Description cohérente avec le site
6. Ajouter les services principaux comme « Services proposés »

---

## ✅ Checklist avant mise en ligne

- [ ] `app/lib/config.js` → `phone`, `phoneDisplay`, `web3formsKey`, `baseUrl` remplis
- [ ] Tester le formulaire (4 étapes) → vérifier réception sur enzoprat@icloud.com
- [ ] `public/og-image.png` ajouté (1200×630, exporté depuis le SVG)
- [ ] `public/favicon.svg` remplacé par votre vraie identité visuelle si différente
- [ ] Mentions légales complétées (statut, adresse, SIRET)
- [ ] Build de production OK : `npm run build` sans erreur
- [ ] Pages testées : `/`, `/services/site-vitrine-bordeaux`, `/realisations/nils-bouchilloux`, `/contact`
- [ ] `/merci` testé en noindex
- [ ] `/sitemap.xml` accessible
- [ ] `/robots.txt` accessible et référence le sitemap
- [ ] Lighthouse mobile ≥ 90 sur la homepage
- [ ] Toutes les images ont un `alt`

---

## 🛠️ Stack

- **Next.js 14** (App Router, SSG)
- **React 18**
- **Framer Motion** — animations
- **Lenis** — smooth scroll
- **Lucide React** — icônes
- **CSS pur** — design system custom (palette green, glassmorphism)
- **Web3Forms** — formulaire sans backend

---

## 📝 Roadmap éditoriale

Voir [content-roadmap.md](./content-roadmap.md) pour la stratégie de contenu :
- Pages villes (Mérignac, Pessac, Libourne, Arcachon, etc.)
- Pages métiers (couvreur, plombier, électricien, etc.)
- Articles de guides
- Backlinks et fiche Google Business

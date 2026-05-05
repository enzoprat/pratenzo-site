# Content Roadmap — Prat Enzo

Roadmap éditoriale pour développer le SEO de pratenzo.fr après la V1 livrée.

---

## V1 — Pages déjà publiées

| Page | URL | Cible SEO |
|---|---|---|
| Homepage | `/` | création site internet Bordeaux |
| Services index | `/services` | services création site Bordeaux |
| Site vitrine Bordeaux | `/services/site-vitrine-bordeaux` | création site vitrine Bordeaux |
| Shopify Bordeaux | `/services/site-ecommerce-shopify-bordeaux` | création site Shopify Bordeaux |
| Click & collect | `/services/click-and-collect-bordeaux` | click and collect Bordeaux |
| Refonte site | `/services/refonte-site-internet-bordeaux` | refonte site internet Bordeaux |
| Bordeaux pilier | `/creation-site-internet-bordeaux` | création site internet Bordeaux |
| Gironde | `/creation-site-internet-gironde` | création site internet Gironde |
| Site artisan | `/site-internet-artisan-bordeaux` | site internet artisan Bordeaux |
| Agence web | `/agence-web-bordeaux` | agence web Bordeaux |
| Tarifs | `/tarifs-creation-site-internet` | tarif création site Bordeaux |
| Réalisations index | `/realisations` | portfolio création site Bordeaux |
| Réalisation × 7 | `/realisations/[slug]` | requête + nom projet |
| À propos | `/a-propos` | qui suis-je |
| Contact | `/contact` | contact création site Bordeaux |
| Merci (noindex) | `/merci` | — |
| Guides skeleton | `/guides` | guides création site web |
| Secteurs | `/secteurs` | secteurs accompagnés |
| Mentions légales | `/mentions-legales` | — |
| Confidentialité | `/politique-confidentialite` | — |
| CGV | `/conditions-de-prestation` | — |

---

## Phase 2 — Pages villes (priorité haute)

Pattern : pages locales courtes mais utiles, **non dupliquées**.

| URL | Title cible | Mot-clé principal | Volume estimé |
|---|---|---|---|
| `/creation-site-internet-merignac` | Création site internet Mérignac \| Prat Enzo | création site internet Mérignac | bas mais ciblé |
| `/creation-site-internet-pessac` | Création site internet Pessac \| Prat Enzo | création site internet Pessac | bas mais ciblé |
| `/creation-site-internet-talence` | Création site internet Talence \| Prat Enzo | création site internet Talence | bas mais ciblé |
| `/creation-site-internet-begles` | Création site internet Bègles \| Prat Enzo | création site internet Bègles | bas mais ciblé |
| `/creation-site-internet-libourne` | Création site internet Libourne \| Prat Enzo | création site internet Libourne | moyen |
| `/creation-site-internet-arcachon` | Création site internet Arcachon \| Prat Enzo | création site internet Arcachon | moyen |
| `/creation-site-internet-bassin-arcachon` | Création site internet Bassin d'Arcachon \| Prat Enzo | site Bassin d'Arcachon | moyen |
| `/creation-site-internet-cenon` | … | création site internet Cenon | bas |
| `/creation-site-internet-lormont` | … | création site internet Lormont | bas |
| `/creation-site-internet-floirac` | … | création site internet Floirac | bas |
| `/creation-site-internet-gradignan` | … | création site internet Gradignan | bas |
| `/creation-site-internet-villenave-d-ornon` | … | création site internet Villenave-d'Ornon | bas |

### Structure type d'une page ville
- Breadcrumb (Accueil > Création site internet en {ville})
- H1 unique : « Création de site internet à {ville} »
- Pill « {ville} · Page locale »
- Intro : spécificités de la commune (taille, type d'activité, économie locale)
- Services (liens vers les 4 services)
- Réalisations associées (1-2 cartes)
- Section « Pour qui à {ville} »
- Lien retour vers `/creation-site-internet-bordeaux` et `/creation-site-internet-gironde`
- FAQ courte 3-4 questions
- CTA

### Maillage interne
- Depuis `/creation-site-internet-bordeaux` → toutes les pages villes
- Depuis `/creation-site-internet-gironde` → toutes les pages villes
- Depuis chaque page ville → page Bordeaux + page Gironde + 2 services principaux
- Depuis le footer (zones desservies) → quelques pages villes prioritaires

---

## Phase 3 — Pages métiers (priorité moyenne)

| URL | Title cible | Mot-clé principal |
|---|---|---|
| `/site-internet-couvreur-bordeaux` | Site internet couvreur Bordeaux \| Prat Enzo | site internet couvreur Bordeaux |
| `/site-internet-plombier-bordeaux` | Site internet plombier Bordeaux \| Prat Enzo | site internet plombier Bordeaux |
| `/site-internet-electricien-bordeaux` | Site internet électricien Bordeaux \| Prat Enzo | site internet électricien Bordeaux |
| `/site-internet-peintre-bordeaux` | Site internet peintre Bordeaux \| Prat Enzo | site internet peintre Bordeaux |
| `/site-internet-menuisier-bordeaux` | Site internet menuisier Bordeaux \| Prat Enzo | site internet menuisier Bordeaux |
| `/site-internet-paysagiste-bordeaux` | Site internet paysagiste Bordeaux \| Prat Enzo | site internet paysagiste Bordeaux |
| `/site-internet-restaurant-bordeaux` | Site internet restaurant Bordeaux \| Prat Enzo | site internet restaurant Bordeaux |
| `/site-internet-coach-sportif-bordeaux` | Site internet coach sportif Bordeaux \| Prat Enzo | site internet coach sportif Bordeaux |
| `/site-internet-institut-beaute-bordeaux` | Site internet institut de beauté Bordeaux \| Prat Enzo | site institut beauté Bordeaux |
| `/site-internet-conciergerie-bordeaux` | Site internet conciergerie Bordeaux \| Prat Enzo | site conciergerie Bordeaux |
| `/site-internet-commerce-bordeaux` | Site internet commerce Bordeaux \| Prat Enzo | site commerce Bordeaux |

### Structure type d'une page métier
- Breadcrumb
- H1 : « Site internet pour {métier} à Bordeaux »
- Intro : spécificités du métier (problèmes typiques, attentes des prospects)
- Sections type :
  - Ce qu'un prospect cherche en ligne
  - Structure recommandée pour ce métier
  - Photos, témoignages, ce qui fait la différence
  - SEO local pour ce métier
  - Réalisations associées (si disponibles)
  - FAQ spécifique
- Lien vers `/services/site-vitrine-bordeaux` et `/site-internet-artisan-bordeaux`

### Maillage
- Depuis `/site-internet-artisan-bordeaux` → toutes les pages métiers du bâtiment
- Depuis chaque page métier → page artisan + service vitrine + page Bordeaux

---

## Phase 4 — Articles de guides (priorité moyenne)

Articles à rédiger pour `/guides/*` :

| URL | Intent |
|---|---|
| `/guides/cout-site-internet-bordeaux` | Comprendre le budget |
| `/guides/site-vitrine-vs-page-facebook` | Choisir le bon support |
| `/guides/pourquoi-artisan-site-internet` | Convaincre |
| `/guides/site-vitrine-vs-ecommerce` | Choisir le bon type |
| `/guides/webflow-vs-shopify` | Choisir la techno |
| `/guides/freelance-vs-agence-web-bordeaux` | Comparer les prestataires |
| `/guides/preparer-creation-site` | Préparer le projet |
| `/guides/site-fiche-google-business` | Comprendre le SEO local |
| `/guides/shopify-petites-entreprises` | Évaluer Shopify |
| `/guides/click-and-collect-pour-quels-commerces` | Évaluer le click & collect |

### Structure type d'un guide
- Breadcrumb
- H1 unique posant la question
- Intro : pour qui est cet article, ce qu'il va apprendre
- Sections H2 par sous-question
- Un tableau ou une checklist si pertinent
- CTA milieu d'article (lien service ou contact)
- Conclusion + CTA final
- Schema Article + BreadcrumbList

### Maillage
- Chaque guide pointe vers la "money page" associée (service ou page locale)
- Lien retour vers `/guides`
- Suggestion d'articles liés en bas

---

## Phase 5 — Optimisations continues

### Au fil de l'eau
- Ajouter de nouvelles **réalisations** dès qu'un projet est livré (page détaillée + lien depuis la home)
- Mettre à jour les **photos** des projets existants quand des évolutions sont faites
- **Renforcer les pages services** avec des cas concrets et des chiffres réels (pas inventés)

### Backlinks
- Inscription dans des annuaires locaux légitimes (CCI Bordeaux, fédérations artisans)
- Partenariats avec des artisans / entrepreneurs locaux pour des liens entrants naturels
- Référencement sur Google Business Profile dès que possible
- Interventions sur des podcasts ou interviews locales si pertinent

### Performance & technique
- Optimiser les images (WebP/AVIF) au fur et à mesure
- Surveiller les Core Web Vitals via Search Console
- Mettre à jour le sitemap automatiquement à chaque ajout de page (Next.js le fait)

---

## Priorités recommandées (ordre de publication)

1. **V1 (livré)** — homepage + services + pages locales principales + réalisations
2. **Articles de guides prioritaires** — coût, freelance vs agence, site vitrine vs Facebook
3. **Pages villes prioritaires** — Mérignac, Pessac, Libourne, Arcachon
4. **Pages métiers prioritaires** — couvreur, plombier, électricien Bordeaux
5. **Pages villes secondaires** — Cenon, Lormont, Floirac, Gradignan, etc.
6. **Pages métiers secondaires** — restaurant, coach, institut, etc.
7. **Articles de guides secondaires** — préparer, Shopify, click & collect
8. **Backlinks et fiche Google Business**

---

## Outils à mettre en place après mise en ligne

- **Google Search Console** : ajouter le site, soumettre le sitemap
- **Google Analytics 4** : créer une propriété, ajouter le tag (placeholder déjà prévu côté code)
- **Microsoft Clarity** : ajouter pour le heatmap et les sessions
- **Google Business Profile** : créer une fiche cohérente avec le site (nom, services, zone, téléphone)
- **Suivi des positions** : utiliser Search Console (gratuit) ou un outil dédié type Ahrefs / Semrush

---

## Indicateurs à suivre

- Positions Google sur les requêtes ciblées
- Trafic organique mensuel
- Pages les plus performantes
- Taux de soumission du formulaire de contact
- Origine du trafic (organique vs direct vs réseaux)
- Pages avec un fort taux de rebond à améliorer
- Core Web Vitals (LCP, INP, CLS)

---

Roadmap évolutive. À mettre à jour tous les trimestres selon les performances.

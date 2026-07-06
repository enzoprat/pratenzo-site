# Stratégie SEO / UX / CRO — enzoprat.fr

> Document créé en autonomie à partir de la **data réelle** (Google Search Console + SERP concurrentes de la région bordelaise, juillet 2026).
> Objectif : transformer enzoprat.fr en actif générant des demandes de devis **3 000 – 10 000 €** sur Bordeaux Métropole.
> Ce document remplace `content-roadmap.md` (archivé). Il est la source de vérité stratégique.

---

## 1. DIAGNOSTIC ACTUEL (fondé sur données GSC — 16 mois)

| Métrique | Valeur | Lecture |
|---|---|---|
| Clics | 29 | Quasi invisible |
| Impressions | 1 300 | Google connaît le site |
| CTR moyen | 2,2 % | Faible (positions basses) |
| Position moyenne | 19,2 | **Page 2-3** systématiquement |
| Trafic | 98 % France | Cible géo correcte |
| Requête #1 | « enzo prat » (marque) | **0 acquisition non-marque** |

**Pages déjà indexées avec impressions mais non cliquées (page 2-3) :**
- `création site internet mérignac` → 325 impr. cumulées, pos ~18
- `refonte site internet bordeaux` → 204 impr., pos 24
- `création site internet bordeaux` → pilier, pos ~18 (non-www)
- `création site internet gironde` → pos 30

## 2. CAUSES RÉELLES DES FAIBLES PERFS (prouvées, pas supposées)

1. **Manque d'AUTORITÉ, pas d'architecture.** Les pages existent déjà et reçoivent des impressions, mais rankent pos 12-30. Le site est « à portée » du top 10 mais pas assez fort (backlinks, âge, signaux locaux, profondeur de contenu, engagement).
2. **Fiche Google Business Profile sous-optimisée.** La fiche existe (« Création de Site Internet Prat Enzo », gérée, catégorie Concepteur de sites web, zone Bordeaux Métropole, 5,0 ★) **mais seulement 3 avis** face à des concurrents à 4,7–5,0 avec **59 à 197 avis**. Avec 3 avis, impossible d'entrer dans le pack local (qui domine au-dessus de l'organique sur les requêtes locales). → **Campagne d'avis = levier n°1, gratuit.** ⚠️ Le logo/photo de la fiche affiche « SOLUSA/SA » (incohérent avec la marque enzoprat/PE) — à corriger.
3. **Split historique www / non-www** (673 impr. sur non-www pos 18,6 vs www pos 3,0) — corrigé dans `next.config.mjs`, à confirmer propre en live.
4. **Aucune preuve de conversion sur requêtes commerciales** — seule la marque génère des clics.

## 3. DATA CONCURRENTE RÉELLE (SERP juillet 2026)

**« création site internet bordeaux »** — Pack local dominant (Agence Webdevo 5,0/197, Natural-net 5,0/108, Le Site Français 4,9/123). Organique : CréaSites (domaine exact-match), Vistalid, 33francs, Digital Unicorn, **+ freelances qui rankent** (clc33.com, site-internet-bordeaux.net).

**« création site internet mérignac »** — Concurrence **plus faible** : petites agences + domaines exact-match + pages génériques. Concurrents affichent des **prix** (duo33 « dès 1600€ », novatechweb « dès 200€/mois ») et « devis gratuit sous 24h ». → **Meilleure opportunité quick-win.**

**« agence web bordeaux »** — **Bain de sang** : agences établies (Natural-net « n°1 », Jalis, Adveris, Sympozium depuis 2001) 100-200 avis, 15 ans. → **Ne pas attaquer frontalement en solo.**

**« refonte site internet bordeaux »** — **Pas de pack local** (jeu pur de contenu). **Kid Guillaume, freelance React/Next.js, ranke** avec « devis gratuit ». → Terrain gagnable pour un freelance à stack moderne.

### Enseignements transverses
- **GBP + avis = levier local n°1** → la fiche existe, il faut **passer de 3 à 30+ avis** (action off-site prioritaire d'Enzo).
- **Les freelances rankent** → le statut solo n'est pas un frein ; la qualité de contenu + la différenciation le sont.
- **La marque personnelle « Enzo Prat » est un atout de CONVERSION/E-E-A-T, pas une cible SEO.** Personne ne cherche « enzo prat » pour un site. Donc : ranker sur les requêtes génériques locales, convertir avec la personne (visage, contact direct, pas de junior, pas d'« agence bullshit »). C'est l'anti-thèse des agences anonymes du bain de sang « agence web bordeaux ».
- **La transparence prix est une norme du marché** (« dès 1490€/1600€ », « devis 24h ») → afficher des fourchettes réelles, se positionner AU-DESSUS du low-cost « dès 200€/mois ».
- **Stack moderne Next.js = argument différenciant** vs agences WordPress (perf, SEO, Core Web Vitals).

## 4. VERDICT STRATÉGIQUE

**Scénario retenu : D (hybride) — mode « CONSOLIDATION avant EXPANSION ».**

Comparaison :
- **A (compact 10-20 p.)** : trop peu pour couvrir villes + services + niches.
- **B (30-80 p.)** : où on est déjà (~28 p.). Bon socle.
- **C (150-300 p.)** : **rejeté** — produire des pages en masse sans autorité = dilution + pages orphelines faibles + risque Helpful Content.
- **D (hybride, piliers forts + expansion prouvée)** : **retenu**. Mais data en main, la priorité n'est PAS de produire : c'est de **renforcer les pages existantes qui ont déjà des impressions** pour les faire passer de page 2 → top 5, + construire l'autorité (GBP, avis, backlinks locaux, maillage). L'expansion (métiers, villes secondaires) vient **après preuve** qu'une money page atteint le top 5.

**Nombre de pages recommandé :** cœur de **~18-22 pages excellentes** d'abord, expansion progressive vers ~35-40 pages **prouvées** sur 12 mois. Pas plus tant que l'autorité n'est pas construite.

## 5. RÔLE DE CHAQUE TYPE DE PAGE

- **Pages services (money)** — convertir + ranker sur l'intention commerciale. Doivent afficher : preuve, process, fourchette de prix, FAQ ciblant les vraies requêtes, cas client lié, différenciation vs agences.
- **Pages villes (locales)** — capter la longue traîne géo. **Jamais dupliquées** : contenu local réel (tissu économique de la commune, types de clients, exemple local). Priorité aux villes à impressions prouvées (Mérignac, Pessac) puis expansion.
- **Cas clients (réalisations)** — pilier E-E-A-T + conversion. Structure : contexte → problème → solution → design → **résultats chiffrés réels** → lien ville + secteur. Peuvent ranker sur « [type de site] + secteur ».
- **Pages métiers/niches** — **phase 2 uniquement**, après validation du modèle. Cibles winnable : artisan, restaurant, couvreur, institut beauté.
- **Guides/articles** — **différés**. Seulement quand ils soutiennent une money page (ex. « coût site internet Bordeaux » → /tarifs). 20 articles utiles > 200 inutiles.
- **Pages de confiance** — à-propos (E-E-A-T, visage + histoire d'Enzo), tarifs (transparence), contact.

## 6. ARCHITECTURE CIBLE (silos)

```
Home (/) ── keystone positionnement + hub maillage
│
├─ SILO CRÉATION LOCALE
│   ├─ /creation-site-internet-bordeaux  (PILIER)
│   │   ├─ /creation-site-internet-merignac
│   │   ├─ /creation-site-internet-pessac
│   │   ├─ …villes (impressions prouvées d'abord)
│   │   └─ /creation-site-internet-gironde
│   └─ /agence-web-bordeaux (secondaire, différenciation)
│
├─ SILO SERVICES (money)
│   ├─ /services/site-vitrine-bordeaux
│   ├─ /services/site-ecommerce-shopify-bordeaux
│   ├─ /services/click-and-collect-bordeaux
│   └─ /services/refonte-site-internet-bordeaux
│
├─ SILO SEO / ACQUISITION
│   └─ /seo-bordeaux
│
├─ SILO NICHES (phase 2)
│   └─ /site-internet-artisan-bordeaux → métiers
│
├─ PREUVE : /realisations + /realisations/[slug]
├─ CONFIANCE : /a-propos · /tarifs · /contact
└─ CONTENU (phase 3) : /guides/*
```

**Maillage :** pilier Bordeaux ↔ villes ↔ Gironde ; chaque page ville → pilier + 2 services + 1 cas client ; services ↔ cas clients ; footer → villes prioritaires.

## 7. ROADMAP 24 MOIS

- **0-30 j** — Consolidation des money pages existantes (home, pilier Bordeaux, Mérignac, refonte, services) : profondeur, preuve, prix, FAQ, maillage, différenciation. **Créer la fiche GBP.** Vérifier canonical www propre.
- **30-90 j** — Cas clients enrichis (résultats chiffrés). Pages villes prouvées (Pessac, Talence, Bègles). Premiers backlinks locaux + avis GBP. 2-3 guides money (coût, freelance vs agence, vitrine vs Facebook).
- **3-6 mois** — Expansion villes + 3-4 pages métiers winnable. Suivi positions ; on ne garde/étend que ce qui monte.
- **6-12 mois** — Autorité : partenariats artisans, annuaires légitimes (CCI), presse locale. Nouvelles réalisations. Optimisation CRO continue.
- **12-24 mois** — Devenir la référence longue traîne locale ; contenu pilier + cluster ; scaler ce qui est prouvé rentable.

## 8. LES 20 PREMIÈRES ACTIONS

1. **Passer la GMB de 3 à 30+ avis** (campagne clients : Adjadj, Nils, Couverture Gironde, Boki…) + corriger le logo « SOLUSA » → marque enzoprat. Poster régulièrement, compléter services/photos/zone.
2. Aligner **NAP** (nom, tél 07 69 10 81 40, zone) entre GMB, site et schema LocalBusiness.
3. Vérifier canonical www propre (0 URL non-www indexée).
4. Réécrire la **home** (positionnement premium local + preuve + différenciation).
5. Renforcer le **pilier Bordeaux** (profondeur, process, prix, FAQ, maillage villes).
6. Reconstruire **Mérignac** (contenu local réel, quick-win).
7. Renforcer **refonte** (raisons, process, avant/après, pas de pack local = gagnable).
8. Ajouter **fourchettes de prix réelles** sur /tarifs + money pages.
9. Enrichir les **cas clients** avec résultats chiffrés réels.
10. FAQ par page ciblant les **vraies requêtes** GSC.
11. Maillage interne pilier ↔ villes ↔ services ↔ cas.
12. Schema : LocalBusiness, Service, FAQ, Breadcrumb, Review (dès avis réels).
13. Optimiser Core Web Vitals mobile (LCP/INP/CLS).
14. OG image PNG 1200×630 réelle.
15. Compléter mentions légales (SIRET, statut, adresse).
16. Alt descriptifs + images WebP/AVIF.
17. Page /tarifs positionnée premium (au-dessus du low-cost).
18. Différenciation « expert indépendant » vs agences (contact direct, pas de junior).
19. Suivi hebdo GSC des pages en pos 11-20 (quick wins).
20. Backlinks locaux : 3 premières citations/annuaires légitimes.

## 9. LES 10 ERREURS À ÉVITER

1. Produire des pages en masse sans autorité (dilution).
2. Attaquer frontalement « agence web bordeaux » en solo.
3. Dupliquer les pages villes (contenu identique = risque).
4. Se positionner low-cost (« dès 200€/mois ») — incohérent avec 3-10k€.
5. Ignorer le GBP (levier local n°1).
6. Optimiser pour un score d'outil plutôt que pour l'intention réelle.
7. Casser des URLs indexées (toujours rediriger 301).
8. Contenu « IA générique » sans preuve locale ni expérience réelle.
9. Bourrer les mots-clés (sur-optimisation).
10. Publier des guides sans lien vers une money page.

## 10. KPI À SUIVRE (pas de vanity metrics)

- Positions moyennes par cluster (Bordeaux, villes, services) — objectif : passer de pos 18 → top 5.
- Nombre de requêtes non-marque générant des clics (aujourd'hui : ~0).
- Pages en pos 11-20 qui montent vers le top 10 (quick wins).
- Impressions → clics (CTR) sur money pages.
- Soumissions formulaire + appels (leads réels).
- Qualité des leads (budget 3-10k€ ?).
- Avis GBP gagnés + note moyenne.
- Backlinks locaux gagnés.
- Core Web Vitals mobile.

## 11. PREMIÈRE PAGE + BOUCLE

**1re page : la home** (keystone — plus forte page actuelle pos 3, définit positionnement + template + maillage). Puis pilier Bordeaux, puis Mérignac, puis services.

**Boucle par page :** intention → analyse SERP réelle → audit → challenge critique → optimisation (preuve/prix/process/FAQ/maillage) → validation Google-friendly → test « client premium 3-10k€ » → UI/UX premium → réaudit → page suivante seulement si validée.

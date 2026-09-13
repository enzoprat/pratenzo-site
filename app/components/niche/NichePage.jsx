import Link from 'next/link';
import { Check, Globe, Search, TrendingUp, Bot, ArrowRight } from 'lucide-react';
import {
  buildMetadata, buildWebPageSchema, buildBreadcrumbSchema, buildFaqSchema
} from '@/app/lib/seo';
import { getRealisationBySlug } from '@/app/lib/data/realisations';
import JsonLd from '@/app/components/seo/JsonLd';
import PageShell from '@/app/components/shared/PageShell';
import CtaBlock from '@/app/components/shared/CtaBlock';

const LEVER_ICON = { 'Site web': Globe, 'SEO local': Search, 'Conversion': TrendingUp, 'GEO': Bot };

/* Page niche (métier) — contenu spécifique, cas clients réels, FAQ dédiée. */
export function nicheMetadata(niche) {
  return buildMetadata({ title: niche.title, description: niche.description, path: `/${niche.urlSlug}` });
}

export default function NichePage({ niche }) {
  const cases = niche.caseSlugs.map(getRealisationBySlug).filter(Boolean);
  const breadcrumb = [{ name: niche.breadcrumbName, path: `/${niche.urlSlug}` }];

  const wp = buildWebPageSchema({ path: `/${niche.urlSlug}`, title: niche.title, description: niche.description });
  const bc = buildBreadcrumbSchema(breadcrumb);
  const faq = buildFaqSchema(niche.faq);

  return (
    <>
      <JsonLd data={[wp, bc, faq]} />
      <PageShell
        breadcrumb={breadcrumb}
        eyebrow={niche.eyebrow}
        h1={<>Création de site internet <strong>{niche.h1tail}</strong></>}
        sub={niche.intro}
      >
        <section className="container niche">
          {/* Problèmes du métier */}
          <div className="niche__block">
            <h2>Pourquoi un {niche.singular} a besoin d'un vrai site</h2>
            <ul className="niche__pains">
              {niche.pains.map(p => (
                <li key={p}><Check size={16} aria-hidden="true" /> {p}</li>
              ))}
            </ul>
          </div>

          {/* Leviers Site web → SEO → GEO */}
          <div className="niche__block">
            <h2>Site web → SEO → GEO : les leviers pour un {niche.singular}</h2>
            <div className="niche__levers">
              {niche.levers.map((l) => {
                const Icon = LEVER_ICON[l.tag] || Globe;
                return (
                  <div className="niche__lever" key={l.title}>
                    <span className="niche__lever-icon"><Icon size={19} aria-hidden="true" /></span>
                    <div className="niche__lever-tag">{l.tag}</div>
                    <h3>{l.title}</h3>
                    <p>{l.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cas clients réels de la niche */}
          {cases.length > 0 && (
            <div className="niche__block">
              <h2>Des {niche.plural} déjà accompagnés</h2>
              <div className="related-links">
                {cases.map(c => (
                  <Link key={c.slug} href={`/realisations/${c.slug}`} className="related-link">
                    <span className="related-link__cat">{c.category}</span>
                    <span className="related-link__title">{c.name}</span>
                    <span className="related-link__sub">{c.description.slice(0, 95)}…</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ niche */}
          <div className="niche__block">
            <h2>Questions fréquentes — site internet {niche.singular}</h2>
            <div className="faqx__list">
              {niche.faq.map((item, i) => (
                <details className="faqx__item" key={i} name="niche-faq">
                  <summary className="faqx__q">
                    <span>{item.q}</span>
                    <span className="faqx__icon" aria-hidden="true">+</span>
                  </summary>
                  <div className="faqx__a"><p>{item.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBlock
          title={`Un projet de site pour votre ${niche.singular} ?`}
          text="Décrivez votre activité via le formulaire, je reviens vers vous rapidement avec une approche adaptée à votre métier."
        />
      </PageShell>
    </>
  );
}

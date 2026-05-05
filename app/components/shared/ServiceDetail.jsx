import Link from 'next/link';
import { ArrowRight, Check, MapPin, Users } from 'lucide-react';

/* Bloc de détail d'un service (composants Server) */
export default function ServiceDetail({ service, content }) {
  return (
    <>
      <section className="container" style={{ paddingBottom: 60 }}>
        <div className="prose">
          <p style={{ fontSize: '1.15rem', color: 'var(--ink)', fontWeight: 500 }}>
            {service.description}
          </p>

          {content?.intro && (
            <>
              <h2>Pourquoi ce type de site ?</h2>
              {content.intro.map((p, i) => <p key={i}>{p}</p>)}
            </>
          )}

          <h2>Inclus dans cette offre</h2>
          <ul>
            {service.items.map(it => <li key={it}>{it}</li>)}
          </ul>

          {content?.process && (
            <>
              <h2>Comment se déroule un projet ?</h2>
              {content.process.map((p, i) => <p key={i}>{p}</p>)}
            </>
          )}

          {content?.local && (
            <>
              <h2>Bordeaux, Gironde et alentours</h2>
              {content.local.map((p, i) => <p key={i}>{p}</p>)}
            </>
          )}

          <h2>Pour qui ?</h2>
          <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={18} style={{ color: 'var(--primary)' }} />
            <span>{service.forWho}</span>
          </p>

          {content?.faq && (
            <>
              <h2>Questions fréquentes</h2>
              {content.faq.map((f, i) => (
                <div key={i}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </>
          )}

          {content?.relatedServices && (
            <>
              <h2>Services liés</h2>
              <div className="related-links">
                {content.relatedServices.map(r => (
                  <Link key={r.path} href={r.path} className="related-link">
                    <span className="related-link__cat">Service</span>
                    <span className="related-link__title">{r.title}</span>
                    <span className="related-link__sub">{r.sub}</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          {content?.relatedRealisations && content.relatedRealisations.length > 0 && (
            <>
              <h2>Réalisations associées</h2>
              <div className="related-links">
                {content.relatedRealisations.map(r => (
                  <Link key={r.slug} href={`/realisations/${r.slug}`} className="related-link">
                    <span className="related-link__cat">{r.category}</span>
                    <span className="related-link__title">{r.name}</span>
                    <span className="related-link__sub">{r.description.slice(0, 90)}…</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          <p style={{ marginTop: 30 }}>
            <Link href="/contact" className="btn btn--primary">
              Demander un devis pour un {service.shortTitle.toLowerCase()} <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

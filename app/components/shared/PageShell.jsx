import Breadcrumbs from './Breadcrumbs';

/* Shell standard pour pages de contenu : breadcrumb + hero + sections */
export default function PageShell({ breadcrumb, eyebrow, h1, sub, children }) {
  return (
    <main>
      <div className="container">
        {breadcrumb && <Breadcrumbs items={breadcrumb} />}
      </div>
      <section className="page-hero">
        <div className="container">
          {eyebrow && <span className="page-hero__pill">{eyebrow}</span>}
          {h1 && <h1>{h1}</h1>}
          {sub && <p className="page-hero__sub">{sub}</p>}
        </div>
      </section>
      {children}
    </main>
  );
}

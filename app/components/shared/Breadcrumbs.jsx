import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

/* Breadcrumbs visuels — JSON-LD géré par le caller via buildBreadcrumbSchema */
export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="Fil d'Ariane">
      <ol>
        <li>
          <Link href="/" aria-label="Accueil">
            <Home size={13} />
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path || i}>
              <ChevronRight size={13} aria-hidden="true" />
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

import NichePage, { nicheMetadata } from '@/app/components/niche/NichePage';
import { getNicheBySlug } from '@/app/lib/data/niches';

const niche = getNicheBySlug('creation-site-internet-restaurant');

export const metadata = nicheMetadata(niche);

export default function Page() {
  return <NichePage niche={niche} />;
}

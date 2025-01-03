import Link from 'next/link';
import TrendingSeriesSection from './trending-series-section';
import { Serie } from '@/modules/series/types/serie';

export default function HomeSeriesSection({
  trendingSeries,
  categories,
}: {
  trendingSeries: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="px-10 sm:px-20 py-5 flex flex-col gap-10">
      <div>
        <Link
          href="/series"
          className="text-4xl font-bold text-primary hover:text-white transition-colors"
        >
          Series
        </Link>
      </div>
      <TrendingSeriesSection
        trendingSeries={trendingSeries}
        categories={categories}
      />
    </section>
  );
}

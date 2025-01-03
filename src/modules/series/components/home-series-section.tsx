import Link from 'next/link';
import TrendingSeriesSection from './trending-series-section';
import {
  fetchSeriesCategories,
  fetchTrendingSeries,
} from '@/modules/series/api';
import { cookies } from 'next/headers';

export default async function HomeSeriesSection() {
  const cookieStore = await cookies();

  const [trendingSeries, categories] = await Promise.all([
    fetchTrendingSeries(
      (cookieStore.get('trendingSeries')?.value as 'day' | 'week') ?? 'week'
    ),
    fetchSeriesCategories(),
  ]);

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

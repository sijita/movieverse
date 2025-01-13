import TrendingSeriesSection from './trending-series-section';
import {
  fetchSeriesCategories,
  fetchTrendingSeries,
} from '@/modules/series/api';
import { cookies } from 'next/headers';
import SectionTitle from '@/modules/core/components/section-title';

export default async function HomeSeriesSection() {
  const cookieStore = await cookies();

  const [trendingSeries, categories] = await Promise.all([
    fetchTrendingSeries(
      (cookieStore.get('trendingSeries')?.value as 'day' | 'week') ?? 'week'
    ),
    fetchSeriesCategories(),
  ]);

  return (
    <section className="relative overflow-hidden px-10 sm:px-20 py-5 flex flex-col gap-10 bg-[#eaeaea] pb-10">
      <SectionTitle title="Series" href="/series" />
      <TrendingSeriesSection
        trendingSeries={trendingSeries}
        categories={categories}
      />
    </section>
  );
}

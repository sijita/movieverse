import React from 'react';
import TrendingSeriesSection from './trending-series-section';
import { cookies } from 'next/headers';
import {
  fetchOnAirSeries,
  fetchSeriesCategories,
  fetchTopRatedSeries,
  fetchTrendingSeries,
} from '@/modules/series/api';
import TopSeriesSection from './top-series-section';
import OnAirSeriesSection from './on-air-series-section';

export default async function SeriesPageContent() {
  const cookieStore = await cookies();
  const [trendingSeries, onAirSeries, topSeries, categories] =
    await Promise.all([
      fetchTrendingSeries(
        (cookieStore.get('trendingSeries')?.value as 'day' | 'week') ?? 'week'
      ),
      fetchOnAirSeries(),
      fetchTopRatedSeries(),
      fetchSeriesCategories(),
    ]);

  return (
    <section className="px-10 sm:px-20 py-14 flex flex-col gap-10 bg-[#eaeaea]">
      <TrendingSeriesSection
        trendingSeries={trendingSeries}
        categories={categories}
      />
      <OnAirSeriesSection
        nowPlayingSeries={onAirSeries}
        categories={categories}
      />
      <TopSeriesSection topSeries={topSeries} categories={categories} />
    </section>
  );
}

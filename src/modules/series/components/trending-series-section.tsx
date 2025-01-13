'use client';
import { Serie } from '@/modules/series/types/serie';
import PostersRow from '@/modules/core/components/posters-row';
import TrendingTabs from '@/modules/core/components/trending-tabs';
import TrendingTitle from '@/modules/core/components/trending-title';

export default function TrendingSeriesSection({
  trendingSeries,
  categories,
}: {
  trendingSeries: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-wrap justify-between gap-5">
        <TrendingTitle title="Series" />
        <TrendingTabs type="serie" />
      </div>
      <PostersRow posters={trendingSeries} categories={categories} />
    </section>
  );
}

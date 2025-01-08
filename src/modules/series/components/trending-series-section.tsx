'use client';
import { IconFlame } from '@tabler/icons-react';
import TrendingSeriesTab from './trending-series-tab';
import { Serie } from '@/modules/series/types/serie';
import PostersRow from '@/modules/core/components/posters-row';

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
        <div className="flex items-center gap-3">
          <IconFlame
            className="text-primary fill-primary flex-shrink-0"
            size={25}
          />
          <h2 className="text-3xl font-semibold">Series en tendencia</h2>
        </div>
        <TrendingSeriesTab />
      </div>
      <PostersRow posters={trendingSeries} categories={categories} />
    </section>
  );
}

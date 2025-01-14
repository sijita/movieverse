import { Serie } from '@/modules/series/types/serie';
import PostersRow from '@/modules/core/components/posters-row';
import TrendingTabs from '@/modules/core/components/trending-tabs';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconFlame } from '@tabler/icons-react';

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
        <SectionSubtitle
          subtitle="Series en tendencia"
          rotate="-rotate-2"
          icon={
            <IconFlame
              className="text-white fill-white flex-shrink-0"
              size={25}
            />
          }
        />
        <TrendingTabs type="serie" />
      </div>
      <PostersRow posters={trendingSeries} categories={categories} />
    </section>
  );
}

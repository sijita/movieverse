import { Serie } from '@/modules/series/types/serie';
import PostersRow from '@/modules/core/components/posters-row';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconThumbUpFilled } from '@tabler/icons-react';

export default function TopSeriesSection({
  topSeries,
  categories,
}: {
  topSeries: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5">
      <SectionSubtitle
        icon={
          <IconThumbUpFilled
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Mejor votadas"
        rotate="-rotate-2"
      />
      <PostersRow posters={topSeries} categories={categories} />
    </section>
  );
}

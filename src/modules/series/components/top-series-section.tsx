import PostersRow from '@/modules/core/components/ui/posters-row';
import { IconThumbUpFilled } from '@tabler/icons-react';
import { Serie } from '@/modules/series/types/serie';

export default function TopSeriesSection({
  topSeries,
  categories,
}: {
  topSeries: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconThumbUpFilled className="text-primary flex-shrink-0" size={25} />
        <h2 className="text-3xl font-semibold">Mejor votadas</h2>
      </div>
      <PostersRow posters={topSeries} categories={categories} />
    </section>
  );
}

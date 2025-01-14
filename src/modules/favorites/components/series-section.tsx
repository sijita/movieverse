import PosterCard from '@/modules/core/components/poster-card';
import { Serie } from '@/modules/series/types/serie';

export default function SeriesSection({
  series,
  categories,
}: {
  series: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {series.map((serie, i) => (
        <div key={i} className="w-full">
          <PosterCard
            poster={serie}
            categories={categories}
            additionalClass="h-[400px] max-h-[400px]"
          />
        </div>
      ))}
    </section>
  );
}

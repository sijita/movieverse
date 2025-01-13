import type { Serie } from '../../types/serie';
import BentoCard from '@/modules/core/components/bento-card';
import CategorySubtitle from '@/modules/core/components/category-subtitle';

export default function SeriesBentoGrid({
  series,
  categories,
}: {
  series: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="w-full flex-grow flex flex-col gap-5 h-full">
      <CategorySubtitle section="Series" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 min-h-[calc(100vh-200px)] auto-rows-[minmax(0, 1fr)]">
        {series.slice(0, 7).map((serie, i) => (
          <BentoCard key={i} i={i} poster={serie} categories={categories} />
        ))}
      </div>
    </section>
  );
}

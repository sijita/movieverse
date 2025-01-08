import { Serie } from '../../types/serie';
import SerieBentoCard from './serie-bento-card';

export default function SeriesBentoGrid({
  series,
  categories,
}: {
  series: Serie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="w-full flex-grow flex flex-col gap-5 h-full">
      <h2 className="text-3xl font-bold">Series populares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 min-h-[calc(100vh-200px)] auto-rows-[minmax(0, 1fr)]">
        {series.slice(0, 7).map((serie, i) => (
          <SerieBentoCard key={i} i={i} serie={serie} categories={categories} />
        ))}
      </div>
    </section>
  );
}

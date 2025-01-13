import type { Movie } from '@/modules/movies/types/movie';
import BentoCard from '@/modules/core/components/bento-card';
import CategorySubtitle from '@/modules/core/components/category-subtitle';

export default function MoviesBentoGrid({
  movies,
  categories,
}: {
  movies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="w-full flex-1 flex flex-col gap-5 h-full">
      <CategorySubtitle section="Películas" />
      <div className="grid max-sm:auto-rows-[180px] sm:auto-rows-[minmax(0,1fr)] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:h-full sm:overflow-hidden">
        {movies.slice(0, 7).map((movie, i) => (
          <BentoCard key={i} i={i} poster={movie} categories={categories} />
        ))}
      </div>
    </section>
  );
}

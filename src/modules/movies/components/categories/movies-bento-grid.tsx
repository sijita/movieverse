import type { Movie } from '@/modules/movies/types/movie';
import { IconRosetteFilled } from '@tabler/icons-react';
import BentoCard from '@/modules/core/components/bento-card';

export default function MoviesBentoGrid({
  movies,
  categories,
}: {
  movies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="w-full flex-1 flex flex-col gap-5 h-full">
      <div className="flex items-center max-sm:text-center gap-1 transform -rotate-2 bg-black p-2 w-fit">
        <IconRosetteFilled
          className="text-white fill-white flex-shrink-0"
          size={25}
        />
        <h2 className="text-3xl font-bold">Películas populares</h2>
      </div>
      <div className="grid max-sm:auto-rows-[180px] sm:auto-rows-[minmax(0,1fr)] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:h-full sm:overflow-hidden">
        {movies.slice(0, 7).map((movie, i) => (
          <BentoCard key={i} i={i} poster={movie} categories={categories} />
        ))}
      </div>
    </section>
  );
}

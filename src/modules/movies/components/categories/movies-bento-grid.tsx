import { Movie } from '@/modules/movies/types/movie';
import MovieBentoCard from './movie-bento-card';

export default function MoviesBentoGrid({
  movies,
  categories,
}: {
  movies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="w-full flex-1 flex flex-col gap-5 h-full">
      <h2 className="text-3xl font-bold">Películas populares</h2>
      <div className="grid max-sm:auto-rows-[180px] sm:auto-rows-[minmax(0,1fr)] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:h-full sm:overflow-hidden">
        {movies.slice(0, 7).map((movie, i) => (
          <MovieBentoCard key={i} i={i} movie={movie} categories={categories} />
        ))}
      </div>
    </section>
  );
}

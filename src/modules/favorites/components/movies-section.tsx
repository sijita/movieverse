import PosterCard from '@/modules/core/components/poster-card';
import { Movie } from '@/modules/movies/types/movie';

export default function MoviesSection({
  movies,
  categories,
}: {
  movies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {movies.map((movie, i) => (
        <div key={i} className="w-full">
          <PosterCard poster={movie} categories={categories} />
        </div>
      ))}
    </section>
  );
}

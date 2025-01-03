import { IconRotateClockwise2 } from '@tabler/icons-react';
import MoviesRow from '../../core/components/ui/posters-row';
import { Movie } from '@/modules/movies/types/movie';

export default function UpcomingMoviesSection({
  upcomingMovies,
  categories,
}: {
  upcomingMovies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5 px-10 sm:px-20 py-5">
      <div className="flex items-center gap-3">
        <IconRotateClockwise2
          className="text-primary flex-shrink-0"
          size={25}
        />
        <h2 className="text-3xl font-semibold">Próximos estrenos</h2>
      </div>
      <MoviesRow movies={upcomingMovies} categories={categories} />
    </section>
  );
}

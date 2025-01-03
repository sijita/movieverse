import { IconTicket } from '@tabler/icons-react';
import { Movie } from '@/modules/movies/types/movie';
import PostersRow from '@/modules/core/components/ui/posters-row';

export default function NowPlayingMoviesSection({
  nowPlayingMovies,
  categories,
}: {
  nowPlayingMovies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconTicket className="text-primary flex-shrink-0" size={25} />
        <h2 className="text-3xl font-semibold">Últimos estrenos</h2>
      </div>
      <PostersRow posters={nowPlayingMovies} categories={categories} />
    </section>
  );
}

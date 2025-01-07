import {
  fetchMovieById,
  fetchMovieCredits,
  fetchSimilarMovies,
} from '@/modules/movies/[id]/api';
import { fetchMoviesCategories } from '@/modules/movies/api';
import MovieDetails from '@/modules/movies/[id]/components/movie-details';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, credits, similars, categories] = await Promise.all([
    fetchMovieById(id),
    fetchMovieCredits(id),
    fetchSimilarMovies(id),
    fetchMoviesCategories(),
  ]);

  return (
    <main className="min-h-screen">
      <MovieDetails
        movie={movie}
        credits={credits}
        similars={similars}
        categories={categories}
      />
    </main>
  );
}

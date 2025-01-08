import {
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
} from '@/modules/movies/[id]/api';
import { fetchMoviesCategories } from '@/modules/movies/api';
import MovieDetails from '@/modules/movies/[id]/components/movie-details';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [movie, credits, similars, categories, trailer] = await Promise.all([
    fetchMovieById(id),
    fetchMovieCredits(id),
    fetchSimilarMovies(id),
    fetchMoviesCategories(),
    fetchMovieTrailer(id),
  ]);

  return (
    <main className="min-h-screen">
      <MovieDetails
        movie={movie}
        credits={credits}
        similars={similars}
        categories={categories}
        trailer={trailer}
      />
    </main>
  );
}

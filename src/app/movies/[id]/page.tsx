import {
  fetchMovieCredits,
  fetchRecommendationsByMovie,
} from '@/modules/movies/[id]/api';
import { fetchMovieById, fetchMoviesCategories } from '@/modules/movies/api';
import MovieDetails from '@/modules/movies/[id]/components/movie-details';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await fetchMovieById(id);
  const movieCredits = await fetchMovieCredits(id);
  const moviesRecommendations = await fetchRecommendationsByMovie(id);
  const categories = await fetchMoviesCategories();

  return (
    <main className="min-h-screen">
      <MovieDetails
        movie={movie}
        credits={movieCredits}
        similars={moviesRecommendations}
        categories={categories}
      />
    </main>
  );
}

'use client';
import { Movie } from '@/modules/movies/types/movie';
import PostersRow from '@/modules/core/components/posters-row';
import TrendingTabs from '@/modules/core/components/trending-tabs';
import TrendingTitle from '@/modules/core/components/trending-title';

export default function TrendingMoviesSection({
  trendingMovies,
  categories,
}: {
  trendingMovies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-wrap justify-between gap-5">
        <TrendingTitle title="Peliculas" />
        <TrendingTabs type="movie" />
      </div>
      <PostersRow posters={trendingMovies} categories={categories} />
    </section>
  );
}

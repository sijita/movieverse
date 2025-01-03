'use client';
import { IconFlame } from '@tabler/icons-react';
import TrendingMoviesTab from './trending-movies-tab';
import { Movie } from '@/modules/movies/types/movie';
import PostersRow from '@/modules/core/components/ui/posters-row';

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
        <div className="flex items-center gap-3">
          <IconFlame
            className="text-primary fill-primary flex-shrink-0"
            size={25}
          />
          <h2 className="text-3xl font-semibold">Películas en tendencia</h2>
        </div>
        <TrendingMoviesTab />
      </div>
      <PostersRow posters={trendingMovies} categories={categories} />
    </section>
  );
}

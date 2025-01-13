'use client';
import { Movie } from '@/modules/movies/types/movie';
import PostersRow from '@/modules/core/components/posters-row';
import TrendingTabs from '@/modules/core/components/trending-tabs';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconFlame } from '@tabler/icons-react';

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
        <SectionSubtitle
          subtitle="Películas en tendencia"
          rotate="-rotate-2"
          icon={
            <IconFlame
              className="text-white fill-white flex-shrink-0"
              size={25}
            />
          }
        />
        <TrendingTabs type="movie" />
      </div>
      <PostersRow posters={trendingMovies} categories={categories} />
    </section>
  );
}

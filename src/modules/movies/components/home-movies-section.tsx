import Link from 'next/link';
import TrendingMoviesSection from './trending-movies-section';
import NowPlayingMoviesSection from './now-playing-movies-section';
import { Movie } from '@/modules/movies/types/movie';

export default function HomeMoviesSection({
  trendingMovies,
  nowPlayingMovies,
  categories,
}: {
  trendingMovies: Movie[];
  nowPlayingMovies: Movie[];
  categories: { id: number; name: string }[];
}) {
  return (
    <section className="px-10 sm:px-20 py-5 flex flex-col gap-10">
      <div>
        <Link
          href="/movies"
          className="text-4xl font-bold text-primary hover:text-white transition-colors"
        >
          Películas
        </Link>
      </div>
      <TrendingMoviesSection
        trendingMovies={trendingMovies}
        categories={categories}
      />
      <NowPlayingMoviesSection
        nowPlayingMovies={nowPlayingMovies}
        categories={categories}
      />
    </section>
  );
}

import Hero from '@/modules/core/components/ui/hero';
import { fetchRandomMovie } from '../modules/movies/api';
import HomeMoviesSection from '@/modules/movies/components/home-movies-section';
import HomeSeriesSection from '@/modules/series/components/home-series-section';

export default async function Home() {
  const movie = await fetchRandomMovie();

  return (
    <main className="min-h-screen flex flex-col">
      <Hero poster={movie} />
      <HomeMoviesSection />
      <HomeSeriesSection />
    </main>
  );
}

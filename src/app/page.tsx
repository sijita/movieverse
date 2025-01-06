import Hero from '@/modules/core/components/ui/hero';
import { fetchRandomMovie } from '../modules/movies/api';
import HomeMoviesSection from '@/modules/movies/components/home-movies-section';
import HomeSeriesSection from '@/modules/series/components/home-series-section';
import { Divider } from '@nextui-org/react';

export default async function Home() {
  const movie = await fetchRandomMovie();

  return (
    <main className="min-h-screen flex flex-col">
      <Hero poster={movie} />
      <HomeMoviesSection />
      <div className="my-10 px-20 max-sm:px-10">
        <Divider />
      </div>
      <HomeSeriesSection />
    </main>
  );
}

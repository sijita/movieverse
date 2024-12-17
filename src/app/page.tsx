import Hero from '@/components/ui/hero';
import { fetchRandomMovie } from './api';

export default async function Home() {
  const movie = await fetchRandomMovie();

  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Hero movie={movie} />
    </main>
  );
}

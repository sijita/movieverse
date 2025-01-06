import Hero from '@/modules/core/components/ui/hero';
import { fetchRandomMovie } from '@/modules/movies/api';
import MoviesCategoriesSection from '@/modules/movies/components/categories/movies-categories-section';
import MoviesPageContent from '@/modules/movies/components/movies-page-content'

export default async function Page() {
  const movie = await fetchRandomMovie();

  return (
    <main className="min-h-screen flex flex-col">
      <Hero poster={movie} />
      <MoviesCategoriesSection />
      <MoviesPageContent />
    </main>
  );
}

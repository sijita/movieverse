import Hero from '@/components/ui/hero';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Hero movie={{ id: 0, backdrop_path: '', title: '', release_date: '' }} />
    </main>
  );
}

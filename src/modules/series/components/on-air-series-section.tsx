'use client';
import { Button } from '@nextui-org/react';
import { IconClockFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { Serie } from '@/modules/series/types/serie';
import PosterCard from '@/modules/core/components/ui/poster-card';

export default function OnAirSeriesSection({
  nowPlayingSeries,
  categories,
}: {
  nowPlayingSeries: Serie[];
  categories: { id: number; name: string }[];
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconClockFilled className="text-primary flex-shrink-0" size={25} />
        <h2 className="text-3xl font-semibold">Últimos estrenos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {nowPlayingSeries.slice(0, showMore ? 20 : 10).map((serie, i) => (
          <div key={i} className="w-full">
            <PosterCard poster={serie} categories={categories} />
          </div>
        ))}
      </div>
      <Button
        onPress={() => setShowMore(!showMore)}
        color="primary"
        className="w-full text-black font-medium"
      >
        {showMore ? 'Mostrar menos' : 'Mostrar más'}
      </Button>
    </section>
  );
}

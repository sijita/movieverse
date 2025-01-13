'use client';
import { useState } from 'react';
import { Serie } from '@/modules/series/types/serie';
import PosterCard from '@/modules/core/components/poster-card';
import ShowMoreBtn from '@/modules/core/components/show-more-btn';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconClockFilled } from '@tabler/icons-react';

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
      <SectionSubtitle
        icon={
          <IconClockFilled
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Estrenos"
        rotate="rotate-1"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {nowPlayingSeries.slice(0, showMore ? 20 : 10).map((serie, i) => (
          <div key={i} className="w-full">
            <PosterCard poster={serie} categories={categories} />
          </div>
        ))}
      </div>
      <ShowMoreBtn
        showMore={showMore}
        setShowMore={() => setShowMore(!showMore)}
      />
    </section>
  );
}

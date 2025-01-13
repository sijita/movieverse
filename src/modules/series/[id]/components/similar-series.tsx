'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Serie } from '@/modules/series/types/serie';
import type { SerieSimilars } from '@/modules/series/[id]/types/serie-similars';
import { IconKeyframesFilled } from '@tabler/icons-react';
import PosterCard from '@/modules/core/components/poster-card';
import ShowMoreBtn from '@/modules/core/components/show-more-btn';
import SectionSubtitle from '@/modules/core/components/section-subtitle';

export default function SimilarSeries({
  similars,
  categories,
}: {
  similars: SerieSimilars[];
  categories: { id: number; name: string }[];
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <SectionSubtitle
        icon={
          <IconKeyframesFilled
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Películas similares"
        rotate="rotate-1"
      />
      <div className="grid max-[400px]:grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {similars
          .filter((similarSerie) => similarSerie.poster_path)
          .slice(0, showMore ? similars.length : 5)
          .map((similarSerie) => (
            <PosterCard
              key={similarSerie.id}
              poster={similarSerie as unknown as Serie}
              categories={categories}
            />
          ))}
      </div>
      <ShowMoreBtn
        showMore={showMore}
        setShowMore={() => setShowMore(!showMore)}
      />
    </motion.div>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import type { Serie } from '@/modules/series/types/serie';
import type { SerieSimilars } from '@/modules/series/[id]/types/serie-similars';
import { IconKeyframesFilled } from '@tabler/icons-react';
import PosterCard from '@/modules/core/components/poster-card';

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
      <div className="flex items-center gap-3">
        <IconKeyframesFilled
          className="text-primary fill-primary flex-shrink-0"
          size={25}
        />
        <h2 className="text-3xl font-semibold">Series similares</h2>
      </div>
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
      <Button
        onPress={() => setShowMore(!showMore)}
        color="primary"
        className="w-full text-black font-medium"
      >
        {showMore ? 'Mostrar menos' : 'Mostrar más'}
      </Button>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import type { MovieCredits } from '@/modules/movies/[id]/types/movie-credits';
import Image from 'next/image';
import SectionSubtitle from '@/modules/core/components/section-subtitle';
import { IconUsersGroup } from '@tabler/icons-react';

export default function MovieCast({ credits }: { credits: MovieCredits[] }) {
  return (
    <motion.article
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <SectionSubtitle
        icon={
          <IconUsersGroup
            className="text-white fill-white flex-shrink-0"
            size={25}
          />
        }
        subtitle="Reparto"
        rotate="-rotate-2"
      />
      <div className="flex items-center gap-6 overflow-auto pb-5">
        {credits
          .filter((credit) => credit.profile_path)
          .map((credit) => (
            <div key={credit.id} className="text-center flex-shrink-0">
              <Image
                src={`https://image.tmdb.org/t/p/w185${credit.profile_path}`}
                alt={credit.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
                width={185}
                height={278}
                loading="lazy"
              />
              <p className="font-semibold text-black">{credit.name}</p>
              <p className="text-sm text-gray-800">{credit.character}</p>
            </div>
          ))}
      </div>
    </motion.article>
  );
}

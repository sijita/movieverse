import { motion } from 'framer-motion';
import { IconUsersGroup } from '@tabler/icons-react';
import Image from 'next/image';
import type { SerieCredits } from '@/modules/series/[id]/types/serie-credits';
import SectionSubtitle from '@/modules/core/components/section-subtitle';

export default function SerieCast({ credits }: { credits: SerieCredits[] }) {
  return (
    <motion.div
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
                className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
                width={185}
                height={278}
                loading="lazy"
              />
              <p className="font-semibold text-black">{credit.name}</p>
              <p className="text-sm text-gray-800">{credit.character}</p>
            </div>
          ))}
      </div>
    </motion.div>
  );
}

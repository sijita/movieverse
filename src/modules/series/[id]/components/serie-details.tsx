'use client';
import type { SerieDetails } from '@/modules/series/[id]/types/serie-details';
import type { SerieCredits } from '@/modules/series/[id]/types/serie-credits';
import type { SerieSimilars } from '@/modules/series/[id]/types/serie-similars';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Button,
  Chip,
  Modal,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import {
  IconCalendar,
  IconHeart,
  IconPlayerPlayFilled,
  IconSection,
  IconStarFilled,
} from '@tabler/icons-react';
import SerieCast from './serie-cast';
import SimilarSeries from './similar-series';
import Link from 'next/link';

export default function SerieDetails({
  serie,
  credits,
  similars,
  categories,
  trailer,
}: {
  serie: SerieDetails;
  credits: SerieCredits[];
  similars: SerieSimilars[];
  categories: { id: number; name: string }[];
  trailer: string;
}) {
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  return (
    <section>
      {trailer?.length > 0 && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          size="3xl"
        >
          <ModalContent className="sm:max-w-[800px] p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </ModalContent>
        </Modal>
      )}
      <header
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </header>
      <section className="px-10 sm:px-20 -mt-[200px] relative z-10">
        <article className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative max-[350px]:w-full w-64 h-96 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out">
              <Image
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
          <div className="flex flex-col gap-3 flex-grow">
            <div className="flex items-center gap-5">
              <motion.h1
                className="text-4xl md:text-5xl font-bold truncate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {serie.name}
              </motion.h1>
              <Chip size="lg">
                <div className="flex items-center gap-1">
                  <IconStarFilled className="text-yellow-400" size={20} />
                  <span className="text-2xl font-semibold">
                    {serie.vote_average.toFixed(1)}
                  </span>
                </div>
              </Chip>
            </div>
            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-1 truncate">
                <IconSection size={20} className="text-primary flex-shrink-0" />
                <span>{serie.number_of_seasons} Temporadas</span>
                <span>-</span>
                <span>{serie.number_of_episodes} Episodios</span>
              </div>
              <div className="flex items-center gap-1">
                <IconCalendar
                  size={20}
                  className="text-primary flex-shrink-0"
                />
                <span>{new Date(serie.first_air_date).getFullYear()}</span>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {serie.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  color="primary"
                  className="bg-white/20 text-white text-xs"
                  size="sm"
                >
                  {genre.name}
                </Chip>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-200 leading-relaxed text-lg mt-3"
            >
              {serie.overview}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <Button
                className="text-md text-black font-semibold uppercase max-xl:w-full max-sm:flex-1"
                radius="full"
                color="primary"
                href={serie.homepage}
                as={Link}
                target="_blank"
              >
                <IconPlayerPlayFilled size={20} />
              </Button>
              {trailer?.length > 0 && (
                <Button
                  className="text-primary max-sm:flex-1"
                  onPress={() => onOpen()}
                  radius="full"
                >
                  Ver trailer
                </Button>
              )}
              <Button variant="flat" radius="full" isIconOnly>
                <IconHeart size={20} className="flex-shrink-0" />
              </Button>
            </motion.div>
          </div>
        </article>
      </section>
      <article className="px-10 sm:px-20 pt-14 pb-5 flex flex-col gap-10">
        <SerieCast credits={credits} />
        <SimilarSeries similars={similars} categories={categories} />
      </article>
    </section>
  );
}

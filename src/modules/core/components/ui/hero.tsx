'use client';
import { Movie } from '@/modules/movies/types/movie';
import { Serie } from '@/modules/series/types/serie';
import { Button } from '@nextui-org/react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { funnelDisplay } from '../../styles/fonts/fonts';
import { motion } from 'framer-motion';

export default function Hero({ poster }: { poster: Movie | Serie }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const posterTitle =
    poster && 'title' in poster ? poster?.title : poster?.name;
  const posterDate =
    poster && 'release_date' in poster
      ? poster?.release_date
      : poster?.first_air_date;
  const formattedDate =
    posterDate &&
    new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(posterDate));

  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-center gap-10 min-h-[40rem] p-10 bg-[#baff29]">
      <div className="absolute inset-0 h-full w-full bg-primary bg-[radial-gradient(#96e600_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      {isHomePage && (
        <div className="flex flex-col items-center gap-5 sm:w-1/2 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-5xl lg:text-7xl text-center font-black text-white transform -rotate-1 drop-shadow-md ${funnelDisplay.className}`}
          >
            Bienvenido a MovieVerse
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black p-2 transform rotate-1 w-auto sm:w-fit z-30"
          >
            <p className="text-2xl text-white text-center font-semibold">
              Información acerca de películas y series
            </p>
          </motion.div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 sm:w-1/2 w-full"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-4xl font-black transform -rotate-1 drop-shadow-md">
            {posterTitle}
          </h3>
          <div className="bg-black p-1 w-fit z-30">
            <span className="text-sm text-white font-semibold">
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original${poster?.poster_path}`}
            width={500}
            height={500}
            alt={posterTitle}
            className="w-[500px] h-[300px] transform rotate-2 object-cover object-top border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            priority
          />
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
            <Button
              href={`/movies/${poster?.id}`}
              as={Link}
              className="bg-black text-white font-bold text-xl p-6 border-2 border-white transform hover:rotate-2 hover:scale-105 transition-transform rounded-sm z-30"
              startContent={<IconPlayerPlayFilled />}
            >
              Ver ahora
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

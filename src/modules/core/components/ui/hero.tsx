'use client';
import { Movie } from '@/modules/movies/types/movie';
import { Serie } from '@/modules/series/types/serie';
import { Button } from '@nextui-org/react';
import { IconHeart, IconPlayerPlayFilled } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Hero({ poster }: { poster: Movie | Serie }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const posterTitle = poster && 'title' in poster ? poster?.title : poster?.name;
  const posterDate = poster && 'release_date' in poster ? poster?.release_date : poster?.first_air_date;
  const formattedDate = posterDate && new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(posterDate));
  const posterOverview = poster?.overview.slice(0, 100) + '...';

  return (
    <section className="flex flex-col items-center justify-center min-h-[40rem] relative p-10 mb-10">
      <Image
        src={`https://image.tmdb.org/t/p/original${poster?.poster_path}`}
        width={1280}
        height={720}
        alt={posterTitle}
        className="object-cover w-full h-full absolute z-0 filter brightness-50 blur-sm"
        priority
      />
      {isHomePage && (
        <div className="flex flex-col items-center justify-center gap-5 z-10">
          <h1 className="lg:text-5xl text-4xl text-center text-inherit font-bold drop-shadow-lg">
            Bienvenido a MovieVerse
          </h1>
          <p className="text-xl font-medium drop-shadow-lg text-center">
            Encontraras las mejores películas y series
          </p>
        </div>
      )}
      <div
        className={`flex flex-col gap-5 absolute ${
          isHomePage ? 'xl:left-[5rem] bottom-10' : 'top-1/2 transform -translate-y-1/2'
        } sm:w-96`}
      >
        <div className={`${!isHomePage && 'text-center'}`}>
          {formattedDate && (
            <p className="text-gray-300 text-lg font-semibold">{formattedDate}</p>
          )}
          <h2 className="text-inherit text-4xl max-sm:text-2xl font-bold">{posterTitle}</h2>
          {!isHomePage && (
            <p className="text-gray-300 text-lg font-semibold">{posterOverview}</p>
          )}
        </div>
        <div className={`flex flex-row gap-3 ${!isHomePage && 'justify-center'}`}>
          <Button
            className="text-md text-black font-semibold uppercase max-xl:w-full"
            radius="full"
            color="primary"
            href={`/movies/${poster?.id}`}
            as={Link}
          >
            <IconPlayerPlayFilled size={20} />
          </Button>
          <Button variant="flat" radius="full" isIconOnly>
            <IconHeart size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}

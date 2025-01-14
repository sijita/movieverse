'use client';
import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import MoviesSection from './movies-section';
import SeriesSection from './series-section';
import { Movie } from '@/modules/movies/types/movie';
import { Serie } from '@/modules/series/types/serie';
import SectionTitle from '@/modules/core/components/section-title';

export default function TypeTabs({
  movies,
  series,
  movieCategories,
  serieCategories,
}: {
  movies: Movie[];
  series: Serie[];
  movieCategories: { id: number; name: string }[];
  serieCategories: { id: number; name: string }[];
}) {
  return (
    <div className="p-10 sm:p-20 flex flex-col gap-5">
      <SectionTitle title="Favoritos" href="/favorites" />
      <Tabs
        radius="full"
        size="lg"
        className="w-full flex items-center justify-center"
        classNames={{
          tabList: 'bg-default w-full md:w-auto rounded-sm',
          tabContent: 'group-data-[selected=true]:text-black',
          base: 'w-full md:w-auto font-semibold',
          cursor: 'rounded-sm group-data-[selected=true]:bg-[#baff29]',
          tab: 'rounded-sm',
        }}
      >
        <Tab key="movies" title="Películas">
          <MoviesSection movies={movies} categories={movieCategories} />
        </Tab>
        <Tab key="series" title="Series">
          <SeriesSection series={series} categories={serieCategories} />
        </Tab>
      </Tabs>
    </div>
  );
}

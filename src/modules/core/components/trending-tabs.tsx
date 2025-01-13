'use client';
import { handleSelectTrendingKey as handleSelectMovieTrendingKey } from '@/modules/movies/actions';
import { handleSelectTrendingKey as handleSelectSerieTrendingKey } from '@/modules/series/actions';
import { Tab, Tabs } from '@nextui-org/react';

export default function TrendingTabs({ type }: { type: string }) {
  return (
    <Tabs
      radius="full"
      size="lg"
      classNames={{
        tabList: 'bg-default w-full md:w-auto rounded-sm',
        tabContent: 'group-data-[selected=true]:text-black',
        base: 'w-full md:w-auto font-semibold',
        cursor: 'rounded-sm group-data-[selected=true]:bg-[#baff29]',
        tab: 'rounded-sm',
      }}
      onSelectionChange={async (key) =>
        type === 'movie'
          ? await handleSelectMovieTrendingKey(key as 'day' | 'week')
          : await handleSelectSerieTrendingKey(key as 'day' | 'week')
      }
      defaultSelectedKey={'week'}
    >
      <Tab key="week" title="Esta semana" />
      <Tab key="day" title="Hoy" />
    </Tabs>
  );
}

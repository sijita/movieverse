'use client';
import { handleSelectTrendingKey } from '@/modules/series/actions';
import { Tab, Tabs } from '@nextui-org/react';

export default function TrendingSeriesTab() {
  return (
    <Tabs
      radius="full"
      color="primary"
      size="lg"
      classNames={{
        tabList: 'bg-default w-full md:w-auto',
        tabContent: 'group-data-[selected=true]:text-black font-medium',
        base: 'w-full md:w-auto',
      }}
      onSelectionChange={async (key) =>
        await handleSelectTrendingKey(key as 'day' | 'week')
      }
      defaultSelectedKey={'week'}
    >
      <Tab key="week" title="Esta semana" />
      <Tab key="day" title="Hoy" />
    </Tabs>
  );
}

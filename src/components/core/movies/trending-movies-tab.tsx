'use client';
import useSelectTrendingKey from '@/hooks/use-select-trending-key';
import { Tab, Tabs } from '@nextui-org/react';

export default function TrendingMoviesTab() {
  const { handleSelectKey } = useSelectTrendingKey();

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
      onSelectionChange={(key) => handleSelectKey(key as 'week' | 'day')}
      defaultSelectedKey={'week'}
    >
      <Tab key="week" title="Esta semana" />
      <Tab key="day" title="Hoy" />
    </Tabs>
  );
}

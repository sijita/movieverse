import { IconFlame } from '@tabler/icons-react';

export default function TrendingTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center max-sm:text-center gap-1 transform -rotate-2 bg-black p-2">
      <IconFlame className="text-white fill-white flex-shrink-0" size={25} />
      <h2 className="text-3xl font-semibold text-white">
        {title} en tendencia
      </h2>
    </div>
  );
}

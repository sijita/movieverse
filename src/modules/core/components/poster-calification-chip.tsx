import { Chip } from '@nextui-org/react';
import { IconStar } from '@tabler/icons-react';

export default function PosterCalificationChip({
  calification,
}: {
  calification: number;
}) {
  return (
    <Chip
      size="sm"
      className="absolute top-3 right-3 space-x-2 z-10 p-1 rounded-sm"
    >
      <div className="flex items-center gap-1">
        <IconStar size={13} className="text-yellow-400 fill-yellow-400" />
        <span className="text-white/80 text-sm font-semibold font-mono">
          {calification.toFixed(1)}
        </span>
      </div>
    </Chip>
  );
}

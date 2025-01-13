import { Button } from '@nextui-org/react';
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';

export default function ShowMoreBtn({
  showMore,
  setShowMore,
}: {
  showMore: boolean;
  setShowMore: () => void;
}) {
  return (
    <Button
      onPress={setShowMore}
      className="w-full text-white font-bold rounded-sm bg-black hover:bg-white hover:text-black transition-colors"
      endContent={showMore ? <IconCaretUpFilled /> : <IconCaretDownFilled />}
    >
      {showMore ? 'Mostrar menos' : 'Mostrar más'}
    </Button>
  );
}

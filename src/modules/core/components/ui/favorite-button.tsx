'use client';
import { Button, Spinner } from '@nextui-org/react';
import { IconHeart } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import useHandlingFavorite from '@/modules/core/hooks/use-handling-favorite';

export default function FavoriteButton({
  id,
  type,
}: {
  id: string;
  type: string;
}) {
  const { isLoading, isFavorite, toggleFavorite } = useHandlingFavorite({
    itemId: id,
    type,
  });

  return (
    <>
      {isLoading ? (
        <Spinner size="sm" />
      ) : (
        <Button
          isIconOnly
          aria-label={
            isFavorite() ? 'Remove from favorites' : 'Add to favorites'
          }
          onPress={toggleFavorite}
          className={`rounded-sm transition-all duration-300 ${
            isFavorite() ? 'bg-danger hover:bg-transparent' : 'bg-transparent'
          }`}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isFavorite() ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            <IconHeart
              className={`h-6 w-6 ${
                isFavorite()
                  ? 'fill-white stroke-white hover:fill-transparent hover:stroke-danger'
                  : 'fill-none stroke-danger hover:fill-danger'
              }`}
            />
          </motion.div>
        </Button>
      )}
    </>
  );
}

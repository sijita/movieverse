import { createClient } from '@/utils/supabase/client';
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from '@/modules/core/actions/favorites';
import toast from 'react-hot-toast';
import useSWR from 'swr';

export default function useHandlingFavorite({
  itemId,
  type,
}: {
  itemId: string;
  type: string;
}) {
  const {
    data: favorites = [],
    mutate,
    isLoading,
  } = useSWR('user-favorites', getFavorites, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const isFavorite = () => favorites?.includes(itemId);

  const toggleFavorite = async () => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return toast.error('Inicia sesión para agregar a favoritos');
    }

    try {
      mutate((currentFavorites) => {
        if (isFavorite()) {
          return currentFavorites?.filter((id) => id !== itemId);
        } else {
          return [...(currentFavorites || []), itemId];
        }
      }, false);

      if (isFavorite()) {
        const { message } = await removeFavorite(itemId, type);
        toast.success(message);
      } else {
        const { message } = await addFavorite(itemId, type);
        toast.success(message);
      }

      mutate();
    } catch {
      toast.error('Hubo un problema al cambiar el estado de favorito');
    }
  };

  return {
    isFavorite,
    isLoading,
    toggleFavorite,
  };
}

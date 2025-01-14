'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export const addFavorite = async (id: string, type: string) => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        type: 'error',
        message: 'Inicia sesion para agregar a favoritos',
      };
    }

    await supabase
      .from('user_favorites')
      .insert([{ favorite_item: id, user_id: user.id }])
      .throwOnError();

    revalidatePath('/', 'layout');

    return {
      type: 'success',
      message: `${type} agregada a favoritos`,
    };
  } catch {
    return {
      type: 'error',
      message: 'Error al agregar a favoritos',
    };
  }
};

export const removeFavorite = async (id: string, type: string) => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        type: 'error',
        message: 'Inicia sesion para remover de favoritos',
      };
    }

    await supabase
      .from('user_favorites')
      .delete()
      .match({ favorite_item: id, user_id: user.id })
      .throwOnError();

    revalidatePath('/', 'layout');

    return {
      type: 'success',
      message: `${type} eliminada de favoritos`,
    };
  } catch {
    return {
      type: 'error',
      message: 'Error al eliminar de favoritos',
    };
  }
};

export const getFavorites = async () => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    }

    const { data } = await supabase
      .from('user_favorites')
      .select('favorite_item')
      .eq('user_id', user.id)
      .throwOnError();

    return Array.isArray(data) ? data.map((item) => item.favorite_item) : [];
  } catch {
    return [];
  }
};

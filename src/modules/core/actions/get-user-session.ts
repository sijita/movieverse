'use server';
import { createClient } from '@/utils/supabase/client';

export const getUserSession = async () => {
  const supabase = createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch {
    return null;
  }
};

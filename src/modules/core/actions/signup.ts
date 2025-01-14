'use server';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import { signupSchema } from '@/modules/core/schemas/signup-schema';

export async function signupAction(formData: FormData) {
  try {
    const supabase = await createClient();

    const dataToParse = Object.fromEntries(formData);
    const parsedData = signupSchema.safeParse(dataToParse);

    if (!parsedData.success) {
      return {
        type: 'error',
        message: 'Los datos ingresados son incorrectos',
        errors: parsedData.error.flatten().fieldErrors,
      };
    }

    const { error } = await supabase.auth.signUp({
      email: parsedData.data.email,
      password: parsedData.data.password,
    });

    if (error) {
      throw error.message;
    }

    revalidatePath('/', 'layout');

    return {
      type: 'success',
      message: 'Registro exitoso, por favor verifique su correo',
    };
  } catch (error) {
    return {
      type: 'error',
      message: 'Hubo un error al registrarse, intentelo de nuevo',
      errors: error as string,
    };
  }
}

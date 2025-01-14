'use client';
import { Button, Input } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { signupAction } from '@/modules/core/actions/signup';

export default function SignupForm() {
  const { pending } = useFormStatus();

  return (
    <form
      action={async (formData) => {
        const { type, message, errors } = await signupAction(formData);

        if (type === 'success') {
          toast.success(message as string, { duration: 5000 });
          return redirect('/');
        }

        if (type === 'error') {
          toast.error({
            message,
            description: Object.values(errors ?? []).join(', '),
          });
        }
      }}
      className="space-y-3"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold">
          Correo electrónico
        </label>
        <Input
          classNames={{
            inputWrapper: 'rounded-sm bg-white text-black',
          }}
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          minLength={5}
          isRequired
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-bold">
          Contraseña
        </label>
        <Input
          classNames={{
            inputWrapper: 'rounded-sm bg-white text-black',
          }}
          type="password"
          id="password"
          name="password"
          placeholder="*********"
          minLength={6}
          isRequired
        />
      </div>
      <Button
        className="rounded-sm w-full text-black font-bold"
        color="primary"
        type="submit"
        isDisabled={pending}
      >
        {pending ? 'Registrando...' : 'Registrarme'}
      </Button>
    </form>
  );
}

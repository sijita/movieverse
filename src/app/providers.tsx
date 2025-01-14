'use client';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';
import axios from 'axios';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          axios.get(resource, init).then((res) => res.data),
      }}
    >
      <NextUIProvider>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0d0d0d',
              color: '#fff',
              borderRadius: '5px',
            },
          }}
        />
        {children}
      </NextUIProvider>
    </SWRConfig>
  );
}

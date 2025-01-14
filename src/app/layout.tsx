import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import MyNavbar from '@/modules/core/components/ui/my-nav-bar';
import Footer from '@/modules/core/components/ui/footer';
import { funnelDisplay } from '@/modules/core/styles/fonts/fonts';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Movieverse',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="es" className="dark">
      <body className={`${funnelDisplay.className} antialiased`}>
        <Providers>
          <MyNavbar user={user} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import MyNavbar from '@/modules/core/components/ui/my-nav-bar';
import Footer from '@/modules/core/components/ui/footer';
import { funnelDisplay } from '@/modules/core/styles/fonts/fonts';

export const metadata: Metadata = {
  title: 'Movieverse',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${funnelDisplay.className} antialiased`}>
        <Providers>
          <MyNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

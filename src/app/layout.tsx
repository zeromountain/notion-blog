import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { HomeLayout } from '@/components/layouts/home-layouts';
import { WithNextUIProvider } from '@/providers/with-next-ui-provider';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WithNextUIProvider>
          <HomeLayout>{children}</HomeLayout>
          {modal}
        </WithNextUIProvider>
      </body>
    </html>
  );
}
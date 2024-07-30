import type { Metadata } from 'next';
import './globals.css';
import { lato } from '../ui/fonts';

export const metadata: Metadata = {
  title: 'Mi portafolio - Lucas Cardozo',
  description: 'Bienvenidos a mi portafolio',
  authors: [{ name: 'Lucas Iván Cardozo' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} overflow-x-clip`}>{children}</body>
    </html>
  );
}

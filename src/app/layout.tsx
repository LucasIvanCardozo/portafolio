import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './ui/fonts';

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

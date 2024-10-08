import type { Metadata } from 'next';
import './globals.css';
import { cabin } from '../ui/fonts';

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
    <html lang="en" className="scroll-smooth">
      <body className={`${cabin.className} antialiased`}>{children}</body>
    </html>
  );
}

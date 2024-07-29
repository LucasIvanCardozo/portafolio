import { Roboto, Playfair_Display, Lato } from 'next/font/google';

export const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const playfair_Display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const lato = Lato({
  subsets: ['latin'],
  weight: '400',
});

import type { Metadata } from 'next';
import './globals.css';
import { roboto } from '../ui/fonts';
import Image from 'next/image';
import Proyect from '../components/Proyect';

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
      <body className={roboto.className}>
        <main className="bg-[url('/fondoMain.jpg')] bg-cover text-slate-950 min-h-screen flex flex-col items-center justify-center sm:flex-row">
          <div className="w-4/5">
            <h1 className="font-bold text-3xl">
              <p>Hi, i`m web developer</p>
            </h1>
            <p>
              Future Computer Engineer passionate about technology, with the
              ability to transform ideas or problems into solutions. I love the
              idea of creating tools that optimize and simplify the work of
              future clients.
            </p>
            <ul className="font-bold">
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#knowledge">Knowledge</a>
              </li>
              <li>
                <a href="">Studies</a>
              </li>
            </ul>
          </div>
          <div className="relative w-7/10 h-min bg-[url('/meFondo.svg')] bg-contain aspect-[227/298] ml-1/6 mb-1/6">
            <Image
              className="relative object-contain rounded-full z-10"
              src="/me.png"
              height="894"
              width="681"
              alt="Lucas Iván Cardozo."
              priority={true}
            />
            <ul className="absolute h-1/3 aspect-[1/4] top-7/10 -left-1/6">
              <li className="drop-shadow-md relative h-1/4 hover:scale-110 transition-transform">
                <a
                  className="relative block h-full w-full"
                  target="_blank"
                  href="https://www.instagram.com/lucardozo27/"
                >
                  <Image
                    src="/logos/instagram.svg"
                    fill={true}
                    alt="Icono instagram en SVG."
                  />
                </a>
              </li>
              <li className="relative drop-shadow-md h-1/4  left-2/3 top-1/10 hover:scale-110 transition-transform">
                <a
                  className="relative block h-full w-full"
                  target="_blank"
                  href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
                >
                  <Image
                    src="/logos/linkedin.svg"
                    fill={true}
                    alt="Icono de linkedin en SVG."
                  />
                </a>
              </li>
              <li className="drop-shadow-md relative left-3/2 top-1/6 h-1/4 hover:scale-110 transition-transform">
                <a
                  className="relative block h-full w-full"
                  target="_blank"
                  href="https://wa.me/2235319564"
                >
                  <Image
                    src="/logos/whatsapp.svg"
                    fill={true}
                    alt="Icono de whatsapp en SVG."
                  />
                </a>
              </li>
              <li className="drop-shadow-md relative left-11/4 top-1/8 h-1/4 hover:scale-110 transition-transform">
                <a
                  className="relative block h-full w-full"
                  target="_blank"
                  href="https://github.com/LucasIvanCardozo"
                >
                  <Image
                    src="/logos/github.svg"
                    fill={true}
                    alt="Icono de github en SVG."
                  />
                </a>
              </li>
            </ul>
          </div>
        </main>
        <section className="relative min-h-screen flex flex-col bg-black overflow-x-clip">
          <div className="absolute origin-center h-full w-3/2 -left-1/4 bg-neutral-500 z-0 rotate-3 top-1"></div>
          <h2 className="relative z-10 text-center text-4xl m-10">PROJECTS</h2>
          <ul className="relative z-10 grid grid-cols-1 gap-y-6 m-auto place-items-center sm:grid-cols-2">
            <li className="w-51/60">
              <Proyect
                title="Helados Italia"
                description="This was my first project and the one that got me involved in programming."
                link="/proyects/heladosItalia"
                img="/heladosItalia.png"
                programsUsed={['html', 'css', 'javascript']}
              ></Proyect>
            </li>
            <li className="w-51/60">
              <Proyect
                title="Bowling de Paso"
                description="A website with an SSR format, dedicated to what the clients wanted, and they were very satisfied."
                link="/proyects/bowlingDePaso"
                img="/bowlingDePaso.png"
                programsUsed={['react', 'gatsby', 'css', 'jsx']}
              ></Proyect>
            </li>
            <li className="w-51/60">
              <Proyect
                title="Heat Simulation"
                description="A tool created in a university course to simulate the dispersion of heat in a specific material."
                link="/proyects/simulacionCalor"
                img="/simulacionCalor.png"
                programsUsed={['fortran', 'gnuplot']}
              ></Proyect>
            </li>
          </ul>
        </section>
        {children}
        <footer className="bg-neutral-900 flex flex-col items-center pt-2 text-xs">
          <div className="flex flex-col items-center">
            <p>© All rights reserved</p>
            <p>
              Created by{' '}
              <b>
                <a
                  href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lucas Cardozo
                </a>
              </b>{' '}
              with{' '}
              <b>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  Next.js
                </a>
              </b>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

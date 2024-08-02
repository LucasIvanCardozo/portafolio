'use client';
import Image from 'next/image';
import Proyect from '@/components/proyect';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { merriweather, cabin } from '@/ui/fonts';
import HeladosItalia from '@/components/Proyects/heladosItalia';
import BowlingDePaso from '@/components/Proyects/bowlingDePaso';
import AppRestaurant from '@/components/Proyects/appRestaurant';

export default function Home() {
  const [visibleProyects, setvisibleProyects] = useState<Array<0 | 1>>([
    0, 0, 0,
  ]);
  const [transformProyects, setTransformProyects] = useState<{
    height: string;
    transform: string;
  }>({ height: '0px', transform: '' });

  useEffect(() => {
    const hasOne = visibleProyects.indexOf(1);
    if (hasOne != -1) {
      setTransformProyects({
        height: 'auto',
        transform: `translateX(-${
          hasOne == 0 ? 0 : `${(hasOne * 100) / visibleProyects.length}%`
        })`,
      });
    } else {
      setTransformProyects({ height: '0px', transform: '' });
    }
  }, [visibleProyects]);

  const handleVisible = (id: number) => {
    let aux: [0 | 1, 0 | 1] = [0, 0];
    for (let i = 0; i < visibleProyects.length; i++) {
      if (id == i) aux[i] = 1;
      else aux[i] = 0;
    }
    setvisibleProyects(aux);
  };

  const handleClick = () => {
    fetch('/api/send', { method: 'POST' })
      .then(() => console.log('Hola hola'))
      .catch((error) => console.error('Error', error));
  };

  return (
    <>
      <main className="bg-[url('/fondoMain.png')] bg-center bg-cover text-slate-950 min-h-screen flex flex-col gap-10 items-center justify-center lg:flex-row py-5">
        {/* Contenedor de introducción */}
        <div className="w-4/5 max-w-3xl flex flex-col gap-4 text-center lg:text-left">
          <h1 className={`font-bold text-4xl ${merriweather.className}`}>
            {`Hi, I'm a Web Developer`}
          </h1>
          <p className="text-lg">
            Future Computer Engineer passionate about technology, with the
            ability to transform ideas or problems into solutions. I love the
            idea of creating tools that optimize and simplify the work of future
            clients.
            <Link
              className="font-bold ml-1 text-indigo-600 hover:text-indigo-800 transition-colors"
              href="#proyectos"
            >
              View Projects
            </Link>
          </p>
        </div>

        {/* Contenedor de imagen personal y redes sociales */}
        <div className="relative w-7/10 max-w-96 bg-[url('/meFondo.svg')] bg-contain aspect-[227/298] mx-auto lg:mx-0 drop-shadow-xl">
          <Image
            className="relative object-cover rounded-full z-10"
            src="/me.png"
            fill={true}
            alt="Lucas Iván Cardozo"
            priority={true}
          />
          {/* Lista de redes sociales */}
          <ul className="absolute flex flex-col space-y-3 h-1/3 aspect-[1/4] top-2/3 -left-1/8">
            {[
              {
                href: 'https://www.instagram.com/lucardozo27/',
                src: '/logos/instagram.svg',
                alt: 'Instagram',
                styles: 'h-1/4',
              },
              {
                href: 'https://www.linkedin.com/in/lucas-ivan-cardozo/',
                src: '/logos/linkedin.svg',
                alt: 'LinkedIn',
                styles: 'left-1/2 top-1/10 h-1/4',
              },
              {
                href: 'https://wa.me/2235319564',
                src: '/logos/whatsapp.svg',
                alt: 'WhatsApp',
                styles: 'left-3/2 top-1/6 h-1/4',
              },
              {
                href: 'https://github.com/LucasIvanCardozo',
                src: '/logos/github.svg',
                alt: 'GitHub',
                styles: 'left-11/4 top-1/8 h-1/4',
              },
            ].map((social, index) => (
              <li
                key={index}
                className={`relative hover:scale-110 transition-transform ${social.styles}`}
              >
                <a
                  className="relative block h-full w-full"
                  target="_blank"
                  href={social.href}
                  rel="noopener noreferrer"
                >
                  <Image src={social.src} fill={true} alt={social.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <section
        id="proyectos"
        className="relative flex flex-col bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-10 gap-5 overflow-x-clip text-white"
      >
        <div className="absolute origin-center h-full w-3/2 -left-1/4 bg-neutral-500 z-0 rotate-3 top-1"></div>
        <div className="relative z-10 text-center">
          <h2 className={`text-5xl font-extrabold ${merriweather.className}`}>
            Projects
          </h2>
          <p className="text-xl mt-2 text-gray-300">
            Showcasing some of my recent work and achievements.
          </p>
        </div>
        <ul className="relative max-w-200 z-10 grid grid-cols-1 gap-y-6 m-auto place-items-stretch sm:grid-cols-2">
          {[
            {
              title: 'Helados Italia',
              description:
                'This was my first project and the one that got me involved in programming.',
              img: '/heladosItalia.png',
              programsUsed: ['html', 'css', 'javascript'],
            },
            {
              title: 'Bowling de Paso',
              description:
                'A website with an SSR format, dedicated to what the clients wanted, and they were very satisfied.',
              img: '/bowlingDePaso.png',
              programsUsed: ['react', 'gatsby', 'css', 'jsx'],
            },
            {
              title: 'App Restaurant',
              description:
                'Application for managing restaurant tables, which includes a customer database, tracking of revenue and many other features.',
              img: '/appRestaurant.png',
              programsUsed: ['c-sharp', 'sqlite', 'visualStudio'],
            },
          ].map((proyect, index) => (
            <li key={index}>
              <Proyect
                id={index}
                handleVisible={handleVisible}
                title={proyect.title}
                description={proyect.description}
                img={proyect.img}
                programsUsed={proyect.programsUsed}
              ></Proyect>
            </li>
          ))}
        </ul>
      </section>

      <section id="proyectInfo" className="w-full overflow-hidden">
        <ul
          className="w-max flex transform-gpu transition-transform ease-in-out duration-700"
          style={transformProyects}
        >
          {[HeladosItalia, BowlingDePaso, AppRestaurant].map(
            (article, index) => (
              <li key={index}>{article(index)}</li>
            )
          )}
        </ul>
      </section>

      <footer className="bg-neutral-900 flex flex-col items-center py-4 text-xs text-white">
        <div className="flex flex-col items-center">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <p>
            Created by{' '}
            <b>
              <a
                href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600 transition-colors"
              >
                Lucas Cardozo
              </a>
            </b>{' '}
            with{' '}
            <b>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600 transition-colors"
              >
                Next.js
              </a>
            </b>
          </p>
        </div>
      </footer>
    </>
  );
}

'use client';
import Image from 'next/image';
import Proyect from '../components/Proyect';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { playfair_Display } from '../ui/fonts';

export default function Home() {
  const [visibleProyects, setvisibleProyects] = useState<[0 | 1, 0 | 1]>([
    0, 0,
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

  const ulLoad = () => {};

  const handleClick = () => {
    fetch('/api/send', { method: 'POST' })
      .then(() => console.log('Hola hola'))
      .catch((error) => console.error('Error', error));
  };

  return (
    <>
      <main className="bg-[url('/fondoMain.jpg')] bg-cover text-slate-950 min-h-screen flex flex-col gap-10 items-center justify-center lg:flex-row py-5">
        {/* Contenedor de introducción */}
        <div className="w-4/5 max-w-3xl flex flex-col gap-4 text-center lg:text-left">
          <h1 className={`font-bold text-4xl ${playfair_Display.className}`}>
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
        <div className="relative w-7/10 max-w-96 bg-[url('/meFondo.svg')] bg-contain aspect-[227/298] mx-auto lg:mx-0">
          <Image
            className="relative object-cover rounded-full shadow-lg z-10"
            src="/me.png"
            fill={true}
            alt="Lucas Iván Cardozo"
            priority={true}
          />
          {/* Lista de redes sociales */}
          <ul className="absolute flex flex-col space-y-3 h-1/3 aspect-[1/4] top-7/10 -left-1/6">
            {[
              {
                href: 'https://www.instagram.com/lucardozo27/',
                src: '/logos/instagram.svg',
                alt: 'Instagram',
              },
              {
                href: 'https://www.linkedin.com/in/lucas-ivan-cardozo/',
                src: '/logos/linkedin.svg',
                alt: 'LinkedIn',
              },
              {
                href: 'https://wa.me/2235319564',
                src: '/logos/whatsapp.svg',
                alt: 'WhatsApp',
              },
              {
                href: 'https://github.com/LucasIvanCardozo',
                src: '/logos/github.svg',
                alt: 'GitHub',
              },
            ].map((social, index) => (
              <li
                key={index}
                className="drop-shadow-md relative hover:scale-110 transition-transform"
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
        className="relative flex flex-col bg-black py-10 gap-5 overflow-x-clip"
      >
        <div className="absolute origin-center h-full w-3/2 -left-1/4 bg-neutral-500 z-0 rotate-3 top-1"></div>
        <h2
          className={`relative z-10 text-center text-4xl text-white font-semibold mb-6 ${playfair_Display.className}`}
        >
          Projects
        </h2>
        <ul className="relative max-w-6xl z-10 grid grid-cols-1 gap-y-6 mx-auto sm:grid-cols-2">
          <li>
            <Proyect
              id={0}
              handleVisible={handleVisible}
              title="Helados Italia"
              description="This was my first project and the one that got me involved in programming."
              img="/heladosItalia.png"
              programsUsed={['html', 'css', 'javascript']}
            />
          </li>
          <li>
            <Proyect
              id={1}
              handleVisible={handleVisible}
              title="Bowling de Paso"
              description="A website with an SSR format, dedicated to what the clients wanted, and they were very satisfied."
              img="/bowlingDePaso.png"
              programsUsed={['react', 'gatsby', 'css', 'jsx']}
            />
          </li>
        </ul>
      </section>

      <section id="proyectInfo" className="w-full overflow-hidden">
        <div
          className="w-max flex transform-gpu transition-transform ease-in-out duration-500"
          style={transformProyects}
        >
          {/* Información del Proyecto Helados Italia */}
          <article className="w-screen bg-[url('/proyectsFondoItalia.svg')] bg-cover text-slate-950 pt-10 pb-10 flex-none">
            <div className="w-51/60 max-w-6xl mx-auto flex flex-col gap-8">
              <h2
                className={`text-center text-4xl ${playfair_Display.className}`}
              >
                Helados Italia
              </h2>
              <p className="text-lg leading-relaxed">
                This project originated while I was working at Helados Italia,
                where I saw an opportunity to develop an in-house service to
                improve the ordering system, eliminating reliance on third-party
                providers. Without prior knowledge of databases, I implemented a
                solution using Google Sheets, enabling data modifications with
                real-time updates on the webpage.
              </p>
              <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden border-2 shadow-lg mx-auto">
                <Image
                  className="object-cover"
                  src="/googleSheetsItalia.png"
                  fill={true}
                  alt="Google Sheets de Helados Italia"
                />
              </div>
              <p className="text-lg leading-relaxed">
                To optimize and improve the speed of data retrieval, I developed
                a script in Apps Script. This script generated a text with
                complete information each time the database was edited, storing
                it in a single cell. When rendering the webpage, only that cell
                was loaded, which allowed for very fast data retrieval since the
                data generation occurred when the database was updated and not
                every time a fetch was performed.
              </p>
              <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden border-2 shadow-lg mx-auto">
                <Image
                  className="object-cover"
                  src="/appScriptItalia.png"
                  fill={true}
                  alt="App Script de Helados Italia"
                />
                <div className="absolute z-10 w-1/2 bottom-0 right-0 aspect-video rounded-xl overflow-hidden border-2 m-1/40 shadow-md">
                  <Image
                    className="object-cover"
                    src="/jsonItalia.png"
                    fill={true}
                    alt="JSON de Helados Italia"
                  />
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                This project originated while I was working at Helados Italia,
                where I saw an opportunity to develop an in-house service to
                improve the ordering system, eliminating reliance on third-party
                providers. Without prior knowledge of databases, I implemented a
                solution using Google Sheets, enabling data modifications with
                real-time updates on the webpage.
              </p>
              <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden border-2 shadow-lg mx-auto">
                <Image
                  className="object-cover"
                  src="/googleSheetsItalia.png"
                  fill={true}
                  alt="Google Sheets de Helados Italia"
                />
              </div>
            </div>
          </article>

          {/* Información del Proyecto Bowling de Paso */}
          <article className="w-screen bg-[url('/proyectsFondoBowling.svg')] bg-cover text-slate-950 pt-10 pb-10 flex-none">
            <div className="w-51/60 max-w-6xl mx-auto flex flex-col gap-8">
              <h2
                className={`text-center text-4xl ${playfair_Display.className}`}
              >
                Bowling de Paso
              </h2>
              <p className="text-lg leading-relaxed">
                Bowling de Paso es un proyecto que desarrollé utilizando React y
                Gatsby, basado en SSR, y que permitió a los clientes
                personalizar su experiencia en línea de acuerdo con sus
                necesidades específicas, logrando así una alta satisfacción.
              </p>
              {/* Aquí puedes agregar imágenes o descripciones adicionales si lo deseas */}
            </div>
          </article>
        </div>
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

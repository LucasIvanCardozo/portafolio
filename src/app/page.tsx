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
      <main className="bg-[url('/fondoMain.jpg')] bg-cover text-slate-950 min-h-screen flex flex-col gap-10 items-center justify-center lg:flex-row pt-5 pb-5">
        <div className="w-4/5 max-w-128 flex flex-col gap-3">
          <h1 className={`font-bold text-3xl ${playfair_Display.className}`}>
            <p>{`Hi, i'm web developer`}</p>
          </h1>
          <p>
            Future Computer Engineer passionate about technology, with the
            ability to transform ideas or problems into solutions. I love the
            idea of creating tools that optimize and simplify the work of future
            clients.
            <Link className="font-bold" href="#proyectos">
              Projects
            </Link>
          </p>
        </div>
        <div className="relative w-7/10 max-w-96 bg-[url('/meFondo.svg')] bg-contain aspect-[227/298] ml-1/6 mb-1/6 sm:ml-1/14 sm:mb-1/14">
          <Image
            className="relative object-contain rounded-full z-10"
            src="/me.png"
            fill={true}
            alt="Lucas Iván Cardozo."
            priority={true}
          />
          <ul
            className="absolute h-1/3 aspect-[1/4] top-7/10 -left-1/6"
            onLoad={ulLoad}
          >
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
      <section
        id="proyectos"
        className="relative flex flex-col bg-black p-10 gap-5 overflow-x-clip"
      >
        <div className="absolute origin-center h-full w-3/2 -left-1/4 bg-neutral-500 z-0 rotate-3 top-1"></div>
        <h2
          className={`relative z-10 text-center text-4xl ${playfair_Display.className}`}
        >
          PROJECTS
        </h2>
        <ul className="relative max-w-200 z-10 grid grid-cols-1 gap-y-6 m-auto place-items-stretch sm:grid-cols-2">
          <li className="w-51/60 ml-auto mr-auto">
            <Proyect
              id={0}
              handleVisible={handleVisible}
              title="Helados Italia"
              description="This was my first project and the one that got me involved in programming."
              img="/heladosItalia.png"
              programsUsed={['html', 'css', 'javascript']}
            ></Proyect>
          </li>
          <li className="w-51/60 ml-auto mr-auto">
            <Proyect
              id={1}
              handleVisible={handleVisible}
              title="Bowling de Paso"
              description="A website with an SSR format, dedicated to what the clients wanted, and they were very satisfied."
              img="/bowlingDePaso.png"
              programsUsed={['react', 'gatsby', 'css', 'jsx']}
            ></Proyect>
          </li>
        </ul>
      </section>
      <section id="proyectInfo" className="w-screen overflow-hidden">
        <div
          className={
            'w-max flex transform-gpu transition ease-in-out duration-500'
          }
          style={transformProyects}
        >
          <article
            className={`w-screen g-[url('/proyectsFondoItalia.svg')] text-slate-950 pt-10 pb-10 flex-none`}
          >
            <div className="w-51/60 max-w-200 m-auto flex flex-col gap-8">
              <h2
                className={`text-center text-4xl ${playfair_Display.className}`}
              >
                Helados Italia
              </h2>
              <p className="w-11/12 max-w-128 ">
                This project originated while I was working at Helados Italia,
                where I saw an opportunity to develop an in-house service to
                improve the ordering system, eliminating reliance on third-party
                providers. Without prior knowledge of databases, I implemented a
                solution using Google Sheets, enabling data modifications with
                real-time updates on the webpage.
              </p>
              <div className="relative w-11/12 max-w-110 aspect-16/9 rounded-3xl overflow-hidden border-2 self-end drop-shadow-md">
                <Image
                  className="object-cover"
                  src="/googleSheetsItalia.png"
                  fill={true}
                  alt="GoogleSheets de Helados Italia"
                />
              </div>
              <p className="w-4/5 max-w-128 ">
                To optimize and improve the speed of data retrieval, I developed
                a script in Apps Script. This script generated a text with
                complete information each time the database was edited, storing
                it in a single cell. When rendering the webpage, only that cell
                was loaded, which allowed for very fast data retrieval since the
                data generation occurred when the database was updated and not
                every time a fetch was performed.
              </p>
              <div className="relative w-11/12 max-w-110 aspect-16/9 rounded-3xl overflow-hidden border-2 self-end drop-shadow-md">
                <Image
                  className="object-cover"
                  src="/appScriptItalia.png"
                  fill={true}
                  alt="GoogleSheets de Helados Italia"
                />
                <div className="absolute z-10 w-1/2 bottom-0 right-0 aspect-16/9 rounded-xl  overflow-hidden border-2 m-1/40 drop-shadow-md">
                  <Image
                    className="object-cover"
                    src="/jsonItalia.png"
                    fill={true}
                    alt="GoogleSheets de Helados Italia"
                  />
                </div>
              </div>
              <p className="w-4/5 max-w-128 ">
                This project originated while I was working at Helados Italia,
                where I saw an opportunity to develop an in-house service to
                improve the ordering system, eliminating reliance on third-party
                providers. Without prior knowledge of databases, I implemented a
                solution using Google Sheets, enabling data modifications with
                real-time updates on the webpage.
              </p>
              <div className="relative w-11/12 max-w-110 aspect-16/9 rounded-3xl overflow-hidden border-2 self-end">
                <Image
                  className="object-cover"
                  src="/googleSheetsItalia.png"
                  fill={true}
                  alt="GoogleSheets de Helados Italia"
                />
              </div>
            </div>
          </article>
          <article
            className={`w-screen bg-[url('/proyectsFondoBowling.svg')] text-slate-950 pt-10 pb-10 flex-none`}
          >
            <p>Bowling de paso</p>
          </article>
        </div>
      </section>
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
    </>
  );
}

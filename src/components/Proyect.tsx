'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { montserrat } from '@/ui/fonts';

export default function Proyect({
  id,
  title,
  description,
  img,
  programsUsed,
  handleVisible,
}: {
  id: number;
  title: string;
  description: string;
  img: string;
  programsUsed: string[];
  handleVisible: (id: number) => void;
}) {
  return (
    <article className="w-51/60 mx-auto max-w-xl flex flex-col items-center h-full justify-between sm:max-w-xl">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base leading-relaxed flex flex-col">
        {description}
        <br />
        <Link
          className={`inline-block self-end text-sm bg-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors mt-2 px-4 py-2 rounded ${montserrat.className}`}
          onClick={() => handleVisible(id)}
          href="#proyectInfo"
        >
          Más info
        </Link>
      </p>
      <div className="w-full flex flex-col items-center mt-4">
        <div className="w-full relative rounded-2xl overflow-hidden aspect-[8/5] shadow-md">
          <Image
            className="object-cover w-full h-full"
            src={img}
            fill={true}
            alt={`Imagen del proyecto: ${title}`}
            loading="lazy"
          />
        </div>
        <ul className="flex justify-center gap-3 mt-3 h-9">
          {programsUsed.map((name, index) => (
            <li key={index} className="relative h-full w-9">
              <Image
                src={`/logos/${name}.svg`}
                fill={true}
                alt={`Logo de ${name}`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

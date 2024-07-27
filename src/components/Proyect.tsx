'use client';
import Image from 'next/image';
import Link from 'next/link';
import { setTimeout } from 'timers/promises';

export default function Proyect({
  title,
  description,
  link,
  img,
  programsUsed,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
  programsUsed: string[];
}) {
  return (
    <article className="w-full max-w-128 flex flex-col items-center h-full justify-between sm:max-w-128">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-center text-base">
        {description}
        <Link className="block text-sm" href={link}>
          {'<-Más info->'}
        </Link>
      </p>
      <div className="flex flex-col items-center w-full">
        <div className="rounded-3xl overflow-hidden w-51/60 aspect-[8/5]">
          <Image
            className="object-cover w-full h-full"
            src={img}
            width="500"
            height="500"
            alt={`Imagen del proyecto: ${title}`}
            loading="lazy"
          />
        </div>
        <ul className="flex justify-center gap-2 m-2 h-9">
          {programsUsed.map((name, index) => (
            <li key={index} className="relative h-full aspect-[1/1]">
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

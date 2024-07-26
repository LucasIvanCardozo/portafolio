import Image from 'next/image';

export default function Proyect({
  title,
  description,
  links,
  img,
  programsUsed,
}: {
  title: string;
  description: string;
  links: string;
  img: string;
  programsUsed: string[];
}) {
  return (
    <article className="max-w-80">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={links}>{'<-Más info->'}</a>
      <div className="">
        <Image
          className="rounded-md"
          src={img}
          objectFit="cover"
          width="300"
          height="100"
          alt={`Imagen del proyecto: ${title}`}
        />
      </div>
      <ul className="flex">
        {programsUsed.map((name, index) => (
          <li key={index} className="aspect-[1/1] w-12">
            <Image
              src={`/logos/${name}.png`}
              width="60"
              height="60"
              alt={`Logo de ${name}`}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

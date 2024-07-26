import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[url('/fondoMain.jpg')] bg-cover text-slate-950 min-h-screen flex justify-center items-center">
      <div className="w-1/3">
        <h1 className="font-bold text-3xl">
          <p>Hi, i`m web developer</p>
        </h1>
        <p>
          Futuro ingeniero Informático apasionado por la tecnología, con
          capacidad para transformar ideas o problemas en soluciones. Me encanta
          la idea de crear herramientas que optimizan y facilitan el trabajo de
          futuros clientes.
        </p>
        <ul className="font-bold">
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#conocimiento">Conocimiento</a>
          </li>
          <li>
            <a href="">Estudios</a>
          </li>
        </ul>
      </div>
      <div className="relative w-96 h-min bg-[url('/meFondo.svg')] bg-contain aspect-[227/298] ml-20">
        <Image
          className="relative object-contain"
          src="/me.png"
          height="894"
          width="681"
          alt="Lucas Iván Cardozo."
        />
        <ul className="absolute h-7/20 aspect-[1/4] top-7/10 -left-1/6">
          <li className="drop-shadow-md relative h-1/4">
            <a target="_blank" href="https://www.instagram.com/lucardozo27/">
              <Image
                className="hover:scale-110 transition-transform h-full"
                src="/instagram.svg"
                height="36"
                width="36"
                alt="Icono instagram en SVG."
              />
            </a>
          </li>
          <li className="relative drop-shadow-md h-1/4  left-2/3 top-1/10">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
            >
              <Image
                className="hover:scale-110 transition-transform h-full"
                src="/linkedin.svg"
                height="36"
                width="36"
                alt="Icono de linkedin en SVG."
              />
            </a>
          </li>
          <li className="drop-shadow-md relative left-3/2 top-1/6 h-1/4">
            <a target="_blank" href="https://wa.me/2235319564">
              <Image
                className="hover:scale-110 transition-transform h-full"
                src="/whatsapp.svg"
                height="36"
                width="36"
                alt="Icono de whatsapp en SVG."
              />
            </a>
          </li>
          <li className="drop-shadow-md relative left-11/4 top-1/8 h-1/4">
            <a target="_blank" href="https://github.com/LucasIvanCardozo">
              <Image
                className="hover:scale-110 transition-transform h-full"
                src="/github.svg"
                height="36"
                width="36"
                alt="Icono de github en SVG."
              />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

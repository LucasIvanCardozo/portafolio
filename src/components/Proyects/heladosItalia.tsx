import Image from 'next/image';
import { merriweather } from '@/ui/fonts';

export default function HeladosItalia(visible: boolean) {
  return (
    <article
      className="w-screen bg-[url('/proyectsFondoItalia.svg')] bg-cover text-slate-950 pt-10 pb-10 flex-none"
      style={visible ? { height: 'auto' } : { height: '0' }}
    >
      <div className="w-51/60 max-w-3xl mx-auto flex flex-col gap-8">
        <h2 className={`text-center text-4xl ${merriweather.className}`}>
          Helados Italia
        </h2>
        <p className="text-lg leading-relaxed">
          This project originated while I was working at Helados Italia, where I
          saw an opportunity to develop an in-house service to improve the
          ordering system, eliminating reliance on third-party providers.
          Without prior knowledge of databases, I implemented a solution using
          Google Sheets, enabling data modifications with real-time updates on
          the webpage.
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
          To optimize and improve the speed of data retrieval, I developed a
          script in Apps Script. This script generated a text with complete
          information each time the database was edited, storing it in a single
          cell. When rendering the webpage, only that cell was loaded, which
          allowed for very fast data retrieval since the data generation
          occurred when the database was updated and not every time a fetch was
          performed.
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
          This project originated while I was working at Helados Italia, where I
          saw an opportunity to develop an in-house service to improve the
          ordering system, eliminating reliance on third-party providers.
          Without prior knowledge of databases, I implemented a solution using
          Google Sheets, enabling data modifications with real-time updates on
          the webpage.
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
  );
}

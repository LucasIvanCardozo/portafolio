import Image from 'next/image';

export default function HeladosItalia() {
  return (
    <div className="w-51/60 m-auto flex flex-col gap-8">
      <h2 className="text-center text-4xl">Helados Italia</h2>
      <p className="w-11/12 max-w-128 ">
        This project originated while I was working at Helados Italia, where I
        saw an opportunity to develop an in-house service to improve the
        ordering system, eliminating reliance on third-party providers. Without
        prior knowledge of databases, I implemented a solution using Google
        Sheets, enabling data modifications with real-time updates on the
        webpage.
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
        To optimize and improve the speed of data retrieval, I developed a
        script in Apps Script. This script generated a text with complete
        information each time the database was edited, storing it in a single
        cell. When rendering the webpage, only that cell was loaded, which
        allowed for very fast data retrieval since the data generation occurred
        when the database was updated and not every time a fetch was performed.
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
        This project originated while I was working at Helados Italia, where I
        saw an opportunity to develop an in-house service to improve the
        ordering system, eliminating reliance on third-party providers. Without
        prior knowledge of databases, I implemented a solution using Google
        Sheets, enabling data modifications with real-time updates on the
        webpage.
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
  );
}

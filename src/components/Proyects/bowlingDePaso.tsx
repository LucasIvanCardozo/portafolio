import { merriweather } from '@/ui/fonts';

export default function BowlingDePaso(visible: boolean) {
  return (
    <article
      className="w-screen bg-[url('/proyectsFondoBowling.svg')] bg-cover text-slate-950 pt-10 pb-10 flex-none"
      style={visible ? { height: 'auto' } : { height: '0' }}
    >
      <div className="w-51/60 max-w-6xl mx-auto flex flex-col gap-8">
        <h2 className={`text-center text-4xl ${merriweather.className}`}>
          Bowling de Paso
        </h2>
        <p className="text-lg leading-relaxed">
          Bowling de Paso es un proyecto que desarrollé utilizando React y
          Gatsby, basado en SSR, y que permitió a los clientes personalizar su
          experiencia en línea de acuerdo con sus necesidades específicas,
          logrando así una alta satisfacción.
        </p>
        {/* Aquí puedes agregar imágenes o descripciones adicionales si lo deseas */}
      </div>
    </article>
  );
}

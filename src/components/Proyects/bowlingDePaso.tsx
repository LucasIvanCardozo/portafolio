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
          Bowling de Paso is a project I developed using React and Gatsby, based
          on SSR, that allowed clients to customize their online experience
          according to their specific needs, achieving high satisfaction.
        </p>
      </div>
    </article>
  );
}

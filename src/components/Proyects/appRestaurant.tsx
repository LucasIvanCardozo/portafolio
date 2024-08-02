import { merriweather } from '@/ui/fonts';

export default function AppRestaurant(visible: boolean) {
  return (
    <article
      className="w-screen bg-[url('/proyectsFondoBowling.svg')] bg-cover max-w-128 text-slate-950 pt-10 pb-10 flex-none"
      style={visible ? { height: 'auto' } : { height: '0' }}
    >
      <div className="w-51/60 max-w-6xl mx-auto flex flex-col gap-8">
        <h2 className={`text-center text-4xl ${merriweather.className}`}>
          Restaurant Management Application
        </h2>
        <p className="text-lg leading-relaxed">
          This is my latest project, developed using C# and Visual Studio. I am
          creating an application for managing restaurant tables, which includes
          a customer database, tracking of revenue and expenses, detailed
          statistics, and many other features.
        </p>
      </div>
    </article>
  );
}

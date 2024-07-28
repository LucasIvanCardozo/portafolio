export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[url('/proyectsFondo.svg')] text-slate-950 pt-10 pb-10">
      {children}
    </section>
  );
}

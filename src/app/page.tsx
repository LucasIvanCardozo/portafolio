'use client';

export default function Home() {
  const handleClick = () => {
    fetch('/api/send', { method: 'POST' })
      .then(() => console.log('Hola hola'))
      .catch((error) => console.error('Error', error));
  };

  return (
    <>
      <section className="h-screen text-black"></section>
    </>
  );
}

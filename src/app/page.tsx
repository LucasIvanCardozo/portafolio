'use client';

export default function Home() {
  const handleClick = () => {
    fetch('/api/send', { method: 'POST' })
      .then(() => console.log('Hola hola'))
      .catch((error) => console.error('Error', error));
  };

  return (
    <>
      <section className="h-screen text-black">
        <button
          onClick={handleClick}
          type="button"
          className="border-black border-2 m-44"
        >
          Send Mail
        </button>
      </section>
    </>
  );
}

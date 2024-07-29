'use client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_56sRMEyN_5qCqvqvGyJ64iypBd8nZd5as');

export default function Home() {
  const handleClick = () => {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lucasivancardozo27@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });
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

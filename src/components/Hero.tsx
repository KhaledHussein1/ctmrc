'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        const { error } = await res.json();
        alert(`Subscription failed: ${error?.message || 'Try again later.'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/run-hero.jpg"
        alt="Running hero background"
        fill
        priority
        style={{ objectFit: 'cover' }}
        className="-z-10"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 -z-10"></div>

      <div className="relative bg-black/75 backdrop-blur-md p-6 rounded-2xl max-w-3xl z-10 shadow-xl border border-white/10 w-full">
        <h1 className="text-5xl font-bold mb-4 tracking-tight drop-shadow-md">
          Connecticut Muslim Running Club
        </h1>
        <p className="text-lg mb-8 drop-shadow-sm">
          Join a community where faith and fitness come together.
        </p>

        <div className="bg-white/90 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg border border-white/30 w-full max-w-xl mx-auto">
          {submitted ? (
            <p className="text-green-700 font-semibold text-center">
              ✅ Thank you for subscribing!
            </p>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-1">Stay in the loop</h3>
              <p className="text-sm mb-4 text-gray-700">
                Be the first to hear about upcoming runs, events, and more.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 w-full px-4 py-3 rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#1c7c54] text-white px-6 py-3 rounded-full font-medium hover:bg-[#146943] transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

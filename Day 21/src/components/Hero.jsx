import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const msg = new SpeechSynthesisUtterance("Hi, I'm Shivani's portfolio. Let me show you something cool.");
    window.speechSynthesis.speak(msg);
  }, []);

  return (
    <section className="pt-24 pb-16 text-center bg-gradient-to-b from-indigo-50 to-white">
      <img src="/assets/images/profile.jpg" alt="Shivani Lodhi" className="w-32 h-32 mx-auto rounded-full shadow-lg" />
      <h2 className="text-3xl font-bold mt-4">Hi, I'm <span className="text-indigo-600">Amrita Pal</span></h2>
      <p className="mt-2 text-lg text-gray-600">Building emotionally intelligent apps that empower and inspire.</p>
      <a href="#contact" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">Contact Me</a>
    </section>
  );
}
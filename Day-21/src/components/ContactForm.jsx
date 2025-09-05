import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://your-n8n-webhook-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Thanks for reaching out!");
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required className="w-full border p-3 rounded h-32" onChange={handleChange}></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">Send Message</button>
      </form>
    </section>
  );
}

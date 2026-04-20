'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
    { icon: '📍', label: 'Location', value: 'San Francisco, CA', href: '#' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alexj', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">Let&apos;s Talk</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s build something great together</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part
              of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-2xl hover:border-indigo-500/50 transition-colors group"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs">{info.label}</p>
                    <p className="text-gray-300 group-hover:text-indigo-400 transition-colors font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon!</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hi Alex, I'd love to work with you on..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                >
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

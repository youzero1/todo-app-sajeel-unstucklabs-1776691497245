export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-extrabold text-white tracking-tight">
              <span className="text-indigo-400">&lt;</span>Portfolio<span className="text-indigo-400">/&gt;</span>
            </a>
            <p className="text-gray-500 text-sm mt-1">Full-Stack Developer &amp; UI Designer</p>
          </div>

          <nav className="flex flex-wrap gap-6 justify-center">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 hover:text-indigo-400 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { label: 'GitHub', href: '#', icon: '🐙' },
              { label: 'LinkedIn', href: '#', icon: '💼' },
              { label: 'Twitter', href: '#', icon: '🐦' },
              { label: 'Email', href: 'mailto:alex@example.com', icon: '📧' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 bg-gray-800 hover:bg-indigo-600 border border-gray-700 hover:border-indigo-500 rounded-full flex items-center justify-center text-sm transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with ❤️ using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

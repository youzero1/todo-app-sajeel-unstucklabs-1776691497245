export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Alex Johnson. Built with ❤️ using Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex gap-6">
          {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-500 hover:text-indigo-400 transition-colors text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

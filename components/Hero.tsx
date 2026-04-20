export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Avatar */}
        <div className="mb-8 flex justify-center animate-fadeIn">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl shadow-xl shadow-indigo-500/30">
            👨‍💻
          </div>
        </div>

        <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-4 animate-fadeInUp">
          Hello, I&apos;m
        </p>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 animate-fadeInUp delay-100">
          Alex Johnson
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-400 mb-6 animate-fadeInUp delay-200">
          Full-Stack <span className="text-indigo-400 font-semibold">Developer</span> &amp; UI Designer
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-300">
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, great design, and solving real problems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp delay-400">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-indigo-400 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-12 animate-fadeInUp delay-500">
          {[
            { label: 'GitHub', href: '#', icon: '🐙' },
            { label: 'LinkedIn', href: '#', icon: '💼' },
            { label: 'Twitter', href: '#', icon: '🐦' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors text-sm"
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

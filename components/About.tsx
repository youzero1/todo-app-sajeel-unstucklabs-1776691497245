export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">About Me</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-8xl shadow-2xl shadow-indigo-500/30">
                🧑‍💻
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center text-4xl shadow-xl">
                🚀
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center text-3xl shadow-xl">
                💡
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Turning ideas into <span className="text-indigo-400">digital reality</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m a passionate full-stack developer with over 5 years of experience building
              scalable, user-friendly web applications. I love everything from backend architecture
              to pixel-perfect UI design.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              When I&apos;m not coding, I enjoy contributing to open source, writing technical blogs,
              and exploring new technologies. I believe in writing clean, maintainable code that
              stands the test of time.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500/50 transition-colors"
            >
              <div className="text-4xl font-extrabold text-indigo-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

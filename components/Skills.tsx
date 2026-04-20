export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python / Django', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'GraphQL', level: 78 },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 72 },
        { name: 'Git / GitHub', level: 95 },
        { name: 'CI/CD', level: 78 },
      ],
    },
  ];

  const techBadges = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'GraphQL', icon: '◈' },
    { name: 'Tailwind', icon: '🌊' },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Skills &amp; Technologies</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{cat.category}</h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-indigo-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${cat.color} h-2 rounded-full transition-all duration-700`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {techBadges.map((tech) => (
            <span
              key={tech.name}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-indigo-500 hover:text-indigo-400 transition-colors cursor-default flex items-center gap-2"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory, payments via Stripe, and an admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      emoji: '🛒',
      color: 'from-indigo-600 to-blue-600',
      live: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'AI Chat Application',
      description:
        'Real-time chat app powered by OpenAI GPT-4 with conversation history, file uploads, and code highlighting.',
      tags: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
      emoji: '🤖',
      color: 'from-purple-600 to-pink-600',
      live: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'Task Management SaaS',
      description:
        'Collaborative project management tool with Kanban boards, time tracking, and team analytics.',
      tags: ['Vue.js', 'Python', 'Django', 'Redis'],
      emoji: '📋',
      color: 'from-emerald-600 to-teal-600',
      live: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather dashboard with forecasts, interactive maps, and location-based alerts.',
      tags: ['React', 'TypeScript', 'OpenWeather API'],
      emoji: '🌤️',
      color: 'from-orange-500 to-yellow-500',
      live: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'Portfolio CMS',
      description:
        'Headless CMS built for developers to manage portfolio projects and blog posts with ease.',
      tags: ['Next.js', 'Sanity.io', 'Tailwind'],
      emoji: '🗂️',
      color: 'from-pink-600 to-rose-600',
      live: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'DevOps Dashboard',
      description:
        'Monitoring dashboard for Docker containers, server metrics, and deployment pipelines.',
      tags: ['React', 'Docker', 'Grafana', 'Node.js'],
      emoji: '📊',
      color: 'from-cyan-600 to-blue-600',
      live: '#',
      github: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group bg-gray-900 border rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${
                project.featured
                  ? 'border-indigo-500/40 hover:shadow-indigo-500/20'
                  : 'border-gray-800 hover:border-gray-700 hover:shadow-black/40'
              }`}
            >
              {/* Card header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative`}>
                {project.emoji}
                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium">
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="flex-1 text-center py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    🌐 Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-semibold rounded-xl transition-colors"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

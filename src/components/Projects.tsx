import { Brain, Clock } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Wake Alarm',
      icon: Clock,
      description:
        'An innovative alarm system that uses voice-based questions to ensure mental alertness when waking up. Prevents oversleeping by requiring cognitive engagement before dismissing.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Web Speech API'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI-Based Job Interview Simulator',
      icon: Brain,
      description:
        'Virtual interview preparation tool using AI-powered questioning, NLP, and facial emotion recognition. Analyzes both technical responses and behavioral cues to provide comprehensive feedback.',
      technologies: ['AI', 'Machine Learning', 'Computer Vision', 'NLP', 'Video Analysis'],
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                  <project.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

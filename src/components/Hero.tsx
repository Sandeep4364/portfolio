import { Github, Linkedin, Code2, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Kodathala Sandeep Kumar Reddy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Aspiring AI Engineer | Full Stack Developer | Cloud & DevOps Enthusiast
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate 3rd-year B.Tech CSE student building intelligent systems that scale.
            Specializing in full-stack development, cloud computing, DevOps, and AI/ML.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://github.com/Sandeep4364"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kodathala-sandeep-kumar-reddy-a5951b292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/K_Sandeep_Kumar_Reddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Code2 size={20} />
            <span>LeetCode</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a href="mailto:kodathalasandeepkumarreddy@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={18} />
            <span>kodathalasandeepkumarreddy@gmail.com</span>
          </a>
          <a href="tel:+918247714734" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={18} />
            <span>+91-8247714734</span>
          </a>
        </div>
      </div>
    </section>
  );
}

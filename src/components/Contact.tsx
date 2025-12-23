import { Mail, Phone, Github, Linkedin, Code2, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          I'm always open to discussing new opportunities, innovative projects, or collaborations.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:kodathalasandeepkumarreddy@gmail.com"
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
              <Mail size={24} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="text-white font-medium">kodathalasandeepkumarreddy@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918247714734"
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500">
              <Phone size={24} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <p className="text-white font-medium">+91-8247714734</p>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Sandeep4364"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-gray-300 hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/kodathala-sandeep-kumar-reddy-a5951b292"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-gray-300 hover:text-blue-400" />
          </a>
          <a
            href="https://leetcode.com/u/K_Sandeep_Kumar_Reddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
          >
            <Code2 size={24} className="text-gray-300 hover:text-blue-400" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Globe size={16} />
            Made with passion by Sandeep Kumar Reddy
          </p>
        </div>
      </div>
    </section>
  );
}

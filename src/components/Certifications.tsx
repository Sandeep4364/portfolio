import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    'DevOps Bootcamp - CICD, Automation, Cloud Mastery - Udemy (June 2025)',
    'AWS Solutions Architect - Cloud - Forage (June 2025)',
    'TCS ESG Job Simulation - Forage (March 2025)',
    'Full Stack Web Development - Coursera (Ongoing)',
    'Data Science and Analytics - HP Life (July 2025)',
    'Python Bootcamp - Udemy (March 2025)',
    'Docker Masterclass: Docker Compose & Swarm - DevOps, Udemy (July 2025)',
    'SQL, MySQL, PostgreSQL & MongoDB - All-in-One Database Course (April 2025)',
    'Build Your Generative AI Productivity Skills - Microsoft and LinkedIn (January 2025)',
    'Career Essentials in Generative AI - Microsoft and LinkedIn (November 2024)',
    'Google Cloud Developer - GCP Professional Certification - Infosys (June 2025)',
  ];

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-violet-500/50 transition-all duration-300 flex items-start gap-3"
            >
              <Award size={20} className="text-violet-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

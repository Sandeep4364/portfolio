import { Briefcase, FileText } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Developer Internship (PHP & MySQL)',
      company: 'ApexPlanet Software Pvt. Ltd.',
      period: 'Aug 2025 - Sep 2025',
      description: 'Completed virtual internship focusing on PHP & MySQL web development.',
      document: '/documents/certificate_of_internship_apspl2515634.pdf',
    },
    {
      role: 'Frontend Web Development Internship',
      company: 'Edunet',
      period: 'Aug 2025 - Sep 2025',
      description: 'Completed 6 weeks internship focusing on frontend development and deployment.',
      document: '/documents/aicte_b3_pd_certificates-1380.pdf',
    },
    {
      role: 'AI and Cloud Technologies Internship',
      company: 'Edunet',
      period: 'Sep 2025 - Oct 2025',
      description: 'Completed 1 month internship focusing on AI in the cloud.',
      document: '/documents/aicte_b4_pd_Completion-491.pdf',
    },
    {
      role: 'Web Development Internship',
      company: 'Vault of Codes',
      period: 'Aug 2025 - Sep 2025',
      description: 'Completed one-month internship focusing on web development projects.',
      document: '/documents/vault_of_codes.pdf',
    },
  ];

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <a
              key={idx}
              href={exp.document}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-teal-500 to-green-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                  <p className="text-teal-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex items-center gap-2 text-teal-400 group-hover:text-teal-300 transition-colors">
                    <FileText size={16} />
                    <span className="text-sm font-medium">View Certificate</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

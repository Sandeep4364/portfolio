import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Data Science)',
      institution: 'Malla Reddy College of Engineering and Technology',
      period: '2023 - Present',
      grade: 'CGPA: 8.88',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Vivekananda Jr College',
      period: '2021 - 2023',
      grade: 'Percentage: 94.4%',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Anantha Vidyanikethan EM High School',
      period: '2020 - 2021',
      grade: 'Percentage: 99%',
    },
  ];

  const achievements = [
    'JEE Mains 2023 - Secured 88.8%',
    'AP EAPCET 2023 - 19110 Rank (General)',
    'TS EAMCET 2023 - 23962 Rank (General)',
    'SIH Hackathon 2024 - Secured 2nd (College)',
  ];

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Education & Achievements
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-green-400 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>{edu.period}</span>
                      <span className="text-emerald-400 font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
              >
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

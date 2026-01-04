export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'Java', 'C', 'R', 'PHP'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Django', 'TypeScript'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'CI/CD', 'Automation'],
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'GCP', 'Cloud Architecture'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI/ML & Gen AI',
      skills: ['Generative AI', 'Prompt Engineering', 'Computer Vision', 'NLP'],
      color: 'from-emerald-500 to-blue-500',
    },
    {
      title: 'Soft Skills',
      skills: ['Time Management', 'Leadership', 'Software Engineering'],
      color: 'from-blue-500 to-violet-500',
    },
  ];

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 transition-colors"
                  >
                    {skill}
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

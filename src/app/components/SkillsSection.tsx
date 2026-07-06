import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    name: 'Backend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    name: 'Database',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MSSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
    ],
  },
  {
    name: 'DevOps',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Git', level: 95 },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50" />

      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeCategory === categoryIndex ? 1 : 0,
                height: activeCategory === categoryIndex ? 'auto' : 0,
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {activeCategory === categoryIndex && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux', 'Express.js', 'Prisma', 'Redis', 'Nginx', 'Jest', 'Webpack', 'Vercel'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card rounded-full text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

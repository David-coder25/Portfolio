import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'ASK Technology',
    period: 'Jan 2023 - Present',
    achievements: [
      'Reduced deployment time by 30% through CI/CD pipeline optimization',
      'Improved application efficiency by 40% by implementing advanced caching strategies',
      'Led development of microservices architecture serving 50K+ daily users',
      'Mentored 3 junior developers in modern web development practices',
    ],
    technologies: ['React', 'Node.js', 'Spring Boot', 'MySQL', 'Docker', 'AWS'],
  },
  {
    role: 'Junior Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jun 2022 - Dec 2022',
    achievements: [
      'Developed and maintained 5+ client-facing web applications',
      'Improved page load performance by 50% through code optimization',
      'Implemented responsive designs increasing mobile engagement by 35%',
      'Collaborated with design team to create pixel-perfect UI implementations',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full ${
                    index % 2 === 0
                      ? 'md:right-0 md:translate-x-1/2 left-0 -translate-x-1/2 md:translate-x-1/2'
                      : 'md:left-0 md:-translate-x-1/2 left-0 -translate-x-1/2 md:-translate-x-1/2'
                  }`}
                >
                  <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-75" />
                </div>

                <div
                  className="glass-card p-6 rounded-2xl ml-8 md:ml-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300">
                          <TrendingUp className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          <p className="text-sm">{achievement}</p>
                        </div>
                      ))}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-cyan-500/30 text-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    {expandedIndex === index ? 'Click to collapse' : 'Click to expand'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

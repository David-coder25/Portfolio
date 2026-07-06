import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Developer Award 2024',
    organization: 'ASK Technology',
    description: 'Recognized for outstanding contribution to critical projects',
  },
  {
    icon: Award,
    title: 'Innovation Excellence',
    organization: 'Tech Solutions Inc.',
    description: 'Awarded for implementing cutting-edge solutions',
  },
  {
    icon: Star,
    title: 'Top Performer Q1 2024',
    organization: 'ASK Technology',
    description: 'Exceeded performance metrics by 150%',
  },
  {
    icon: Target,
    title: 'Client Appreciation',
    organization: 'Multiple Clients',
    description: 'Received commendations for exceptional delivery',
  },
];

export function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
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
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-purple-400 font-semibold mb-3">{achievement.organization}</p>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

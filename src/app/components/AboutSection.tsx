import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const strengths = [
    {
      icon: Code2,
      title: 'Scalable Architecture',
      description: 'Building robust systems designed for growth and performance',
    },
    {
      icon: Zap,
      title: 'UI + Backend Integration',
      description: 'Seamless connection between beautiful interfaces and powerful backends',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Delivering lightning-fast experiences through advanced optimization',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer with a proven track record of building 
                scalable, high-performance web applications. With over 2 years of experience 
                and 5+ successful projects, I specialize in creating seamless digital experiences 
                that blend elegant design with robust functionality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines modern development practices with a deep understanding 
                of user needs, resulting in applications that not only perform exceptionally 
                but also delight users at every interaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 group-hover:scale-110 transition-transform">
                    <strength.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{strength.title}</h3>
                    <p className="text-gray-400">{strength.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

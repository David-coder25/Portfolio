import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const projects = [
  {
    name: 'TIOG Mobile App',
    description: 'A comprehensive mobile-first application with real-time features and advanced state management. Built to handle complex workflows with seamless user experience.',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'Corporate Website',
    description: 'High-performance corporate website built with Next.js featuring SSR, SEO optimization, and modern design patterns. Achieved 95+ Lighthouse scores.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard. Handles 10K+ products efficiently.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Stripe', 'Redis'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Real-time analytics platform with interactive charts, data visualization, and comprehensive reporting capabilities.',
    technologies: ['React', 'D3.js', 'Node.js', 'InfluxDB'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    name: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, and project tracking.',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building scalable, performant applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className="glass-card rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  transform: hoveredIndex === index ? 'rotateX(5deg) rotateY(5deg)' : 'rotateX(0) rotateY(0)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-cyan-500/30 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 group/btn"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

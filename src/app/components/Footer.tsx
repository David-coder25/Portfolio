import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" />

      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Name */}
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              David Raja
            </h3>

            {/* Tagline */}
            <p className="text-gray-400 mb-6">Full-Stack Developer | Problem Solver | Tech Enthusiast</p>

            {/* Divider */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />

            {/* Copyright */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>© {currentYear} David Raja. Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>and code</span>
            </div>

            {/* Tech Stack Badge */}
            <p className="text-xs text-gray-600 mt-4">
              Built with React, Three.js, Tailwind CSS & Motion
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
    </footer>
  );
}

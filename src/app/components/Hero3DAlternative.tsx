import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero3DAlternative() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 opacity-40 overflow-hidden">
      {/* Main Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <motion.div
          className="relative w-[500px] h-[500px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Gradient Orb 1 */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Gradient Orb 2 */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Ring Elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                },
              }}
            />
          ))}

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 150;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * radius,
                    Math.cos(((angle + 180) * Math.PI) / 180) * radius,
                    Math.cos((angle * Math.PI) / 180) * radius,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * radius,
                    Math.sin(((angle + 180) * Math.PI) / 180) * radius,
                    Math.sin((angle * Math.PI) / 180) * radius,
                  ],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Works() {
  const projects = [
    { id: 1, title: 'Project Alpha', category: 'Fintech Dashboard', image: 'https://picsum.photos/seed/alpha/800/600?blur=2', size: 'large' },
    { id: 2, title: 'Nexus Engine', category: 'Web Rendering', image: 'https://picsum.photos/seed/nexus/800/600?blur=2', size: 'small' },
    { id: 3, title: 'Cyberpunk UI Kit', category: 'Design System', image: 'https://picsum.photos/seed/cyber/800/600?blur=2', size: 'small' },
    { id: 4, title: 'Starlight Tracker', category: 'Mobile App', image: 'https://picsum.photos/seed/star/800/600?blur=2', size: 'medium' },
    { id: 5, title: 'Quantum DB', category: 'Backend Architecture', image: 'https://picsum.photos/seed/quantum/800/600?blur=2', size: 'medium' },
    { id: 6, title: 'Neon Pulse', category: 'Immersive Game', image: 'https://picsum.photos/seed/neon/800/600?blur=2', size: 'large' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          Our <span className="text-[#fed430]">Works</span>.
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl font-light">
          A curated selection of our finest digital creations, spanning applications, games, and high-performance websites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl border border-white/10 cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 lg:col-span-2 row-span-2' :
                project.size === 'medium' ? 'md:col-span-1 lg:col-span-1 row-span-2' :
                'col-span-1 row-span-1'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-80"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#fed430]/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[#fed430] text-sm font-medium mb-2 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#fed430]" />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

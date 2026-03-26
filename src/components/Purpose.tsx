import { motion } from 'motion/react';
import { Database, Server, Terminal } from 'lucide-react';

export default function Purpose() {
  const techStack = [
    { name: 'Frontend', icon: <Terminal className="w-6 h-6" />, desc: 'React, Next.js, Tailwind CSS, Framer Motion' },
    { name: 'Backend', icon: <Server className="w-6 h-6" />, desc: 'Node.js, Express, Go, Python' },
    { name: 'Database', icon: <Database className="w-6 h-6" />, desc: 'PostgreSQL, MongoDB, Redis' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
          Our <span className="text-[#d8ff30]">Purpose</span>.
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed">
          <p className="mb-6">
            At Caffode, we believe that the digital world is a canvas for innovation. We are a collective of engineers, designers, and dreamers dedicated to building high-fidelity, high-performance digital experiences.
          </p>
          <p className="mb-12">
            Our mission is to bridge the gap between <span className="text-[#fed430] font-medium">aesthetic brilliance</span> and <span className="text-[#7ec400] font-medium">technical robustnes</span>. We don't just write code; we architect solutions that scale, perform, and inspire.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 mt-16 border-b border-white/10 pb-4">
          The Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bento-card p-6 border-l-4 border-l-[#d8ff30]"
            >
              <div className="text-[#d8ff30] mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-400">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bento-card p-8 md:p-12 bg-gradient-to-br from-[#14151a] to-[#0B0C10] border-[#d8ff30]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8ff30]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h2 className="text-3xl font-display font-bold mb-4">Ready to build?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Whether you need a cutting-edge web application, an immersive game, or a scalable backend architecture, our team is ready to bring your vision to life.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Contact the Studio
          </button>
        </div>
      </motion.div>
    </div>
  );
}

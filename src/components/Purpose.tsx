import { motion } from 'motion/react';
import { Database, Server, Terminal, Facebook, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Purpose() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(hover: none)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

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
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          Our <span className="text-[#d8ff30]">Purpose</span>.
        </h1>
        <p className="text-[#d8ff30] font-mono text-sm mb-8 tracking-widest uppercase">
          Creative Agency For Future-ready Outstanding Digital Experiences
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed"
        >
          <p className="mb-6 text-xl text-white font-medium">
            Design. Code. Create.
          </p>
          <p className="mb-6">
            At Caffode, we believe that the digital world is a canvas for innovation. We are a collective of engineers, designers, and dreamers dedicated to building high-fidelity, high-performance digital experiences.
          </p>
          <p className="mb-12">
            Our mission is to bridge the gap between <span className="text-[#fed430] font-medium">aesthetic brilliance</span> and <span className="text-[#7ec400] font-medium">technical robustness</span>. We don't just write code; we architect solutions that scale, perform, and inspire. We are where your digital ideas get brewed to perfection.
          </p>
        </motion.div>

        <motion.a
          href="https://www.facebook.com/caffode"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group block mb-12 p-6 bento-card border-[#d8ff30]/20 bg-gradient-to-r from-[#d8ff30]/5 to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8ff30]/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#d8ff30]/10 transition-colors"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#d8ff30]/10 flex items-center justify-center border border-[#d8ff30]/20 text-[#d8ff30]">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#d8ff30] transition-colors">Caffode Community</h3>
                <p className="text-sm text-gray-400">Follow us on Facebook for updates and insights.</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#d8ff30] transition-colors" />
          </div>
        </motion.a>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-4xl font-display font-bold mb-12 mt-24 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-[#d8ff30]/50"></span>
          The Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                hover: { y: -5, opacity: 1 }
              }}
              initial="initial"
              whileInView={isTouch ? "hover" : "animate"}
              whileHover={!isTouch ? "hover" : undefined}
              viewport={{ 
                once: !isTouch,
                amount: 0.3
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
                layout: { duration: 0.4, ease: "easeOut" }
              }}
              className="bento-card p-8 group relative overflow-hidden cursor-default h-fit"
            >
              <motion.div 
                variants={{
                  initial: { height: 0 },
                  animate: { height: 0 },
                  hover: { height: "100%" }
                }}
                className="absolute top-0 left-0 w-1 bg-[#d8ff30] transition-all duration-500"
              />
              
              <motion.div 
                variants={{
                  initial: { marginBottom: 8 },
                  animate: { marginBottom: 8 },
                  hover: { marginBottom: 24 }
                }}
                className="flex items-center gap-5 transition-all duration-500"
              >
                <motion.div 
                  variants={{
                    initial: { scale: 1 },
                    animate: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  className="text-[#d8ff30] p-4 rounded-2xl bg-[#d8ff30]/5 w-fit border border-[#d8ff30]/10 transition-transform duration-500"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-bold tracking-tight">{tech.name}</h3>
              </motion.div>
              
              <motion.div
                layout
                variants={{
                  initial: { height: 0, opacity: 0 },
                  animate: { height: 0, opacity: 0 },
                  hover: { height: "auto", opacity: 1 }
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.p 
                  variants={{
                    initial: { y: -10 },
                    animate: { y: -10 },
                    hover: { y: 0 }
                  }}
                  className="text-gray-400 leading-relaxed font-light border-t border-white/5 pt-4"
                >
                  {tech.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, borderColor: 'rgba(216, 255, 48, 0.4)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 bento-card p-12 md:p-20 bg-gradient-to-br from-[#14151a] to-[#0B0C10] border-[#d8ff30]/20 relative overflow-hidden group transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8ff30]/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-[#d8ff30]/10 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7ec400]/5 rounded-full blur-[80px] -ml-20 -mb-20 group-hover:bg-[#7ec400]/10 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter group-hover:text-[#d8ff30] transition-colors duration-500">Ready to build?</h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                Whether you need a cutting-edge web application, an immersive game, or a scalable backend architecture, our team is ready to bring your vision to life.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(216, 255, 48, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#d8ff30] text-black font-bold rounded-full transition-all shadow-[0_20px_50px_rgba(216,255,48,0.2)] whitespace-nowrap"
            >
              Contact the Studio
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

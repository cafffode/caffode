import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Code, Smartphone, Facebook } from 'lucide-react';

export default function Home({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();

  // Parallax values for Hero section - move UPWARDS to avoid overlapping content below
  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "-15%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const titleWords = "We Craft Digital".split(" ");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div ref={containerRef} className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
      {/* Hero Section */}
      <motion.div 
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="min-h-[85vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto pt-20 mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#d8ff30]/30 bg-[#d8ff30]/5 text-[#d8ff30] text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#d8ff30] mr-2 animate-pulse shadow-[0_0_10px_#d8ff30]"></span>
          Building the future of Digital Experiences
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
          <div className="overflow-hidden py-2">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + (i * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="neon-text-highlight mt-2 md:mt-4 relative"
          >
            <span className="relative z-10">Realities</span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/20 blur-xl -z-10"
            />
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          A full-stack digital studio developing <span className="text-white font-normal">next-generation applications</span>, immersive games, and high-performance websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: mousePos.x, y: mousePos.y }}
            onClick={() => setActiveTab('Store')}
            className="w-full sm:w-auto px-10 py-5 bg-[#d8ff30] hover:bg-[#c2e62b] text-black font-bold rounded-full transition-colors flex items-center justify-center group shadow-[0_20px_50px_rgba(216,255,48,0.2)]"
          >
            Explore the Store
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <a
            href="https://www.facebook.com/caffode"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:bg-white/5 text-white font-bold rounded-full transition-all flex items-center justify-center group backdrop-blur-sm"
          >
            Follow on Facebook
            <Facebook className="ml-2 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bento Grid Below the Fold */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
        {/* Card 1 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bento-card p-10 md:col-span-2 relative overflow-hidden group cursor-pointer" 
          onClick={() => setActiveTab('Store')}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ec400]/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-[#7ec400]/20"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#7ec400]/20 flex items-center justify-center mb-8 border border-[#7ec400]/30 shadow-[0_0_20px_rgba(126,196,0,0.2)]">
              <Code className="w-7 h-7 text-[#7ec400]" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">Latest Release: Nexus Engine</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">Our new high-performance rendering engine is now available. Built for the modern web with next-gen capabilities.</p>
            <span className="text-[#7ec400] font-bold flex items-center group-hover:translate-x-2 transition-transform">
              View in Store <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bento-card p-10 relative overflow-hidden group cursor-pointer" 
          onClick={() => setActiveTab('Community')}
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d8ff30]/10 rounded-full blur-[80px] -mr-20 -mb-20 transition-all group-hover:bg-[#d8ff30]/20"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d8ff30]/20 flex items-center justify-center mb-6 border border-[#d8ff30]/30 shadow-[0_0_20px_rgba(216,255,48,0.2)]">
                <Smartphone className="w-6 h-6 text-[#d8ff30]" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">Community Update</h3>
              <p className="text-gray-400 leading-relaxed">Join the discussion on our upcoming mobile framework and connect with creators.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#14151a] bg-gray-800 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="user" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#14151a] bg-[#d8ff30] flex items-center justify-center text-black text-xs font-bold">
                  +12k
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

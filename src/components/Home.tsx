import { motion } from 'motion/react';
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react';

export default function Home({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mt-10 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#d8ff30]/30 bg-[#d8ff30]/5 text-[#d8ff30] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#d8ff30] mr-2 animate-pulse"></span>
          Building the future of Digital Experiences
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-tight mb-6"
        >
          We Craft Digital <br className="hidden md:block" />
          <span className="neon-text-highlight mt-2 md:mt-4">
            <span>Realities</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          A full-stack digital studio developing next-generation applications, immersive games, and high-performance websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setActiveTab('Store')}
            className="w-full sm:w-auto px-8 py-4 bg-[#d8ff30] hover:bg-[#c2e62b] text-black font-semibold rounded-lg transition-colors flex items-center justify-center group"
          >
            Explore the Store
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setActiveTab('Works')}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-colors"
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Bento Grid Below the Fold */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1 */}
        <div className="bento-card p-8 md:col-span-2 relative overflow-hidden group cursor-pointer" onClick={() => setActiveTab('Store')}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ec400]/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-[#7ec400]/20"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-lg bg-[#7ec400]/20 flex items-center justify-center mb-6 border border-[#7ec400]/30">
              <Code className="w-6 h-6 text-[#7ec400]" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Latest Release: Nexus Engine</h3>
            <p className="text-gray-400 mb-6 max-w-md">Our new high-performance rendering engine is now available in the store. Built for the modern web.</p>
            <span className="text-[#7ec400] font-medium flex items-center group-hover:underline">
              View in Store <ArrowRight className="ml-1 w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bento-card p-8 relative overflow-hidden group cursor-pointer" onClick={() => setActiveTab('Works')}>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#fed430]/10 rounded-full blur-2xl -ml-10 -mb-10 transition-all group-hover:bg-[#fed430]/20"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#fed430]/20 flex items-center justify-center mb-4 border border-[#fed430]/30">
                <Layout className="w-5 h-5 text-[#fed430]" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Project Alpha</h3>
              <p className="text-gray-400 text-sm">Award-winning fintech dashboard design.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bento-card p-8 relative overflow-hidden group cursor-pointer" onClick={() => setActiveTab('Community')}>
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#d8ff30]/10 rounded-full blur-2xl -mr-10 transition-all group-hover:bg-[#d8ff30]/20"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#d8ff30]/20 flex items-center justify-center mb-4 border border-[#d8ff30]/30">
                <Smartphone className="w-5 h-5 text-[#d8ff30]" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Community Update</h3>
              <p className="text-gray-400 text-sm">Join the discussion on our upcoming mobile framework.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

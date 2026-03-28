import { useState } from 'react';
import { Menu, X, ShoppingBag, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ 
  activeTab, 
  setActiveTab,
  cartCount
}: { 
  activeTab: string, 
  setActiveTab: (tab: string) => void,
  cartCount: number
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const tabs = ['Home', 'Purpose', 'Store', 'Community', 'Cart'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleTabClick('Home')}>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              Caffode<span className="text-[#d8ff30]">.</span>
            </span>
          </div>

          {/* Center Tabs - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-[#d8ff30] bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/caffode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#d8ff30] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <button 
              onClick={() => handleTabClick('Cart')}
              className={`p-2 transition-colors relative ${activeTab === 'Cart' ? 'text-[#d8ff30]' : 'text-gray-400 hover:text-[#d8ff30]'}`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#d8ff30] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0C10]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                    activeTab === tab
                      ? 'text-[#d8ff30] bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

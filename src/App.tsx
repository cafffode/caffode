/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Purpose from './components/Purpose';
import Works from './components/Works';
import Store from './components/Store';
import Community from './components/Community';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home setActiveTab={setActiveTab} />;
      case 'Purpose':
        return <Purpose />;
      case 'Works':
        return <Works />;
      case 'Store':
        return <Store />;
      case 'Community':
        return <Community />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white font-sans selection:bg-[#d8ff30] selection:text-black relative overflow-hidden">
      {/* Global Animated Neon Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(216,255,48,0.15)_0%,rgba(126,196,0,0)_70%)] blur-[80px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(126,196,0,0.15)_0%,rgba(216,255,48,0)_70%)] blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[65vw] h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(254,212,48,0.1)_0%,rgba(216,255,48,0)_70%)] blur-[90px] animate-blob animation-delay-4000"></div>
        {/* Subtle dark gradient overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/30 to-[#0B0C10]/80 pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-grow relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

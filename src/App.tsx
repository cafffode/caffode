/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Purpose from './components/Purpose';
import Store from './components/Store';
import Community from './components/Community';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on tab change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home setActiveTab={setActiveTab} />;
      case 'Purpose':
        return <Purpose />;
      case 'Store':
        return <Store setActiveTab={setActiveTab} addToCart={addToCart} />;
      case 'Community':
        return <Community />;
      case 'Cart':
        return (
          <Cart 
            cartItems={cart} 
            onRemove={removeFromCart} 
            onCheckout={() => setActiveTab('Checkout')} 
          />
        );
      case 'Checkout':
        return (
          <Checkout 
            cartItems={cart}
            onComplete={() => {
              clearCart();
              setActiveTab('Home');
            }} 
            onBack={() => setActiveTab('Cart')} 
          />
        );
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
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          cartCount={cartCount}
        />
        <main className="flex-grow relative" ref={scrollRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.02 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

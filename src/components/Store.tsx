import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Star, ShoppingBag } from 'lucide-react';

export default function Store({ setActiveTab, addToCart }: { setActiveTab: (tab: string) => void, addToCart: (product: any) => void }) {
  const [activeSubTab, setActiveSubTab] = useState('Feed');
  const subTabs = ['Feed', 'Websites', 'Games & Apps', 'Graphics', 'Products'];

  const products = [
    { id: 1, title: 'Neon Horizon', category: 'Games & Apps', tag: 'RPG', rating: 4.8, image: 'https://picsum.photos/seed/game1/600/400?blur=1', price: 29.00, isFree: false, weight: 0 },
    { id: 3, title: 'Void Runner', category: 'Games & Apps', tag: 'Arcade', rating: 4.5, image: 'https://picsum.photos/seed/game2/600/400?blur=1', price: 0, isFree: true, weight: 0 },
    { id: 4, title: 'Pixel Forge', category: 'Games & Apps', tag: 'Tool', rating: 4.7, image: 'https://picsum.photos/seed/app1/600/400?blur=1', price: 19.99, isFree: false, weight: 0 },
    { id: 2, title: 'Caffode UI Kit', category: 'Websites', tag: 'Design', rating: 4.9, image: 'https://picsum.photos/seed/web1/600/400?blur=1', price: 49.00, isFree: false, weight: 0 },
    { id: 7, title: 'Cyberpunk Tee', category: 'Graphics', tag: 'Apparel', rating: 4.8, image: 'https://picsum.photos/seed/shirt/600/400?blur=1', price: 35.00, isFree: false, weight: 0.3 },
    { id: 8, title: 'Neon Poster Set', category: 'Graphics', tag: 'Print', rating: 4.9, image: 'https://picsum.photos/seed/poster/600/400?blur=1', price: 15.00, isFree: false, weight: 0.5 },
    { id: 9, title: 'Caffode Mechanical Keyboard', category: 'Products', tag: 'Mechanical', rating: 4.9, image: 'https://picsum.photos/seed/keyboard/600/400?blur=1', price: 149.00, isFree: false, weight: 1.2 },
    { id: 10, title: 'Caffode Precision Mouse', category: 'Products', tag: 'Gaming', rating: 4.8, image: 'https://picsum.photos/seed/mouse/600/400?blur=1', price: 79.00, isFree: false, weight: 0.15 },
    { id: 11, title: 'Caffode Neon Mousepad', category: 'Products', tag: 'Desk Mat', rating: 4.7, image: 'https://picsum.photos/seed/mousepad/600/400?blur=1', price: 29.00, isFree: false, weight: 0.4 },
  ];

  const filteredProducts = activeSubTab === 'Feed' ? [] : products.filter(p => p.category === activeSubTab);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            Store
          </h1>

          {/* Sub-Navigation Menu */}
          <div className="flex items-center p-1.5 gap-1 rounded-full border border-white/10 bg-[#14151a] self-start md:self-auto overflow-x-auto scrollbar-hide">
            {subTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSubTab === tab
                    ? 'bg-[#d8ff30] text-black ring-1 ring-white ring-offset-2 ring-offset-[#14151a] shadow-[0_0_15px_rgba(216,255,48,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {activeSubTab === 'Feed' ? (
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-bold mb-8">Developer Feed</h2>
            <div className="space-y-8 border-l-2 border-white/10 pl-6 ml-4">
              <div className="relative">
                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-[#d8ff30] border-4 border-[#0B0C10]"></div>
                <span className="text-sm text-gray-500 mb-1 block">v2.4.0 • Today</span>
                <h3 className="text-xl font-bold mb-2">Nexus Engine Update</h3>
                <p className="text-gray-400">Added support for WebGPU rendering pipeline and improved particle system performance by 40%.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#0B0C10]"></div>
                <span className="text-sm text-gray-500 mb-1 block">Release • Yesterday</span>
                <h3 className="text-xl font-bold mb-2">Neon Pulse Launched</h3>
                <p className="text-gray-400">Our highly anticipated cyberpunk rhythm game is now available for download. Experience the neon rush.</p>
              </div>
            </div>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#14151a] rounded-2xl overflow-hidden border border-white/5 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/10 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                      {product.tag}
                    </div>
                    <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold border ${product.isFree ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-[#d8ff30]/20 text-[#d8ff30] border-[#d8ff30]/30'}`}>
                      {product.isFree ? 'Free' : `${product.price} TK`}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-display font-bold text-white">{product.title}</h3>
                      <div className="flex items-center text-[#d8ff30] font-bold text-lg">
                        <Star className="w-5 h-5 mr-1 fill-[#d8ff30]" />
                        {product.rating}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => addToCart(product)}
                        className="flex-grow py-3.5 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-xl flex items-center justify-center font-medium transition-colors"
                      >
                        {product.isFree ? <Download className="w-5 h-5 mr-2" /> : <ShoppingBag className="w-5 h-5 mr-2" />}
                        {product.isFree ? 'Download' : 'Add to Cart'}
                      </button>
                      {!product.isFree && (
                        <button 
                          onClick={() => {
                            addToCart(product);
                            setActiveTab('Checkout');
                          }}
                          className="px-6 py-3.5 bg-[#d8ff30] text-black rounded-xl font-bold hover:bg-[#c2e62b] transition-colors"
                        >
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        </motion.div>
    </div>
  );
}

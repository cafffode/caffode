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
        <AnimatePresence mode="wait">
          {activeSubTab === 'Feed' ? (
            <motion.div 
              key="feed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 flex items-center gap-4">
                <span className="w-8 h-8 rounded-lg bg-[#d8ff30]/20 flex items-center justify-center border border-[#d8ff30]/30">
                  <div className="w-2 h-2 rounded-full bg-[#d8ff30] animate-pulse"></div>
                </span>
                Developer Feed
              </h2>
              <div className="space-y-12 border-l border-white/10 pl-8 ml-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#d8ff30] border-4 border-[#0B0C10] shadow-[0_0_15px_#d8ff30]"></div>
                  <span className="text-sm font-mono text-[#d8ff30]/60 mb-2 block tracking-widest uppercase">v2.4.0 • Today</span>
                  <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Nexus Engine Update</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">Added support for WebGPU rendering pipeline and improved particle system performance by 40%. New shaders included.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-gray-600 border-4 border-[#0B0C10]"></div>
                  <span className="text-sm font-mono text-gray-500 mb-2 block tracking-widest uppercase">Release • Yesterday</span>
                  <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Neon Pulse Launched</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">Our highly anticipated cyberpunk rhythm game is now available for download. Experience the neon rush in 4K.</p>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              layout 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    whileHover={{ y: -10 }}
                    className="bento-card overflow-hidden flex flex-col group"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-xl text-xs font-bold text-white border border-white/10 flex items-center shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-[#d8ff30] mr-2 animate-pulse shadow-[0_0_10px_#d8ff30]"></span>
                        {product.tag}
                      </div>
                      <div className={`absolute top-6 right-6 px-4 py-2 rounded-xl text-xs font-bold border shadow-2xl ${product.isFree ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-[#d8ff30]/20 text-[#d8ff30] border-[#d8ff30]/30'}`}>
                        {product.isFree ? 'Free' : `${product.price} TK`}
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col justify-between relative">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#d8ff30] transition-colors">{product.title}</h3>
                        <div className="flex items-center text-[#d8ff30] font-bold text-xl bg-[#d8ff30]/5 px-3 py-1 rounded-lg border border-[#d8ff30]/10">
                          <Star className="w-5 h-5 mr-1.5 fill-[#d8ff30]" />
                          {product.rating}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(product)}
                          className="flex-grow py-4 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-2xl flex items-center justify-center font-bold transition-all group/btn"
                        >
                          {product.isFree ? <Download className="w-5 h-5 mr-2 group-hover/btn:translate-y-0.5 transition-transform" /> : <ShoppingBag className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />}
                          {product.isFree ? 'Download' : 'Add to Cart'}
                        </motion.button>
                        {!product.isFree && (
                          <motion.button 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              addToCart(product);
                              setActiveTab('Checkout');
                            }}
                            className="px-8 py-4 bg-[#d8ff30] text-black rounded-2xl font-bold hover:bg-[#c2e62b] transition-all shadow-[0_10px_30px_rgba(216,255,48,0.2)]"
                          >
                            Buy Now
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
    </div>
  );
}

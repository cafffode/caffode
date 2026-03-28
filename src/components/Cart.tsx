import { motion } from 'motion/react';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

export default function Cart({ 
  cartItems, 
  onRemove, 
  onCheckout 
}: { 
  cartItems: CartItem[], 
  onRemove: (id: number) => void,
  onCheckout: () => void 
}) {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-500" />
        </div>
        <h2 className="text-2xl font-display font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-display font-bold">Your Cart</h2>
          <div className="bento-card divide-y divide-white/5">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover border border-white/10" />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.category} {item.quantity > 1 && `x${item.quantity}`}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-bold">{(item.price * item.quantity).toFixed(2)} TK</span>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-6 bento-card bg-[#d8ff30]/5 border-[#d8ff30]/20">
            <span className="text-gray-400">Total Amount</span>
            <span className="text-3xl font-bold text-[#d8ff30]">{total.toFixed(2)} TK</span>
          </div>
          <button 
            onClick={onCheckout} 
            className="w-full py-4 bg-[#d8ff30] text-black font-bold rounded-xl hover:bg-[#c2e62b] transition-all flex items-center justify-center shadow-[0_0_20px_rgba(216,255,48,0.2)]"
          >
            Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

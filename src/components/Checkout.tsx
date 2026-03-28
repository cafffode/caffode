import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Truck, CreditCard, Smartphone, ArrowRight, CheckCircle2, AlertCircle, ChevronLeft, StickyNote, ChevronDown } from 'lucide-react';
import { CartItem } from '../types';
import { districts, thanas } from '../data/bangladeshData';

const DHAKA_CITY_THANAS = [
  "Adabor", "Badda", "Bangsal", "Bimanbandar", "Cantonment", "Chak Bazar", "Dakshinkhan", "Darus Salam", "Dhanmondi", "Demra", "Gendaria", "Gulshan", "Hazaribagh", "Jatrabari", "Kadamtali", "Kafrul", "Kalabagan", "Kamrangirchar", "Khilgaon", "Khilkhet", "Kotwali", "Lalbagh", "Mirpur", "Mohammadpur", "Motijheel", "New Market", "Pallabi", "Paltan", "Panthapath", "Ramna", "Rampura", "Sabujbagh", "Shah Ali", "Shahbagh", "Sher-e-Bangla Nagar", "Shyampur", "Sutrapur", "Tejgaon", "Tejgaon Industrial Area", "Turag", "Uttara", "Uttar Khan", "Vatara", "Wari"
];

export default function Checkout({ 
  cartItems, 
  onComplete, 
  onBack 
}: { 
  cartItems: CartItem[],
  onComplete: () => void, 
  onBack: () => void 
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    country: 'Bangladesh',
    district: '',
    thana: '',
    orderNote: '',
    paymentMethod: 'cod',
    agreeTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculateDeliveryFee = () => {
    if (!formData.district) return 0;
    
    // Calculate total weight
    const totalWeight = cartItems.reduce((acc, item) => acc + ((item.weight || 0) * item.quantity), 0);
    
    // Base charge is for up to 1kg. Additional weight charge is 20 TK per kg.
    // We round up the weight to the nearest kg for the additional charge.
    const additionalWeight = Math.max(0, Math.ceil(totalWeight - 1));
    const additionalCharge = additionalWeight * 20;

    const subDhakaThanas = ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar", "Amin Bazar", "Ashulia"];
    const subDhakaDistricts = ["Sub-Dhaka"];

    if (formData.district === 'Dhaka') {
      if (DHAKA_CITY_THANAS.includes(formData.thana)) {
        return 80 + additionalCharge;
      }
      if (subDhakaThanas.includes(formData.thana)) {
        return 100 + additionalCharge;
      }
      // Default for Dhaka district areas not explicitly in the city list
      return 100 + additionalCharge;
    }
    
    if (formData.district === 'Sub-Dhaka') {
      // If Gazipur or Narayanganj are selected as thanas under Sub-Dhaka, they should be 140
      if (["Gazipur", "Narayanganj"].includes(formData.thana)) {
        return 140 + additionalCharge;
      }
      return 100 + additionalCharge;
    }

    return 140 + additionalCharge;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.district) newErrors.district = 'District is required';
    if (!formData.thana) newErrors.thana = 'Thana is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onComplete();
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = calculateDeliveryFee();
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-[#d8ff30] transition-colors mb-8 group"
      >
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Cart
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bento-card p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#d8ff30]/10 flex items-center justify-center border border-[#d8ff30]/20">
                <Truck className="w-5 h-5 text-[#d8ff30]" />
              </div>
              <h2 className="text-2xl font-display font-bold">Shipping Details</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-bold flex items-center">
                  Customer Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none transition-all`}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <p className="text-xs text-red-500 flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-bold flex items-center">
                  Phone Number <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-white/10 bg-white/5 text-gray-400 text-sm">
                    +880
                  </span>
                  <input
                    type="tel"
                    placeholder="1XXX XXXXXX"
                    className={`flex-1 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-r-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none transition-all`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500 flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-bold flex items-center">
                  Street Address <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  placeholder="House number, street name, landmarks..."
                  rows={3}
                  className={`w-full bg-white/5 border ${errors.address ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none transition-all`}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                {errors.address && <p className="text-xs text-red-500 flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" /> {errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase text-gray-500 font-bold">Country</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-[#14151a] border border-white/10 rounded-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none appearance-none text-white pr-10"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="Bangladesh" className="bg-[#14151a]">Bangladesh</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase text-gray-500 font-bold flex items-center">
                    District <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className={`w-full bg-[#14151a] border ${errors.district ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none appearance-none text-white pr-10`}
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value, thana: '' })}
                    >
                      <option value="" className="bg-[#14151a]">Select District</option>
                      {districts.map(d => <option key={d} value={d} className="bg-[#14151a]">{d}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase text-gray-500 font-bold flex items-center">
                    Thana <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className={`w-full bg-[#14151a] border ${errors.thana ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none appearance-none text-white pr-10`}
                      value={formData.thana}
                      onChange={(e) => setFormData({ ...formData, thana: e.target.value })}
                      disabled={!formData.district}
                    >
                      <option value="" className="bg-[#14151a]">Select Thana</option>
                      {formData.district && thanas[formData.district]?.map(t => <option key={t} value={t} className="bg-[#14151a]">{t}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bento-card p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#fed430]/10 flex items-center justify-center border border-[#fed430]/20">
                <CreditCard className="w-5 h-5 text-[#fed430]" />
              </div>
              <h2 className="text-2xl font-display font-bold">Payment Method</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-4 rounded-xl border transition-all flex items-center space-x-4 ${formData.paymentMethod === 'cod' ? 'border-[#d8ff30] bg-[#d8ff30]/5' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.paymentMethod === 'cod' ? 'bg-[#d8ff30] text-black' : 'bg-white/10 text-gray-400'}`}>
                      <Truck className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">Cash on Delivery</p>
                      <p className="text-xs text-gray-500">Pay when you receive</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'online' })}
                    className={`p-4 rounded-xl border transition-all flex items-center space-x-4 ${formData.paymentMethod === 'online' ? 'border-[#fed430] bg-[#fed430]/5' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.paymentMethod === 'online' ? 'bg-[#fed430] text-black' : 'bg-white/10 text-gray-400'}`}>
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">Online Payment</p>
                      <p className="text-xs text-gray-500">bKash, Nagad, Cards</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-4 border-t border-white/5">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#d8ff30] focus:ring-[#d8ff30]"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the <a href="#" className="text-[#d8ff30] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#d8ff30] hover:underline">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeTerms && <p className="text-xs text-red-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.agreeTerms}</p>}
            </div>
          </section>

          <section className="bento-card p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center border border-blue-400/20">
                <StickyNote className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-display font-bold">Order Notes</h2>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase text-gray-500 font-bold">Special Instructions (Optional)</label>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery."
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#d8ff30]/50 outline-none transition-all"
                value={formData.orderNote}
                onChange={(e) => setFormData({ ...formData, orderNote: e.target.value })}
              />
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="space-y-6">
          <div className="bento-card p-8 sticky top-32">
            <h2 className="text-xl font-display font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} TK</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <div className="flex flex-col">
                  <span>Delivery Fee</span>
                  <span className="text-[10px] text-gray-500">
                    Total Weight: {cartItems.reduce((acc, item) => acc + ((item.weight || 0) * item.quantity), 0).toFixed(2)} kg
                  </span>
                </div>
                <span>{deliveryFee.toFixed(2)} TK</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-lg font-bold">Total Amount</span>
                <span className="text-2xl font-bold text-[#d8ff30]">{total.toFixed(2)} TK</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-[#d8ff30] text-black font-bold rounded-xl hover:bg-[#c2e62b] transition-all shadow-[0_0_20px_rgba(216,255,48,0.2)] flex items-center justify-center group"
            >
              Place Order
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-[#7ec400] mr-2" />
                Secure SSL Encrypted Payment
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-[#7ec400] mr-2" />
                7-Day Easy Return Policy
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

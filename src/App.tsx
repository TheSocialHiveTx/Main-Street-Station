/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Facebook, Clock, Mail, Instagram, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-red-100 selection:text-red-900">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-200">
            M
          </div>
          <span className="font-bold tracking-tight text-lg hidden sm:block">MAIN STREET STATION</span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/p/Main-Street-Station-61573853823510/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-600"
          >
            <Facebook size={20} />
          </a>
        </div>
      </header>

      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Clock size={14} />
              Opening April 2026
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              <span className="font-serif italic text-red-600 block">Main Street</span>
              <span className="block">Station</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-md mb-10 leading-relaxed">
              La Porte's newest modern diner. We're crafting a space where classic flavors meet contemporary style. 
              Coming soon to the heart of Main Street.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-neutral-100 rounded-lg">
                  <MapPin size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-400">Location</h3>
                  <p className="text-lg font-medium">115 W Main St., La Porte, TX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-neutral-100 rounded-lg">
                  <Mail size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-400">Stay Updated</h3>
                  <p className="text-lg font-medium">mainstreetstationLPTX</p>
                </div>
              </div>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email for updates" 
                className="flex-1 px-6 py-4 rounded-2xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              />
              <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-200">
                Notify Me
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/diner-modern/1200/1500" 
              alt="Main Street Station Rendering" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
                <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-1">Coming Soon</p>
                <h2 className="text-3xl font-bold">The Newest Up and Coming Restaurant in La Porte</h2>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features / About */}
        <section className="max-w-7xl mx-auto px-6 mt-32 grid md:grid-cols-3 gap-8">
          {[
            { title: "Modern Diner", desc: "A fresh take on the classic American diner experience.", icon: "🍳" },
            { title: "Local Flavors", desc: "Sourcing the best ingredients from across Texas.", icon: "🥩" },
            { title: "Main St. Heart", desc: "Located right in the center of La Porte's historic district.", icon: "📍" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100 mt-32 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-xl tracking-tight mb-2">MAIN STREET STATION</h2>
            <p className="text-neutral-400 text-sm">© 2026 Main Street Station. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.facebook.com/p/Main-Street-Station-61573853823510/" className="text-neutral-400 hover:text-red-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-red-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-red-600 transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

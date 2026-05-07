import { motion } from 'motion/react';
import { Phone, Calendar, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-12 bg-white border-b border-brand-border pt-16">
      {/* Left Content - Headline */}
      <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-20 relative overflow-hidden bg-brand-bg md:border-r border-brand-border">
        <div className="absolute top-10 right-10 text-[12vw] font-serif font-bold text-brand-border opacity-20 pointer-events-none select-none leading-none">
          HAIR
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-accent"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent italic">Est. 2019</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-extralight leading-[0.9] mb-10 text-brand-dark">
            <span className="font-script text-7xl md:text-9xl text-brand-accent block mb-2 lowercase opacity-90">Danna</span>
            Crafting <br />
            <span className="italic font-normal text-brand-accent">Confidence</span> <br />
            Daily.
          </h1>
          
          <p className="max-w-md text-sm md:text-base text-brand-dark/60 leading-relaxed mb-12 font-light">
            North Las Vegas' premier destination for expert hair care. 
            Experience the harmony of traditional barbering and modern styling
            in our elegant, golden-lit boutique.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="tel:+17020000000"
              className="px-10 py-5 bg-brand-dark text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all w-full sm:w-auto text-center"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/50 hover:text-brand-dark transition-colors"
            >
              View Services
              <div className="w-8 h-px bg-brand-dark/20 group-hover:w-12 group-hover:bg-brand-dark transition-all"></div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Content - Visual Blocks */}
      <div className="md:col-span-5 grid grid-cols-2 grid-rows-2 h-full">
        <div className="border-b border-r border-brand-border relative group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            alt="Salon"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-brand-dark/10">
             <span className="text-[10px] uppercase tracking-widest text-white font-bold">The Studio</span>
          </div>
        </div>
        <div className="border-b border-brand-border bg-brand-offwhite flex flex-col items-center justify-center p-8 text-center">
            <div className="flex text-brand-accent mb-3 text-[10px]">★★★★★</div>
            <p className="font-serif italic text-sm text-brand-dark/70">"Susy is highly recommended for barber cuts."</p>
        </div>
        <div className="border-r border-brand-border bg-white flex flex-col items-center justify-center p-8 text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-2">Signature</span>
            <h3 className="font-serif text-xl">Color Work</h3>
        </div>
        <div className="bg-brand-bg relative group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            alt="Hair Styling"
          />
        </div>
      </div>
    </div>
  );
}

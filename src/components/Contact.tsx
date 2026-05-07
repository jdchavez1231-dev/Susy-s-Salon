import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-bg border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Info Block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 border-r border-brand-border bg-white"
        >
          <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Location</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Visit Our Salon</h2>
          
          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <div className="w-1 px-8 border-l border-brand-accent h-auto">
                <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-3 text-brand-accent">Address</h4>
                <p className="text-sm text-brand-dark/70 transition-colors hover:text-brand-accent cursor-pointer leading-relaxed">
                  North Las Vegas, NV 89032<br />
                  (Specific address provided upon booking)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-1 px-8 border-l border-brand-accent h-auto">
                <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-3 text-brand-accent">Direct Line</h4>
                <a href="tel:+17020000000" className="text-sm text-brand-dark/70 transition-colors hover:text-brand-accent block leading-relaxed">
                  (702) 000-0000
                </a>
                <p className="text-[10px] text-brand-dark/40 mt-1 uppercase font-bold tracking-widest">Walk-ins Welcome!</p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-1 px-8 border-l border-brand-accent h-auto">
                <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-3 text-brand-accent">Hours</h4>
                <ul className="text-sm text-brand-dark/70 space-y-2">
                  <li className="flex justify-between w-64 border-b border-brand-border/50 pb-1"><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
                  <li className="flex justify-between w-64 border-b border-brand-border/50 pb-1 font-bold text-brand-dark"><span>Saturday:</span> <span>9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between w-64 text-brand-dark/40 italic"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-20">
            <a href="#" className="text-brand-dark/40 hover:text-brand-accent transition-all uppercase tracking-widest text-[10px] font-bold">Instagram</a>
            <a href="#" className="text-brand-dark/40 hover:text-brand-accent transition-all uppercase tracking-widest text-[10px] font-bold">Facebook</a>
          </div>
        </motion.div>

        {/* Form Block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 bg-brand-offwhite"
        >
          <h3 className="text-3xl font-serif mb-10 italic">Inquiry Form</h3>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b border-brand-border pb-2">
                <label className="block text-[8px] uppercase tracking-widest font-bold mb-2 text-brand-accent">Full Name</label>
                <input type="text" className="w-full bg-transparent outline-none py-2 text-sm" placeholder="Your Name" />
              </div>
              <div className="border-b border-brand-border pb-2">
                <label className="block text-[8px] uppercase tracking-widest font-bold mb-2 text-brand-accent">Mobile Phone</label>
                <input type="tel" className="w-full bg-transparent outline-none py-2 text-sm" placeholder="(702) 000-0000" />
              </div>
            </div>
            <div className="border-b border-brand-border pb-2">
              <label className="block text-[8px] uppercase tracking-widest font-bold mb-2 text-brand-accent">Desired Service</label>
              <select className="w-full bg-transparent outline-none py-2 text-sm appearance-none cursor-pointer">
                <option>Haircut & Styling</option>
                <option>Color & Highlights</option>
                <option>Men's Barber Services</option>
                <option>Children's Cut</option>
              </select>
            </div>
            <div className="border-b border-brand-border pb-2">
              <label className="block text-[8px] uppercase tracking-widest font-bold mb-2 text-brand-accent">Note</label>
              <textarea rows={4} className="w-full bg-transparent outline-none py-2 text-sm" placeholder="Additional details..."></textarea>
            </div>
            <button className="w-full bg-brand-dark text-white font-bold py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-brand-accent transition-all">
              Submit Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

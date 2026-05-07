import { motion } from 'motion/react';
import { SERVICES } from '../types';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4"
          >
            Capabilities
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Our Services</h2>
          <div className="w-24 h-px bg-brand-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-border">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group border-r border-b border-brand-border p-10 block-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                   <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center text-brand-accent font-serif italic text-2xl">
                     {index + 1}
                   </div>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/30">
                     {service.price}
                   </span>
                </div>
                
                <h3 className="text-3xl font-serif mb-4 group-hover:text-brand-accent transition-colors italic">
                  {service.name}
                </h3>
                <p className="text-sm text-brand-dark/60 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

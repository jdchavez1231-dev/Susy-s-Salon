import { motion } from 'motion/react';

const IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800",
];

export default function Portfolio() {
  return (
    <section id="gallery" className="bg-brand-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[600px] border-t border-brand-border">
        {/* Header Block */}
        <div className="lg:col-span-2 p-12 md:p-20 flex flex-col justify-center border-r border-b border-brand-border bg-brand-offwhite/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4 italic">Our Work</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Mastering the <br /><span className="text-brand-accent">Craft</span></h2>
          <p className="text-brand-dark/50 max-w-sm font-light text-sm leading-relaxed mb-10">
            A glimpse into the stunning transformations we create daily at Danna Beauty Salon.
          </p>
          <div className="flex gap-4">
            <div className="w-px h-12 bg-brand-accent"></div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/30 pt-1">
              Scroll to explore <br /> our visual history
            </p>
          </div>
        </div>

        {/* Image Blocks */}
        {IMAGES.slice(0, 6).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group border-r border-b border-brand-border h-[400px]"
          >
            <img
              src={img}
              alt={`Portfolio ${i}`}
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border border-white/30 px-6 py-2">
                 View Detail
               </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

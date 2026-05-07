import { motion } from 'motion/react';
import { REVIEWS } from '../types';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4"
          >
            Client Voices
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-10">What People Say</h2>
          <div className="w-24 h-px bg-brand-accent mb-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-border">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 border-r border-b border-brand-border flex flex-col justify-between block-hover ${index % 2 === 1 ? 'bg-brand-offwhite' : 'bg-white'}`}
            >
              <div>
                <div className="flex text-brand-accent mb-8 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="text-brand-dark/80 leading-relaxed font-serif italic text-lg mb-10 relative">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-10 border-t border-brand-border/30">
                <div className="w-10 h-10 bg-brand-accent text-white flex items-center justify-center font-bold text-xs uppercase">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">{review.author}</h4>
                  <div className="flex items-center gap-3">
                    {review.isLocalGuide && (
                      <span className="text-[8px] text-brand-accent uppercase tracking-widest font-bold">
                        Local Guide
                      </span>
                    )}
                    <span className="text-brand-dark/30 text-[8px] uppercase tracking-widest font-bold">{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

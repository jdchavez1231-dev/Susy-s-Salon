import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:col-span-4 flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-white rounded-full border border-brand-accent/20 flex items-center justify-center shadow-lg">
              <span className="text-brand-accent font-script text-3xl pt-1">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-tight font-bold uppercase italic leading-none">Danna</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-light text-white/40">Beauty Salon</span>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-wrap justify-center md:justify-start gap-8 text-[8px] uppercase tracking-[0.4em] font-bold text-white/40">
            <a href="#" className="hover:text-brand-accent transition-colors">{t.footer.home}</a>
            <a href="#services" className="hover:text-brand-accent transition-colors">{t.footer.services}</a>
            <a href="#gallery" className="hover:text-brand-accent transition-colors">{t.footer.gallery}</a>
            <a href="#reviews" className="hover:text-brand-accent transition-colors">{t.footer.reviews}</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">{t.footer.contact}</a>
          </div>

          <div className="md:col-span-3 text-right">
            <a href="tel:+17025411033" className="text-lg font-serif italic text-brand-accent hover:text-white transition-colors">
              (702) 541-1033
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] uppercase font-bold tracking-[0.3em] text-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Danna Beauty Salon. North Las Vegas.</p>
          <p className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.sitemap}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-white border-brand-border py-3' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full border border-brand-accent/30 flex items-center justify-center overflow-hidden shadow-sm">
              <span className="text-brand-accent font-script text-2xl pt-1">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif tracking-tight font-semibold uppercase leading-none">DANNA</span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-light text-brand-dark/50">Beauty Salon</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/60 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="text-[10px] uppercase tracking-[0.2em] font-bold border border-brand-border px-3 py-2 hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <a
              href="tel:+17025411033"
              className="bg-brand-dark text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all"
            >
              {t.nav.bookNow}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="text-[10px] uppercase tracking-[0.2em] font-bold border border-brand-border px-3 py-2 hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-dark">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-brand-border h-screen flex flex-col items-center justify-center"
          >
            <div className="px-6 space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-serif italic hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8">
                <a
                  href="tel:+17025411033"
                  className="bg-brand-dark text-white px-10 py-5 inline-block text-[10px] uppercase tracking-[0.2em] font-bold"
                >
                  {t.nav.callNow}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const INSTAGRAM_POSTS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800', likes: '124', comments: '12' },
  { id: '2', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800', likes: '89', comments: '5' },
  { id: '3', url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800', likes: '210', comments: '18' },
  { id: '4', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800', likes: '156', comments: '9' },
  { id: '5', url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800', likes: '94', comments: '7' },
  { id: '6', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800', likes: '312', comments: '24' },
];

export default function InstagramFeed() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">{t.instagram.label}</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-0">{t.instagram.heading}</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark hover:text-brand-accent transition-colors border border-brand-border px-8 py-4 mb-2"
          >
            <Instagram className="w-4 h-4" />
            {t.instagram.visitProfile}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-brand-border">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden border-r border-b border-brand-border"
            >
              <img
                src={post.url}
                alt={`Instagram post ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
                    <Heart className="w-4 h-4 fill-white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
                    <MessageCircle className="w-4 h-4 fill-white" /> {post.comments}
                  </span>
                </div>
                <Instagram className="w-6 h-6 opacity-30" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark/30">
            {t.instagram.liveUpdates}
          </p>
        </div>
      </div>
    </section>
  );
}

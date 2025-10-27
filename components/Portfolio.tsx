import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, CloseIcon } from './Icons';

const portfolioItems = [
  {
    title: 'Short Form Content',
    description: 'Svižná a energická videa pro Instagram & TikTok.',
    imageUrl: 'https://placehold.co/600x400/FFF/000/png?text=PHOTO 1',
    videoUrl: `https://www.youtube-nocookie.com/embed/NX-i0IWl3yg?feature=oembed&utm_source=${encodeURIComponent(window.location.href)}&utm_medium=embed&utm_campaign=talpic_portfolio`,
  },
  {
    title: 'Long Form Content',
    description: 'Propracovaná a storytellingová videa pro YouTube.',
    imageUrl: 'https://placehold.co/600x400/FFF/000/png?text=PHOTO 2',
    videoUrl: `https://www.youtube-nocookie.com/embed/NX-i0IWl3yg?feature=oembed&utm_source=${encodeURIComponent(window.location.href)}&utm_medium=embed&utm_campaign=talpic_portfolio`,
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 25 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const PortfolioModal: React.FC<{ videoUrl: string; closeModal: () => void }> = ({ videoUrl, closeModal }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-dark-card rounded-lg overflow-hidden shadow-2xl"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-10"
          aria-label="Close video player"
        >
          <CloseIcon />
        </button>
        <div className="aspect-video">
           <iframe
            src={`${videoUrl}?autoplay=1&rel=0`}
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};


const PortfolioCard: React.FC<{ item: typeof portfolioItems[0]; index: number; onCardClick: (url: string) => void }> = ({ item, index, onCardClick }) => (
  <motion.div
    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={index}
    onClick={() => onCardClick(item.videoUrl)}
    onKeyPress={(e) => e.key === 'Enter' && onCardClick(item.videoUrl)}
    tabIndex={0}
    role="button"
    aria-label={`View project: ${item.title}`}
  >
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-in-out">
        <PlayIcon />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="font-heading text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.description}</p>
    </div>
  </motion.div>
);

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  const openModal = (url: string) => {
    setSelectedVideo(url);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          > 
            Ukázky mé práce
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.title} item={item} index={index} onCardClick={openModal} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && <PortfolioModal videoUrl={selectedVideo} closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
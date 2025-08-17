import React, { useState, useEffect, useRef } from 'react';
import { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
  {
    client: 'Client A - Gaming Montage',
    description: 'Rychlý a dynamický sestřih herních momentů se zaměřením na synchronizaci s hudbou.',
    youtubeEmbedId: '_X0m4k5n9Yw',
  },
  {
    client: 'Client B - Short Form Ad',
    description: 'Krátká, poutavá reklama pro sociální sítě, optimalizovaná pro maximální engagement.',
    youtubeEmbedId: 'Lq6R41A1i2g',
  },
  {
    client: 'Client C - Product Showcase',
    description: 'Elegantní video prezentující produkt s důrazem na detail a klíčové vlastnosti.',
    youtubeEmbedId: 'wJzSK41q4t8',
  },
];

const AnimateOnScroll: React.FC<{ children: React.ReactNode; delay?: number, className?: string }> = ({ children, delay = 0, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`${className} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const VideoCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30 h-full flex flex-col">
    <div className="relative w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${item.youtubeEmbedId}`}
        title={`YouTube video player for ${item.client}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-white">{item.client}</h3>
      <p className="mt-2 text-gray-400">{item.description}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <AnimateOnScroll className="text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ukázka mé práce</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Zde jsou některé z projektů, na kterých jsem pracoval. Od dynamických herních sestřihů po poutavé reklamy pro sociální sítě.
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <AnimateOnScroll key={item.youtubeEmbedId} delay={index * 150}>
            <VideoCard item={item} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

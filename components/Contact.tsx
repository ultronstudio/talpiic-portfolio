import React, { useState, useEffect, useRef } from 'react';
import { MailIcon, DiscordIcon } from '../constants';

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

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
        <AnimateOnScroll>
            <h2 className="text-4xl font-extrabold mb-4">Pojďme tvořit!</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                Máš projekt nebo nápad? Napiš mi a společně vytvoříme něco úžasného.
            </p>
        </AnimateOnScroll>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        
        <AnimateOnScroll delay={150} className="w-full md:w-auto">
            <a href="mailto:ahoj@talpiic.com" className="group block">
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
                    <MailIcon className="w-12 h-12 mx-auto text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    <h3 className="text-2xl font-bold mt-4">E-mail</h3>
                    <p className="text-gray-400 mt-2 group-hover:text-white transition-colors">ahoj@talpiic.com</p>
                </div>
            </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300} className="w-full md:w-auto">
            <div className="group">
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                    <DiscordIcon className="w-12 h-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <h3 className="text-2xl font-bold mt-4">Discord</h3>
                    <p className="text-gray-400 mt-2 group-hover:text-white transition-colors">talpiic</p>
                </div>
            </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default Contact;

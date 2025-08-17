import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    name: 'Klient 1',
    role: 'Streamer',
    text: '“Naprosto neuvěřitelná práce! Video mělo obrovský úspěch a engagement na mých sociálních sítích vylétl raketově nahoru. Rychlá komunikace a profesionální přístup.”',
  },
  {
    name: 'Klient 2',
    role: 'Marketing Manager',
    text: '“Spolupráce byla skvělá. Talpiic přesně pochopil naši vizi a dodal video, které překonalo naše očekávání. Určitě se na něj znovu obrátíme.”',
  },
  {
    name: 'Klient 3',
    role: 'Content Creator',
    text: '“Hledal jsem někoho, kdo dá mým videím moderní a cool střih, a našel jsem to. Výsledky mluví samy za sebe, doporučuji všem!”',
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

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 relative h-full transform transition-transform duration-300 hover:-translate-y-2">
        <svg className="absolute top-6 left-6 w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h2.667v-13.333zM25.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h2.667v-13.333z"></path>
        </svg>
        <p className="relative text-gray-300 mt-12">{testimonial.text}</p>
        <div className="mt-6">
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-sm text-indigo-400">{testimonial.role}</p>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <AnimateOnScroll className="text-center">
        <h2 className="text-4xl font-extrabold text-center mb-4">Co říkají klienti</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Spokojenost mých klientů je pro mě prioritou. Zde je pár slov o naší spolupráci.
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <AnimateOnScroll key={index} delay={index * 150}>
            <TestimonialCard testimonial={testimonial} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

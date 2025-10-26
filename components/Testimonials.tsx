
import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from './Icons';

const testimonials = [
  {
    name: 'Creator A',
    feedback: 'TALPIC transformed my raw footage into a masterpiece. The engagement on my channel has skyrocketed!',
    handle: '@creatorA',
  },
  {
    name: 'Brand X',
    feedback: 'Incredibly professional and creative. The final video exceeded all our expectations and perfectly captured our brand\'s essence.',
    handle: 'Marketing Director',
  },
  {
    name: 'Influencer B',
    feedback: 'Fast, reliable, and has an amazing eye for detail. My short-form content has never looked better. Highly recommend!',
    handle: '@influencerB',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 90,
      damping: 15
    },
  }),
};

const TestimonialCard: React.FC<{ item: typeof testimonials[0]; index: number }> = ({ item, index }) => (
  <motion.div
    className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    custom={index}
  >
    <div className="text-brand-blue dark:text-accent-cyan mb-4">
      <QuoteIcon />
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-6">"{item.feedback}"</p>
    <div>
      <p className="font-bold font-heading text-lg">{item.name}</p>
      <p className="text-sm text-gray-500">{item.handle}</p>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="recenze" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Co říkají klienti
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

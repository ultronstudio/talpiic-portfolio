import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="o-mne" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/talpic-portrait/600/700" alt="TALPIC Portrait" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>
            </div>
             <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-4 border-accent-cyan/50 -z-10"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Kdo jsem?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Jsem video editor, který pomáhá klientům zaujmout už v prvních sekundách. Specializuji se jak na krátká videa, tak i na delší formáty.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mým cílem je vytvářet obsah, který nejen dobře vypadá, ale i funguje. Spolupracuji s podnikateli, značkami i tvůrci, kteří chtějí svůj obsah posunout na vyšší úroveň.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
              Ať už jde o energické sociální klipy nebo storytellingová videa pro YouTube, vždy hledám způsob, jak zachytit pozornost a proměnit ji v zážitek.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
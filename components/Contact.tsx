import React from 'react';
import { motion } from 'framer-motion';
import { EmailIcon, InstagramContactIcon } from './Icons';

const contactMethods = [
  {
    icon: <EmailIcon />,
    title: 'Email',
    value: 'ttapla.business@gmail.com',
    href: 'mailto:ttapla.business@gmail.com',
  },
  {
    icon: <InstagramContactIcon />,
    title: 'Instagram',
    value: '@talpiic',
    href: 'https://www.instagram.com/talpiic',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
    },
  }),
};

const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pojďme tvořit!
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Chceš se zviditelnit? Napiš mi a domluvíme se!
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-8 w-full md:w-80 h-48 flex flex-col justify-center items-center bg-white dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-brand-blue dark:text-accent-cyan mb-4">{method.icon}</div>
              <h3 className="font-heading text-2xl font-bold">{method.title}</h3>
              <p className="text-gray-500">{method.value}</p>

              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-accent-cyan/10 rounded-full group-hover:scale-[8] transition-transform duration-700 ease-in-out -z-0"/>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
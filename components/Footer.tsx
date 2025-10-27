import React from 'react';
import { InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-dark-card">
      <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TALPIC. Všechna práva vyhrazena.
        </p>
        <p className="text-xs mt-2">
          Web vytvořil <a href="https://petrvurm.cz/?utm_source=talpic_portfolio&utm_medium=website&utm_campaign=footer_credit" className="underline hover:text-brand-blue dark:hover:text-accent-cyan">Petr Vurm</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
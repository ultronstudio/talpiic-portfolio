
import React from 'react';
import { InstagramIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Talpiic. Všechna práva vyhrazena.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Web vytvořil <a href="https://petrvurm.cz/?utm_source=talpiic_portfolio&utm_medium=web&utm_campaign=footer_credit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">Petr Vurm</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
            <a 
                href="https://www.instagram.com/talpiic/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="Instagram"
            >
                <InstagramIcon className="w-6 h-6" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#recenze', label: 'Recenze' },
    { href: '#o-mne', label: 'O mně' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-heading text-xl font-bold text-brand-blue dark:text-accent-cyan">
          TALPIC
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium hover:text-brand-blue dark:hover:text-accent-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center">
           <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

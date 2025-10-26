
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-soft-bg dark:bg-dark-bg text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Header />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

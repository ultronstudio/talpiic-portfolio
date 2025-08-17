import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative flex flex-col items-center justify-center h-screen text-center px-6 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 z-0 animate-gradient-move"></div>
        <div className="absolute inset-0 backdrop-blur-sm z-10"></div>
        
        <div className="relative z-20">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                TALPIC
                </span>
            </h1>
            <p className={`mt-4 text-lg md:text-xl text-gray-300 transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                🎥 Video editor | Short & Long Form
            </p>
            <p className={`mt-6 max-w-2xl mx-auto text-md md:text-lg text-gray-400 transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                🚀 1+ rok zkušeností, silné výsledky <br className="hidden sm:block" />
                💡 Pomůžu ti zaujmout víc lidí
            </p>
            <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <a href="#portfolio" className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                    Moje práce
                </a>
                <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300">
                    Kontakt
                </a>
            </div>
        </div>
        
        <nav className="absolute top-0 left-0 right-0 p-6 z-20">
            <div className="container mx-auto flex justify-center md:justify-end">
                <div className="flex items-center space-x-6 text-gray-300">
                    <a href="#portfolio" className="hover:text-indigo-400 transition-colors duration-300">Portfolio</a>
                    <a href="#testimonials" className="hover:text-indigo-400 transition-colors duration-300">Recenze</a>
                    <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">O mně</a>
                    <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Kontakt</a>
                </div>
            </div>
        </nav>

        <a href="#portfolio" aria-label="Scroll down" className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center items-start p-1 animate-bounce-slow">
                <div className="w-1 h-2 rounded-full bg-gray-400/80"></div>
            </div>
        </a>
    </header>
  );
};

export default Header;

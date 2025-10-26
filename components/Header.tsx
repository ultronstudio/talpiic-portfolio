import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MouseIcon } from './Icons';

// A lightweight particle component
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-accent-cyan/20 dark:bg-brand-blue/30"
    style={style}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />
);

const ParticlesBackground: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
    const particles = [
        { size: 150, top: '10%', left: '15%', speed: 0.1 },
        { size: 250, top: '25%', left: '70%', speed: 0.15 },
        { size: 100, top: '70%', left: '10%', speed: 0.08 },
        { size: 200, top: '80%', left: '85%', speed: 0.12 },
        { size: 120, top: '50%', left: '40%', speed: 0.05 },
    ];

    const offsetX = (mousePos.x / window.innerWidth - 0.5) * 50;
    const offsetY = (mousePos.y / window.innerHeight - 0.5) * 50;

    return (
        <motion.div 
            className="absolute inset-0 z-0 overflow-hidden"
            animate={{ x: -offsetX, y: -offsetY }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            {particles.map((p, i) => (
                <Particle
                    key={i}
                    style={{
                        width: p.size,
                        height: p.size,
                        top: p.top,
                        left: p.left,
                        filter: 'blur(80px)',
                    }}
                />
            ))}
        </motion.div>
    );
};

const logoText = "TALPIC";

const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const logoLetterVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};


const Header: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        
        // Stagger the animation of elements appearing after the logo
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15 + 1.0, type: 'spring', stiffness: 120 },
        }));

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [controls]);

  return (
    <header className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-soft-bg dark:bg-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-bg via-transparent to-soft-bg dark:from-dark-bg dark:via-transparent dark:to-dark-bg z-10"/>
        <ParticlesBackground mousePos={mousePosition} />
      
        <div className="relative z-20 flex flex-col items-center">
            <motion.h1
                className="font-heading text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-accent-cyan bg-[length:200%_auto] animate-gradient-x"
                style={{ filter: 'drop-shadow(0 0 15px rgba(0, 183, 239, 0.3))' }}
                variants={logoContainerVariants}
                initial="hidden"
                animate="visible"
            >
              {logoText.split('').map((char, index) => (
                <motion.span key={index} variants={logoLetterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p custom={1} initial={{ opacity: 0, y: 20 }} animate={controls} className="mt-4 text-lg md:text-xl font-medium tracking-wider">
                🎥 Video editor | Short & Long Form
            </motion.p>
            <motion.p custom={2} initial={{ opacity: 0, y: 20 }} animate={controls} className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                🚀 1+ rok zkušeností, silné výsledky · 💡 Pomůžu ti zaujmout víc lidí
            </motion.p>

            <motion.div custom={3} initial={{ opacity: 0, y: 20 }} animate={controls} className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#portfolio" className="relative group inline-block px-8 py-3 text-white font-bold rounded-lg overflow-hidden bg-gradient-to-r from-brand-blue to-accent-cyan shadow-lg transition-transform duration-300 hover:scale-105">
                    Moje práce
                </a>
                <a href="#kontakt" className="relative group inline-block px-8 py-3 font-bold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-brand-blue dark:hover:border-accent-cyan transition-all duration-300 hover:shadow-lg">
                    Kontakt
                     <span className="absolute inset-0 border-0 group-hover:border-2 rounded-lg border-transparent group-hover:border-accent-cyan transition-all duration-300"></span>
                </a>
            </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <MouseIcon />
        </div>
    </header>
  );
};

export default Header;
import React from 'react';

export const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

export const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export const MouseIcon = () => (
    <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full relative">
        <div className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></div>
    </div>
);

export const PlayIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 10.5566V37.4434C16 39.3997 18.2393 40.5517 19.9224 39.4211L40.2227 25.9777C41.7612 24.9312 41.7612 23.0688 40.2227 22.0223L19.9224 8.57888C18.2393 7.44826 16 8.60031 16 10.5566Z" fill="white"/>
    </svg>
);

export const QuoteIcon = () => (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32H12L16 16V0H0V32ZM24 32H36L40 16V0H24V32Z"/>
    </svg>
);

export const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

export const DiscordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.54 5.25c-.24-.13-.49-.24-.75-.33A12.31 12.31 0 0012 4.5c-2.31 0-4.5.64-6.44 1.77a.64.64 0 00-.15.09c-.26.09-.51.2-.75.33a11.23 11.23 0 00-2.06 9.38c.11.45.28.89.49 1.31a.57.57 0 00.5.41h1.7a.58.58 0 00.55-.35c.16-.39.3-1 .4-1.4a.5.5 0 00-.09-.46c-.24-.26-.45-.55-.63-.85a.55.55 0 01.12-.76c.15-.1.31-.2.45-.31.15-.1.3-.2.46-.29a.6.6 0 01.59.03c.87.52 1.83.93 2.89 1.22a.57.57 0 00.6-.23c.31-.63.56-1.28.74-1.95a12.68 12.68 0 00-6.42-3.13.56.56 0 01-.48-.65c.03-.21.14-.4.3-.55a10.92 10.92 0 0113.67 0c.16.15.27.34.3.55a.56.56 0 01-.48.65 13.15 13.15 0 00-6.42 3.13c.18.67.43 1.32.74 1.95a.57.57 0 00.6.23c1.06-.29 2-.7 2.89-1.22a.6.6 0 01.59-.03c.16.09.31.19.46.29.14.11.3.21.45.31a.55.55 0 01.12.76c-.18.3-.39.59-.63.85a.5.5 0 00-.09.46c.1.4.24 1 .4 1.4a.58.58 0 00.55.35h1.7a.57.57 0 00.5-.41c.21-.42.38-.86.49-1.31a11.3 11.3 0 00-2.06-9.38zM10 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);

export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-brand-blue dark:group-hover:stroke-accent-cyan transition-colors">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const InstagramContactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);
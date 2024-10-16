import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import ShootingStarsBackground from '../ShootingStarsBackground';
import HomePage from '../pages/HomePage';
import ProjetsPage from '../pages/ProjetsPage';
import AProposPage from '../pages/AProposPage';
import ContactPage from '../pages/ContactPage';
import { Sun, Moon } from 'lucide-react';

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  in: {
    x: 0,
    opacity: 1
  },
  out: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const Layout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [direction, setDirection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changePage = (newPage: string) => {
    const pages = ['home', 'projets', 'a-propos', 'contact'];
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = pages.indexOf(newPage);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentPage(newPage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage isDarkMode={isDarkMode} />;
      case 'projets':
        return <ProjetsPage />;
      case 'a-propos':
        return <AProposPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative transition-colors duration-300">
      <ShootingStarsBackground isDarkMode={isDarkMode} />
      <div className={`flex-grow flex flex-col ${isDarkMode ? 'bg-gradient-to-b from-[#1b2735] to-[#090a0f] text-white' : 'bg-gradient-to-b from-[#f0f8ff] to-[#e6f3ff] text-gray-800'}`}>
        <header className='p-6 relative z-10'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div onClick={() => changePage('home')} className="cursor-pointer">
              <Logo isDarkMode={isDarkMode} className="mb-4 sm:mb-0" />
            </div>
            <nav className='w-full max-w-4xl'>
              <ul className='flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6'>
                <li className="my-1">
                  <a onClick={() => changePage('home')} className={`${isDarkMode ? 'text-[#FFBF00] hover:text-[#FFD700]' : 'text-[#1E90FF] hover:text-[#4169E1]'} transition-colors cursor-pointer`}>
                    Accueil
                  </a>
                </li>
                <li className="my-1">
                  <a onClick={() => changePage('projets')} className={`${isDarkMode ? 'text-[#FFBF00] hover:text-[#FFD700]' : 'text-[#1E90FF] hover:text-[#4169E1]'} transition-colors cursor-pointer`}>
                    Projets
                  </a>
                </li>
                <li className="my-1">
                  <a onClick={() => changePage('a-propos')} className={`${isDarkMode ? 'text-[#FFBF00] hover:text-[#FFD700]' : 'text-[#1E90FF] hover:text-[#4169E1]'} transition-colors cursor-pointer`}>
                    À propos
                  </a>
                </li>
                <li className="my-1">
                  <a onClick={() => changePage('contact')} className={`${isDarkMode ? 'text-[#FFBF00] hover:text-[#FFD700]' : 'text-[#1E90FF] hover:text-[#4169E1]'} transition-colors cursor-pointer`}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
              className="w-full h-full absolute"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className={`p-6 text-center ${isDarkMode ? 'text-[#FFBF00]' : 'text-[#1E90FF]'} text-sm relative z-10`}>
          {new Date().getFullYear()} Le Signor Hugo. 
        </footer>
      </div>

      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-4 left-4 p-2 rounded-full ${isDarkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'} transition-colors duration-300 z-20`}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default Layout;
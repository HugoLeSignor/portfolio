import React, { useState, useEffect } from 'react';

interface HomePageProps {
  isDarkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isDarkMode }) => {
  const [text, setText] = useState('');
  const fullText = 'Développeur Web';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-6'>
      <div className='text-center -mt-16'> {/* Ajout de la classe -mt-16 ici */}
        <h2 className={`text-4xl sm:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'} tracking-tight flex justify-center items-center`}>
          <span className="inline-block min-w-[300px] text-center">
            {text}
            <span className={`animate-pulse ${isDarkMode ? 'text-[#FFBF00]' : 'text-[#1E90FF]'}`}>|</span>
          </span>
        </h2>
        <p className={`text-xl max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-light leading-relaxed`}>
          Bienvenue dans mon Portfolio. Explorez mes projets et découvrez
          comment je peux donner vie à vos idées.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
import React, { useEffect, useState } from 'react';


interface ShootingStarsBackgroundProps {
  isDarkMode: boolean;
}

const ShootingStarsBackground: React.FC<ShootingStarsBackgroundProps> = React.memo(({ isDarkMode }) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const starColor = isDarkMode ? 'rgba(255, 191, 0, 1)' : 'rgba(30, 144, 255, 1)';
  const backgroundFrom = isDarkMode ? '#1b2735' : '#f0f8ff';
  const backgroundTo = isDarkMode ? '#090a0f' : '#e6f3ff';

  useEffect(() => {
    const newStars = Array.from({ length: 20 }).map((_, index) => (
      <div 
        key={index} 
        className={`shooting_star star-${index + 1}`} 
        style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 5000}ms`,
          background: `linear-gradient(-45deg, ${starColor}, ${starColor.replace('1)', '0)')})`, // Set color dynamically
        }}
      />
    ));
    setStars(newStars);
  }, [starColor]); // Add starColor as a dependency

  return (
    <div 
      className="fixed inset-0 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${backgroundFrom}, ${backgroundTo})`,
        transition: 'background-color 0.3s',
      }}
    >
      <div className="night absolute inset-0">
        {stars}
      </div>
    </div>
  );
});

ShootingStarsBackground.displayName = 'ShootingStarsBackground';

export default ShootingStarsBackground;

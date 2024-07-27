import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const xPercent = clientX / width;
      const yPercent = clientY / height;

      const startColor = '#eea7c7';
      const endColor = '#ffccff';
      const gradientAngle = Math.round(360 * xPercent);
      const gradientStrength = Math.round(100 * yPercent);

      const header = document.querySelector('.header');
      header.style.background = `linear-gradient(${gradientAngle}deg, ${startColor}, ${endColor} ${gradientStrength}%)`;

      const footer = document.querySelector('.footer');
      footer.style.background = `linear-gradient(${gradientAngle}deg, ${startColor}, ${endColor} ${gradientStrength}%)`;
      
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="header">
      <img src="/poodle_cartoon.webp" alt="French Poodle" className="poodle-image-left" />
      <h1>Galerie de Chiens</h1>
      <img src="/poodle_cartoon.webp" alt="French Poodle" className="poodle-image-right" />
    </div>
  );
};

export default Header;




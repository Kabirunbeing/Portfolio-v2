import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Arrow = () => {
  const arrowRef = useRef(null);
  const [direction, setDirection] = useState('down');

  // Effect to handle the glow animation
  useEffect(() => {
    gsap.to(arrowRef.current, {
      boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.8)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  }, []);

  // Handle the arrow click
  const handleClick = () => {
    if (direction === 'down') {
      // Scroll down to the bottom of the page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      // Scroll up to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Animate arrow on click
    gsap.to(arrowRef.current, {
      y: direction === 'up' ? -10 : 10,
      repeat: 1,
      yoyo: true,
      duration: 0.2,
    });
  };

  // Update the direction based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Determine if the user is near the top or bottom of the page
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      // If we're near the bottom, switch to 'up' direction
      if (scrollPosition + windowHeight >= pageHeight - 10) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={arrowRef}
      onClick={handleClick}
      className="fixed z-50 bottom-8 right-8 w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 cursor-pointer flex justify-center items-center transition-transform duration-300 transform hover:scale-110"
      style={{
        boxShadow: '0px 0px 10px rgba(0, 255, 255, 0.5)',
        backdropFilter: 'blur(4px)',
        transform: `rotate(${direction === 'up' ? '0deg' : '180deg'})`, // Rotate the arrow based on direction
      }}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
    </div>
  );
};

export default Arrow;

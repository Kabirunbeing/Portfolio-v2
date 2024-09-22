import React, { useState, useEffect } from 'react';
import kabeerImage from '../assets/kabeer.jpeg'; // Adjust the path based on your folder structure

const HomePage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const description = "Hi, I'm Kabeer, a self-taught developer who's been learning web development for the last 1.5 years. I'm passionate about React and full-stack development, constantly looking for opportunities to refine my skills and build meaningful projects. Currently seeking job roles to expand my experience and contribute to exciting projects.";

  useEffect(() => {
    if (index < description.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + description[index]);
        setIndex(index + 1);
      }, 30); // Faster typing effect
      return () => clearTimeout(timeout);
    }
  }, [index, description]);

  return (
    <div 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen bg-black p-6 sm:p-8 md:p-12 lg:p-16"
      style={{ paddingTop: '6rem', overflowY: 'auto' }}  // Added padding for the navbar and scrollable content
    >
      {/* Image Section */}
      <div className="relative mb-8 group">
        <img
          src={kabeerImage}  // Real image from assets
          alt="Kabeer"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-cyan-500 shadow-2xl blur-sm group-hover:blur-md transition-all duration-300"
        />
        {/* Message displayed on hover */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">It's confidential</p>
        </div>
      </div>

      {/* Typing Effect Section */}
      <div className="text-cyan-400 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight relative">
        <p className="inline-block">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.03}s` }} // Faster fade-in delay for a more responsive effect
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      <style jsx>{`
        /* Typing effect fade-in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

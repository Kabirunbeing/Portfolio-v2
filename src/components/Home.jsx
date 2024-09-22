import React, { useState, useEffect } from 'react';
import kabeerImage from '../assets/kabeer.jpeg'; // Adjust the path based on your folder structure

const HomePage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const description = "Hi, I'm Kabeer, a self-taught developer passionate about React and full-stack development. I'm constantly refining my skills and building meaningful projects while seeking job roles to contribute to exciting opportunities.";

  useEffect(() => {
    if (index < description.length) {
      const timeout = setTimeout(() => {
        setText(description.slice(0, index + 1));
        setIndex(index + 1);
      }, 20); // Faster typing effect
      return () => clearTimeout(timeout);
    }
  }, [index, description]);

  return (
    <div 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen bg-black p-6 sm:p-8 md:p-12 lg:p-16"
      style={{ paddingTop: '10rem', overflowY: 'auto' }}  // Added more padding to account for navbar height
    >
      {/* Image Section */}
      <div className="relative mb-8 group">
        <img
          src={kabeerImage}
          alt="Kabeer"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-cyan-500 shadow-2xl blur-sm group-hover:blur-md transition-all duration-300"
        />
        {/* Message displayed on hover */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">It's confidential</p>
        </div>
      </div>

      {/* Typing Effect Section */}
      <div className="text-cyan-400 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide relative">
        <p className="inline-block">
          {text}
        </p>
      </div>

      <style jsx>{`
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

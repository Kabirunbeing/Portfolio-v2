import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  
  const description = "Hi, I'm Kabeer, a passionate developer focusing on React and full-stack development.";

  useEffect(() => {
    if (index < description.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + description[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, description]);

  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen bg-black p-6 sm:p-8 md:p-12 lg:p-16">
      {/* Image Section */}
      <div className="mb-8">
        <img
          src="https://picsum.photos/200"  // Random placeholder image
          alt="Your Profile"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-cyan-500 shadow-2xl"
        />
      </div>

      {/* Typing Effect Section */}
      <div className="text-cyan-400 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        <p className="inline-block">
          {text}
          <span className="animate-pulse">|</span> {/* Blinking cursor */}
        </p>
      </div>
    </div>
  );
};

export default HomePage;

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
    <div id="home" className="flex flex-col items-center justify-center min-h-screen bg-black p-4 sm:p-8">
      {/* Image Section */}
      <div className="mb-8">
        <img
          src="https://picsum.photos/200"  // Random placeholder image
          alt="Your Profile"
          className="w-48 h-48 rounded-full shadow-lg border-4 border-cyan-400"
        />
      </div>

      {/* Typing Effect Section */}
      <div className="text-cyan-400 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        <p className="text-cyan-400">
          {text}
          <span className="animate-pulse">|</span> {/* Blinking cursor */}
        </p>
      </div>
    </div>
  );
};

export default HomePage;

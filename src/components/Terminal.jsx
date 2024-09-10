import React, { useState, useEffect } from 'react';

const TerminalTypingEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Terminal');
  const [isInstalling, setIsInstalling] = useState(false); // Track installation status
  const [installMessage, setInstallMessage] = useState(''); // Hold the install message
  const [portfolioInitialized, setPortfolioInitialized] = useState(false); // Track portfolio initialization

  const message = 'npm run Kabeer';

  const fakePackages = [
    'Installing package @kabeer/core...',
    'Installing package react-awesome-library...',
    'Installing package gsap for animations...',
    'Installing package sass-loader...',
    'Installing package axios...',
    'Installing package react-router-dom...',
    'Installing package redux...',
    'Installing package react-redux...',
    'Installing package tailwindcss...',
    'Installing package lodash...',
    'Installing package moment...',
    'Installing package @babel/core...',
    'Installing package webpack...',
    'Installing package react-icons...',
    'Installing package eslint...'
  ];

  useEffect(() => {
    if (index < message.length && activeTab === 'Terminal' && !isInstalling) {
      const timeout = setTimeout(() => {
        setText(text + message[index]);
        setIndex(index + 1);
      }, 110); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text, activeTab, isInstalling]);

  // Function to simulate installation steps
  const handleInstallation = () => {
    if (!isInstalling) {
      setIsInstalling(true);
      let step = 0;
      const installInterval = setInterval(() => {
        if (step < fakePackages.length) {
          setInstallMessage(fakePackages[step]);
          step++;
        } else {
          clearInterval(installInterval);
          setTimeout(() => {
            setInstallMessage('Portfolio is being initialized...');
            setTimeout(() => {
              setInstallMessage('Portfolio has been initialized');
              setPortfolioInitialized(true);
            }, 2000); // Simulate 2 seconds for portfolio initialization
          }, 1000); // Short delay before showing portfolio initialization
        }
      }, 200); // Delay between each package installation step
    }
  };

  // Handle terminal click or Enter key press
  const handleInteraction = () => {
    if (!isInstalling) {
      handleInstallation();
    }
  };

  // Add event listener for Enter key press
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleInteraction();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isInstalling]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 sm:p-8" onClick={handleInteraction}>
      <div className="text-green-400 p-4 rounded-lg shadow-lg max-w-3xl w-full">
        {/* VS Code-like Terminal Header */}
        <div className="flex items-center justify-between bg-[#1e1e1e] px-3 py-2 rounded-t-lg">
          {/* Window Controls (Mac-style) */}
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          {/* Title */}
          <div className="text-sm text-gray-400">Terminal</div>
          <div></div>
        </div>

        {/* Tab Navigation (Problems, Output, Debug Console, Terminal, Ports) */}
        <div className="bg-[#252526] text-gray-400 px-3 py-2 flex space-x-4 overflow-auto">
          {['Problems', 'Output', 'Debug Console', 'Terminal', 'Ports'].map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab ? 'text-white border-b-2 border-blue-500' : 'hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Terminal Body (only show content when 'Terminal' tab is active) */}
        <div className="bg-[#1e1e1e] p-3 rounded-b-lg h-48 overflow-auto sm:h-64 md:h-72"> {/* Increased height for larger screens */}
          {activeTab === 'Terminal' ? (
            <p className="text-green-400 text-base md:text-lg lg:text-xl">
              {isInstalling ? (
                <span>{installMessage}</span>
              ) : portfolioInitialized ? (
                <span>Portfolio has been initialized</span>
              ) : (
                <>
                  <span className="text-blue-400">kabeer@portfolio</span>:~$ {text}
                  <span className="animate-pulse">|</span> {/* Blinking cursor */}
                </>
              )}
            </p>
          ) : (
            <p className="text-gray-500">No content in {activeTab}</p> // Placeholder for other tabs
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalTypingEffect;

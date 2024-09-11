import React, { useState, useEffect } from 'react';

const TerminalTypingEffect = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Terminal');
  const [isInstalling, setIsInstalling] = useState(false);
  const [installMessage, setInstallMessage] = useState('');
  const [portfolioInitialized, setPortfolioInitialized] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [showNewTerminal, setShowNewTerminal] = useState(false); // New terminal toggle

  const message = 'npm run Kabeer';

  const fakePackages = [
    { name: 'Installing package @kabeer/core...', delay: 200 },
    { name: 'Installing package react-awesome-library...', delay: 400 },
    { name: 'Installing package gsap for animations...', delay: 300 },
    { name: 'Installing package sass-loader...', delay: 150 },
    { name: 'Installing package axios...', delay: 350 },
    { name: 'Installing package react-router-dom...', delay: 250 },
    { name: 'Installing package redux...', delay: 300 },
    { name: 'Installing package react-redux...', delay: 200 },
    { name: 'Installing package tailwindcss...', delay: 400 },
    { name: 'Installing package lodash...', delay: 150 },
    { name: 'Installing package moment...', delay: 250 },
    { name: 'Installing package @babel/core...', delay: 300 },
    { name: 'Installing package webpack...', delay: 200 },
    { name: 'Installing package react-icons...', delay: 350 },
    { name: 'Installing package eslint...', delay: 150 },
    { name: 'Installing package @kabeer/portfolio-tools...', delay: 400 },
    { name: 'Installing package react-animation-tools...', delay: 300 },
    { name: 'Installing package node-fetch...', delay: 250 },
    { name: 'Installing package styled-components...', delay: 350 },
    { name: 'Installing package framer-motion...', delay: 250 },
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

  const handleInstallation = () => {
    if (!isInstalling) {
      setIsInstalling(true);
      let step = 0;
      const installInterval = setInterval(() => {
        if (step < fakePackages.length) {
          const currentPackage = fakePackages[step];
          const timestamp = new Date().toLocaleTimeString();
          setInstallMessage(`[${timestamp}] ${currentPackage.name}`);
          setCommandHistory((prevHistory) => [...prevHistory, `[${timestamp}] ${currentPackage.name}`]);
          step++;
        } else {
          clearInterval(installInterval);
          setTimeout(() => {
            setInstallMessage('');
            setShowNewTerminal(true); // Show new terminal after installation
            setTimeout(() => {
              const timestamp = new Date().toLocaleTimeString();
              setCommandHistory((prevHistory) => [
                ...prevHistory,
                `\n[${timestamp}] Portfolio is being initialized...`,
              ]);
              setTimeout(() => {
                const newTimestamp = new Date().toLocaleTimeString();
                setCommandHistory((prevHistory) => [
                  ...prevHistory,
                  `[${newTimestamp}] Portfolio has been initialized`,
                ]);
                setPortfolioInitialized(true);
                if (onComplete) {
                  onComplete(); // Show portfolio
                }
              }, 2000); // Simulate 2 seconds for portfolio initialization
            }, 500); // Delay before showing portfolio initialization
          }, 1000);
        }
      }, fakePackages[step]?.delay || 200);
    }
  };

  const handleInteraction = () => {
    if (!isInstalling) {
      handleInstallation();
    }
  };

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
    <div
      className="flex items-center justify-center min-h-screen bg-black p-4 sm:p-8"
      onClick={handleInteraction}
    >
      <div className="text-green-400 p-4 rounded-lg shadow-lg max-w-3xl w-full">
        {/* VS Code-like Terminal Header */}
        <div className="flex items-center justify-between bg-[#1e1e1e] px-3 py-2 rounded-t-lg">
          {/* Window Controls */}
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          {/* Title */}
          <div className="text-sm text-gray-400">Terminal</div>
          <div></div>
        </div>

        {/* Tab Navigation */}
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

        {/* Terminal Body */}
        <div className="bg-[#1e1e1e] p-3 rounded-b-lg h-48 overflow-auto sm:h-64 md:h-72 lg:h-96">
          {activeTab === 'Terminal' ? (
            <div className="text-green-400 text-sm md:text-base lg:text-lg">
              {showNewTerminal ? (
                <>
                  {commandHistory.map((cmd, idx) => (
                    <p key={idx}>{cmd}</p>
                  ))}
                  {portfolioInitialized ? (
                    <p>Portfolio has been initialized</p>
                  ) : (
                    <p>[{new Date().toLocaleTimeString()}] Portfolio is being initialized...</p>
                  )}
                </>
              ) : (
                <>
                  {commandHistory.map((cmd, idx) => (
                    <p key={idx}>{cmd}</p>
                  ))}
                  {isInstalling ? (
                    <p>{installMessage}</p>
                  ) : (
                    <>
                      <span className="text-blue-400">kabeer@portfolio</span>:~$ {text}
                      <span className="animate-pulse">|</span> {/* Blinking cursor */}
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <p className="text-gray-500">No content in {activeTab}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalTypingEffect;

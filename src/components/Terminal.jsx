import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const TerminalTypingEffect = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Terminal');
  const [isInstalling, setIsInstalling] = useState(false);
  const [installMessage, setInstallMessage] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [showNewTerminal, setShowNewTerminal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const message = 'npm run Kabeer';

  const fakePackages = [
    { name: 'Installing react...', delay: 200 },
    { name: 'Installing next...', delay: 300 },
    { name: 'Installing tailwindcss...', delay: 400 },
    { name: 'Installing drizzle...', delay: 300 },
    { name: 'Installing sqlite3...', delay: 400 },
    { name: 'Installing react-dom...', delay: 300 },
    { name: 'Installing gsap...', delay: 500 },
    { name: 'Installing axios...', delay: 300 },
    { name: 'Installing framer-motion...', delay: 400 },
    { name: 'Installing zustand...', delay: 300 },
    { name: 'Installing lodash...', delay: 200 },
    { name: 'fetching portfolio...', delay: 200 },
  ];

  useEffect(() => {
    if (index < message.length && activeTab === 'Terminal' && !isInstalling) {
      const timeout = setTimeout(() => {
        setText(text + message[index]);
        setIndex(index + 1);
      }, 110);
      return () => clearTimeout(timeout);
    }
  }, [index, text, activeTab, isInstalling]);

  const handleInstallation = () => {
    if (activeTab === 'Terminal' && !isInstalling) {
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
          setInstallMessage('');
          setShowNewTerminal(true);
          setCommandHistory((prevHistory) => [
            ...prevHistory,
            `[${new Date().toLocaleTimeString()}] All packages installed successfully.`,
          ]);
          setShowLoader(true);
          setTimeout(() => {
            setShowLoader(false);
            if (onComplete) {
              onComplete();
            }
          }, 2000);
        }
      }, fakePackages[step]?.delay || 200);
    }
  };

  const handleInteraction = () => {
    if (activeTab === 'Terminal') {
      handleInstallation();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && activeTab === 'Terminal') {
        handleInteraction();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isInstalling, activeTab]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-800 p-4 sm:p-8"
      onClick={handleInteraction}
    >
      <div className="text-green-200 p-4 rounded-lg shadow-lg max-w-full w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-600 px-3 py-2 rounded-t-lg shadow-md border-b border-gray-700">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="text-sm font-bold text-gray-100">Terminal</div>
          <div></div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-gray-900 text-gray-300 px-3 py-2 flex space-x-4 overflow-auto">
          {/* Render all tabs on larger screens */}
          <div className="hidden sm:flex">
            {['Problems', 'Output', 'Debug Console', 'Terminal', 'Ports'].map((tab) => (
              <button
                key={tab}
                className={`transition-colors duration-200 ${
                  activeTab === tab ? 'text-white bg-blue-600' : 'hover:bg-blue-700 hover:text-white'
                } px-2 py-1 rounded`}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab !== 'Terminal') setText('');
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Render a subset of tabs on smaller screens */}
          <div className="sm:hidden bg-gray-900 text-gray-300 px-3 py-2 flex space-x-4 overflow-auto">
            {['Terminal', 'Problems', 'Output'].map((tab) => (
              <button
                key={tab}
                className={`transition-colors duration-200 ${
                  activeTab === tab ? 'text-white bg-blue-600' : 'hover:bg-blue-700 hover:text-white'
                } px-2 py-1 rounded`}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab !== 'Terminal') setText('');
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-gray-900 p-3 rounded-b-lg h-40 sm:h-56 md:h-48 lg:h-64 xl:h-72 overflow-auto">
          {activeTab === 'Terminal' ? (
            <div className="text-green-200 text-sm md:text-base lg:text-lg space-y-1">
              {showNewTerminal ? (
                <>
                  {commandHistory.map((cmd, idx) => (
                    <p key={idx} className="leading-relaxed">{cmd}</p>
                  ))}
                </>
              ) : (
                <>
                  {commandHistory.map((cmd, idx) => (
                    <p key={idx} className="leading-relaxed">{cmd}</p>
                  ))}
                  {isInstalling ? (
                    <p>{installMessage}</p>
                  ) : (
                    <>
                      <span className="text-blue-400">kabeer@portfolio</span>:~$ {text}
                      <span className="animate-pulse">|</span>
                    </>
                  )}
                </>
              )}
              {showLoader && <Loader />} {/* Render loader based on showLoader state */}
            </div>
          ) : (
            <div className="text-gray-500">
              {activeTab === 'Problems' && <p>No issues detected.</p>}
              {activeTab === 'Output' && <p>No output to display.</p>}
              {activeTab === 'Debug Console' && <p>No debug messages.</p>}
              {activeTab === 'Ports' && <p>No ports information available.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalTypingEffect;

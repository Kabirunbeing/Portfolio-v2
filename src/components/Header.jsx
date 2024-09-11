import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const shutterRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.4,
        height: 'auto',
        opacity: 1,
        ease: 'power3.out',
        onStart: () => {
          menuRef.current.style.display = 'block';
          gsap.fromTo(shutterRef.current,
            { width: '0%', backgroundColor: 'rgba(0, 0, 0, 0)' },
            { width: '100%', backgroundColor: 'rgba(0, 0, 0, 1)', duration: 0.2, ease: 'power3.out' });
        }
      });
    } else {
      gsap.to(shutterRef.current, {
        width: '100%',
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.to(shutterRef.current, {
            width: '0%',
            duration: 0.2,
            ease: 'power3.in',
            onComplete: () => {
              gsap.to(menuRef.current, {
                duration: 0.4,
                height: 0,
                opacity: 0,
                ease: 'power3.in',
                onComplete: () => {
                  menuRef.current.style.display = 'none';
                }
              });
            }
          });
        }
      });
    }
  }, [isOpen]);

  return (
    <header className="bg-black text-white shadow-lg relative font-roboto">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Kabeer
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {['About', 'Projects', 'Contact'].map((text, index) => (
            <a
              key={index}
              href={`#${text.toLowerCase()}`}
              className="text-cyan-400 hover:text-cyan-300 transition-transform duration-300 transform hover:scale-110 relative group"
            >
              <span className="relative">
                {text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-cyan-300 focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden text-center py-6 space-y-6 bg-black border-t border-gray-800 overflow-hidden transition-all duration-300 ease-in-out relative"
        style={{ display: 'none' }}
      >
        <div
          ref={shutterRef}
          className="absolute top-0 left-0 w-full h-full bg-gray-700 z-10"
          style={{ width: '0%' }}
        ></div>
        <div className="relative z-20">
          {['About', 'Projects', 'Contact'].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase()}`}
              className="block text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-transform duration-300 transform hover:scale-110 relative group"
            >
              <span className="relative">
                {text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default AnimatedHeader;

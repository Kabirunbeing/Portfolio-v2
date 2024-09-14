import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ConnectWithMe = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX + 'px', y: clientY + 'px' });
  };

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/your-profile',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/Kabirunbeing/Portfolio-v2',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/your-profile',
      icon: <FaTwitter />,
      label: 'Twitter',
    },
    {
      href: 'mailto:kab6168@gmail.com',
      icon: <FaEnvelope />,
      label: 'Email',
    },
    {
      href: 'https://wa.me/92186112144', 
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-cyan-400 p-8 space-y-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-30 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x} ${cursorPosition.y}, rgba(0, 255, 255, 0.15), transparent 60%)`,
        }}
      ></div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400 relative group">
        Connect With Me
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-md -z-10 group-hover:opacity-30 transition-opacity duration-500"></span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cyan-300 transition-transform transform hover:text-cyan-500 cursor-pointer group"
            aria-label={label}
          >
            {icon}
            <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 transition duration-300 group-hover:opacity-50 group-hover:scale-125"></span>
          </a>
        ))}
      </div>

      <p className="text-lg sm:text-xl md:text-2xl text-center text-cyan-300 animate-pulse relative group">
        Let's collaborate and build something amazing together!
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 blur-md -z-10 group-hover:opacity-30 transition-opacity duration-500"></span>
      </p>
    </div>
  );
};

export default ConnectWithMe;

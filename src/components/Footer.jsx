import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cyan-400 py-4 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left: All rights reserved text */}
        <p className="text-center sm:text-left text-sm md:text-base">
          © {currentYear} Kabeer. All Rights Reserved.
        </p>

        {/* Right: Social links or any extra info can go here (optional) */}
        <div className="mt-4 sm:mt-0 flex gap-4 justify-center">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition duration-300 ease-in-out">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition duration-300 ease-in-out">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

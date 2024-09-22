import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cyan-400 py-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        <p
          className="text-base md:text-lg font-bold hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          © {currentYear} Kabeer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

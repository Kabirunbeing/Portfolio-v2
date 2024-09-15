import React from 'react';
import { gsap } from 'gsap';
import KabirLogo from './Kabir.png'; // Adjust the path as necessary

const AnimatedHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const shutterRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(logoRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
    );

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
            { width: '100%', backgroundColor: 'rgba(0, 0, 0, 1)', duration: 0.2, ease: 'power3.out' }
          );
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

  const menuItems = [
    { text: 'Home', id: 'home' },
    { text: 'Skills', id: 'skills' },
    { text: 'Projects', id: 'projects' },
    { text: 'Contact', id: 'contact' },
    { text: 'Get in touch', id: 'connect' }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Scroll to the target section with smooth behavior
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }

    // Close the mobile menu if open
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-lg relative font-roboto">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider flex items-center">
          <a href="/" className="transition-colors duration-300">
            <img
              src={KabirLogo}
              alt="Kabir Logo"
              className="h-12 md:h-16 transition-transform duration-300 transform hover:scale-125 hover:rotate-3 hover:shadow-xl hover:brightness-110"
              ref={logoRef}
            />
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-2xl font-bold">
          {menuItems.map(({ text, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
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
            className="relative group focus:outline-none bg-transparent"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${isOpen ? 'rotate-180 -translate-x-1.5' : ''}`}>
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'rotate-[42deg] w-2/3 delay-150' : ''}`}></div>
                <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'translate-x-10' : ''}`}></div>
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? '-rotate-[42deg] w-2/3 delay-150' : ''}`}></div>
              </div>
            </div>
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
          {menuItems.map(({ text, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className="block text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-transform duration-300 transform hover:scale-110 relative group"
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

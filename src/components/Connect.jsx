import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { gsap } from 'gsap';

const ConnectWithMe = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const socialLinksRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    // GSAP animation on component load
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out' }
    });

    tl.from(headingRef.current, { opacity: 0, y: -50 })
      .from(
        socialLinksRef.current.children,
        { opacity: 0, y: 50, stagger: 0.2 },
        "-=0.5" // Overlap animations
      )
      .from(taglineRef.current, { opacity: 0, scale: 0.9 }, "-=0.5");
  }, []);

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/your-profile',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/your-profile',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/your-profile',
      icon: <FaTwitter />,
      label: 'Twitter',
    },
    {
      href: 'mailto:your.email@example.com',
      icon: <FaEnvelope />,
      label: 'Email',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-cyan-400 p-8 space-y-8"
    >
      {/* Section Heading */}
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400"
      >
        Connect With Me
      </h2>

      {/* Social Links */}
      <div
        ref={socialLinksRef}
        className="flex space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12"
      >
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 hover:text-neon transition-transform transform hover:scale-110"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Subtle Pulse Animation */}
      <p
        ref={taglineRef}
        className="text-lg sm:text-xl md:text-2xl text-center animate-pulse text-neon"
      >
        Let's collaborate and build something amazing together!
      </p>
    </div>
  );
};

export default ConnectWithMe;

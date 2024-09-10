import React from 'react';
import { FaJs, FaReact, FaVuejs, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  {
    name: 'JavaScript (ES6+)',
    Icon: FaJs,
  },
  {
    name: 'React',
    Icon: FaReact,
  },
  {
    name: 'Vue.js',
    Icon: FaVuejs,
  },
  {
    name: 'Laravel',
    Icon: FaLaravel,
  },
  {
    name: 'PHP',
    Icon: FaPhp,
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative group flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32"
          >
            <div
              className="flex items-center justify-center text-cyan-400 text-4xl sm:text-5xl transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:rotate-45"
            >
              <skill.Icon />
            </div>
            <div
              className="absolute inset-0 bg-cyan-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-60 group-hover:scale-110"
              style={{ borderRadius: '50%' }}
            />
            <div
              className="absolute inset-0 border-4 border-cyan-400 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-125"
              style={{ borderRadius: '50%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';

const projects = [
  {
    title: 'Kabeer Portfolio',
    description: 'A responsive portfolio built using React and Tailwind CSS with modern design elements.',
    link: '#',
    image: 'https://via.placeholder.com/400',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Books App',
    description: 'built a books app using react tailwind external api.',
    link: '#',
    image: 'https://via.placeholder.com/400',
    techStack: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Jewelry web application',
    description: 'created a jewelry web application using react.js framermotion tailwind and email js',
    link: '#',
    image: 'https://via.placeholder.com/400',
    techStack: ['Laravel', 'React', 'Tailwind'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-500 mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-500">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 space-x-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-cyan-500 text-black text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-6 inline-block text-cyan-500 hover:text-white transition-colors"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

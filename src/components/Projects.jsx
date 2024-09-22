import React from 'react';

const projects = [
  {
    title: 'Kabeer Portfolio',
    description: 'A responsive portfolio built using React and Tailwind CSS with modern design elements.',
    link: 'https://example.com/portfolio', // Replace with actual link
    // image: 'https://example.com/portfolio-image.jpg', // Replace with actual image
    techStack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Books App',
    description: 'Built a books app using React, Tailwind CSS, and an external API.',
    link: 'https://example.com/books-app', // Replace with actual link
    // image: 'https://example.com/books-app-image.jpg', // Replace with actual image
    techStack: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Jewelry Web Application',
    description: 'Created a jewelry web application using React.js, Framer Motion, Tailwind CSS, and Email.js.',
    link: 'https://example.com/jewelry-web-app', // Replace with actual link
    // image: 'https://example.com/jewelry-web-app-image.jpg', // Replace with actual image
    techStack: ['Laravel', 'React', 'Tailwind'],
  },
  // New Projects
  {
    title: 'Mental Health Journal App',
    description:
      'Currently building a full-stack mental health journal application that allows users to track their emotions, thoughts, and progress using intuitive interfaces and secure data management.',
    link: '#', // Replace with actual link if available
    // image: 'https://example.com/mental-health-app-image.jpg', // Replace with actual image
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Developing a real-time chat application using WebSocket technology for instant messaging, integrated with user authentication and typing indicators.',
    link: '#', // Replace with actual link if available
    // image: 'https://example.com/chat-app-image.jpg', // Replace with actual image
    techStack: ['React', 'Socket.io', 'Node.js', 'Tailwind'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12 uppercase tracking-wide transition-transform transform hover:scale-110 hover:text-cyan-500 duration-500 ease-in-out">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                {/* Image is commented out, replace the image URL with your actual images if needed */}
                {/* 
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <a
                    href={project.link}
                    className="text-cyan-400 text-lg font-semibold hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-500 text-black text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p className="text-lg lg:text-xl">
            I am currently working on several full-stack projects, including a mental health journal app and a real-time chat application. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

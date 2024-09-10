import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Typewriter Effect Component
const TypewriterEffect = ({ message, speed = 100 }) => {
  const [text, setText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, message, speed]);

  return <p className="text-lg text-cyan-400">{text}</p>;
};

// Code Block Component
const CodeBlock = ({ code }) => (
  <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-300">
    <code>{code}</code>
  </pre>
);

const ComparisonComponent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -100 }, // Start position off the screen from the left
      {
        opacity: 1,
        x: 0, // End position at the original spot
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100px', // Trigger animation when the top of the element is 100px from the bottom of the viewport
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  const reactSnippet = `
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

export default App;
`;

  const laravelSnippet = `
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index()
    {
        return view('welcome', ['message' => 'Hello, Laravel!']);
    }
}
`;

  return (
    <div
      className="min-h-screen bg-black p-8 flex flex-col items-center"
      ref={sectionRef}
    >
      <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-full max-w-4xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
          My Passion for React and Laravel
        </h2>

        {/* Typewriter Effect */}
        <TypewriterEffect message="Why React and Laravel are My Go-To Technologies" />

        {/* Code Snippets */}
        <div className="mt-6 flex flex-col lg:flex-row gap-8">
          {/* React Code */}
          <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">React Example</h3>
            <CodeBlock code={reactSnippet} />
          </div>

          {/* Laravel Code */}
          <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Laravel Example</h3>
            <CodeBlock code={laravelSnippet} />
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-6 text-gray-400">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Why I Love React and Laravel</h3>
          <p>
            React empowers me to build dynamic and interactive user interfaces with its component-based architecture and strong ecosystem. The flexibility React offers allows for creating highly responsive web applications that provide a seamless user experience.
          </p>
          <p className="mt-4">
            Laravel, on the other hand, provides a powerful and elegant framework for backend development. Its robust features, including routing, Eloquent ORM, and Blade templating, make building scalable and maintainable applications a joy. The seamless integration with databases and easy-to-use API tools make Laravel my preferred choice for developing robust backend systems.
          </p>
          <p className="mt-4">
            Combining React with Laravel allows me to create full-stack applications with a solid frontend and a powerful backend, resulting in high-performance applications that I am proud of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonComponent;

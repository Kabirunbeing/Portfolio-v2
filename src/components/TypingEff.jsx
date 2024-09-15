import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaReact } from 'react-icons/fa'; // React icon
import { SiLaravel } from 'react-icons/si'; // Laravel icon
import "./Animation.css";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TypewriterEffect = ({ message, speed = 100 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const adjustedSpeed = window.innerWidth < 768 ? speed * 1.5 : speed;

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, adjustedSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, message, adjustedSpeed]);

  return (
    <p className="text-lg lg:text-xl font-mono text-neon-cyan text-center">{text}</p>
  );
};

const CodeBlock = ({ code, fileName }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    gsap.to(codeRef.current, {
      text: code,
      duration: 5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: codeRef.current,
        start: 'top center',
        toggleActions: 'restart none none none',
      },
    });
  }, [code]);

  return (
    <div className="relative bg-black rounded-lg shadow-lg max-w-full w-full transform transition-transform duration-500 hover:scale-105 hover:shadow-neon-cyan-glow">
      <div className="bg-[#1e1e1e] text-cyan-400 p-2 rounded-t-lg flex items-center justify-between">
        <span className="text-sm lg:text-base">{fileName}</span>
      </div>
      <pre 
        className="p-4 text-xs lg:text-sm font-mono text-white leading-tight lg:leading-normal break-words overflow-x-auto"
        ref={codeRef}
      ></pre>
    </div>
  );
};

const ComparisonComponent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100px',
          scrub: true,
        },
      }
    );
  }, []);

  const laravelAPICode = `
  public function getData() {
    return response()->json(['msg' => 'Hello from Laravel!']);
  }
  `;

  const reactCode = `
  useEffect(() => {
    fetch('/api/get-data').then(res => res.json()).then(setData);
  }, []);
  `;

  return (
    <div id="Typing" className="min-h-screen bg-black p-4 lg:p-12 flex flex-col items-center" ref={sectionRef}>
      <div className="relative w-full max-w-5xl p-6 lg:p-8 rounded-lg shadow-xl bg-black transition-transform transform hover:scale-105 hover:shadow-neon-cyan-glow">
        <h2 className="text-3xl text-white lg:text-4xl font-extrabold text-neon-cyan mb-4 lg:mb-6 text-center flex items-center justify-center gap-2">
          <FaReact className="w-12 h-12 text-white" /> {/* Increased size to w-12 h-12 */}
          <span>+</span>
          <SiLaravel className="w-12 h-12 text-white font-bold" /> {/* Increased size to w-12 h-12 */}
          <span>API Integration</span>
        
        </h2>
        <h2 className='text-white'>
        <TypewriterEffect message="Bridging the gap between front-end and back-end..." />
        </h2>
        <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg lg:text-xl font-bold text-neon-cyan mb-2 lg:mb-4">Laravel Controller</h3>
            <CodeBlock code={laravelAPICode} fileName="ApiController.php" />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-lg lg:text-xl font-bold text-neon-cyan mb-2 lg:mb-4">React Fetch</h3>
            <CodeBlock code={reactCode} fileName="FetchData.js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonComponent;

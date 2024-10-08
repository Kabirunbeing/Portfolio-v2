import React, { useState } from "react";
import ConnectWithMe from "./components/Connect";
import ContactForm from "./components/Contact";
import AnimatedHeader from "./components/Header";
import HomePage from "./components/Home";
import Skills from "./components/Skills";
// import TypeWriterEffect from "./components/TypingEff";
import TerminalTypingEffect from "./components/Terminal";
import Arrow from "./components/Arrow";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [terminalComplete, setTerminalComplete] = useState(false);

  // This function will be passed to the TerminalTypingEffect to be called when it's done
  const handleTerminalComplete = () => {
    setTerminalComplete(true); // Show the rest of the portfolio after terminal completes
  };

  return (
    <>
      {!terminalComplete && (
        <TerminalTypingEffect onComplete={handleTerminalComplete} />
      )}
      {terminalComplete && (
        <>
          <AnimatedHeader />
          <HomePage />
          <Skills />
          <Projects/>
          {/* <TypeWriterEffect /> */}
          <ContactForm />
          <ConnectWithMe />
          <Footer/>
          <Arrow/>
        </>
      )}
    </>
  );
}

export default App;

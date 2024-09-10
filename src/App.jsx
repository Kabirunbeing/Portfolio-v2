import React from "react"
import ConnectWithMe from "./components/Connect"
import ContactForm from "./components/Contact"
import AnimatedHeader from "./components/Header"
import HomePage from "./components/Home"
import Skills from "./components/Skills"
import TypeWriterEffect from "./components/TypingEff"
function App() {
  
  return (
    <>
    <AnimatedHeader/>
    <HomePage/>
    <Skills/>
    <TypeWriterEffect/>
      {/* <TerminalTypingEffect/> */}
      {/* <ConnectWithMe/> */}
      <ContactForm/>
    </>
  )
}

export default App

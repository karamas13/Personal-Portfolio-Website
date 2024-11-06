import { useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function App() {
  return (
  <div className="min-h-screen scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-stone-800 h-32 overflow-y-scroll overflow-x-hidden">
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NavBar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
          <footer className=" x-auto text-neutral-400">
                <p className="m-5 text-center">© 2024 nickkaramaroudisdev.com All rights reserved | Designed and Developed by Nick Karamaroudis</p>
          </footer>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

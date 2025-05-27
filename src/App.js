import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Education from './components/Education';
import PortfolioNavbar from './components/PortfolioNavbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <>
     
      <PortfolioNavbar />
      <Home />

      <div className="container mt-5">
        <section className="mb-5">
          <About />
        </section>
         <section className="mb-5">
          <Education />
        </section>

        <section className="mb-5">
          <Experience />
        </section>

       

        <section className="mb-5">
          <Projects />
        </section>

        <section className="mb-5">
          <Skills />
        </section>
        

        <section className="mb-5">
          <Certifications />
        </section>
        <section className="mb-5">
          <SocialLinks/>
        </section>

        <section className="mb-5">
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;

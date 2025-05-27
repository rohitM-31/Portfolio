import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'; // Icons
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';

function PortfolioNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'socials', 'contact'];

      const scrollY = window.pageYOffset;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop - 100 <= scrollY) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-3" href="#home">
          Rohit Tatayya
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fs-5 fw-semibold me-4">
           {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Socials', 'Contact'].map((item) => {
  const itemId = item.toLowerCase();
  return (
    <li className="nav-item px-2" key={item}>
      <a
        className={`nav-link ${activeSection === itemId ? 'text-primary fw-bold' : ''}`}
        href={`#${itemId}`}
      >
        {item}
      </a>
    </li>
  );
})}

          </ul>

        
         
        </div>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;

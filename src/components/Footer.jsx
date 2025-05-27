// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Rohit Tatayya</h5>
            <p>Information Technology student and Java Developer passionate about creating efficient and innovative software solutions.</p>
            <a href="https://linkedin.com/in/moka-rohit" className="text-light me-3"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/moka-rohit" className="text-light"><i className="bi bi-github"></i></a>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#experience" className="text-light text-decoration-none">Experience</a></li>
              <li><a href="#projects" className="text-light text-decoration-none">Projects</a></li>
              <li><a href="#skills" className="text-light text-decoration-none">Skills</a></li>
              <li><a href="#education" className="text-light text-decoration-none">Education</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="fw-bold">Contact Info</h6>
            <p><i className="bi bi-envelope-fill me-2"></i>21pa1a1274@vishnu.edu</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 6309728286</p>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center m-0">© 2024 Moka Rohit Tatayya. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

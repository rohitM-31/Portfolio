import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center fw-bold mb-5 text-primary">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4 border-0">
            <h5 className="fw-bold text-primary mb-4">Get in Touch</h5>

            <div className="mb-3">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <strong>Email:</strong> 21pa1a1274@vishnu.edu<br></br>
              <br></br>
              <strong>Primary Email:</strong> mokarohit31@gmail.com
            </div>

            <div className="mb-3">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong> +91 6309728286
            </div>

            <div className="mb-3">
              <i className="bi bi-linkedin text-primary me-2"></i>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/moka-rohit" target="_blank" rel="noreferrer" className="text-decoration-none">
                linkedin.com/in/moka-rohit
              </a>
            </div>

            <div>
              <i className="bi bi-github text-primary me-2"></i>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/moka-rohit" target="_blank" rel="noreferrer" className="text-decoration-none">
                github.com/moka-rohit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

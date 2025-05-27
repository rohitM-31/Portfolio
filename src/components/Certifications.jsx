import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    "NPTEL Data Structures and Algorithms using Java",
    "Certificate of Web Development in CodeWay Internship",
    "Certified Java Developer Associate (CJDA-24)"
  ];

  return (
    <section className="container my-5" id="certifications">
      <h2 className="text-center mb-4 border-bottom pb-2">Certifications</h2>
      {certs.map((cert, index) => (
        <div className="card shadow-sm p-3 mb-3" key={index}>
          <div className="d-flex align-items-center">
            <FaCertificate className="text-primary me-3" size={24} />
            <strong>{cert}</strong>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certifications;

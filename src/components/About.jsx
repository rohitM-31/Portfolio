import React from 'react';

function About() {
  return (
    <section className="container my-5 py-5 bg-light rounded shadow" id="about">
      <h2 className="text-center mb-4 text-primary border-bottom pb-2">About Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <p className="lead text-center">
            I'm Rohit Tatayya, an enthusiastic IT student with strong skills in Java and full-stack development. <br />
            I enjoy solving complex problems and writing clean, scalable code. <br />
            My passions include backend systems, cloud infrastructure, and seamless user interfaces. <br />
            I've built real-world projects using machine learning, databases, and web technologies. <br />
            I'm always excited to learn, collaborate, and create meaningful software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

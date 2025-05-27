import React from 'react';

function Experience() {
  return (
    <section className="container my-5" id="experience">
      <h2 className="text-center mb-4 border-bottom pb-2">Experience</h2>
      <div className="p-4 shadow rounded bg-white">
        <h5 className="text-primary">Java Development Intern</h5>
        <p className="text-muted mb-1"><strong>June 2024 – September 2024</strong></p>
        <ul className="mt-3">
          <li>
            Mastered core Java fundamentals and object-oriented programming (OOP) concepts, completing over 200 hours of virtual internship training and receiving a certificate of Java proficiency.
          </li>
          <li>
            Constructed a multithreaded Java application simulating a banking system, handling 500 concurrent user sessions and achieving 99.99% transaction accuracy, surpassing benchmark standards.
          </li>
          <li>
            Practiced Java syntax and debugging on 3 enterprise-level applications to fix the three biggest causes of crashes, resulting in the applications being 20% more stable as the most junior member on the team.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;

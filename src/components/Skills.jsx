import React from 'react';

const Skills = () => {
  return (
    <div className="container py-5" id="skills">
      <h2 className="text-center fw-bold mb-4">Skills</h2>
      <div className="row">

        {/* Programming Languages */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <h5 className="text-primary">Programming Languages</h5>
            <ul className="list-unstyled mt-3">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>

        {/* Libraries & Frameworks */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <h5 className="text-primary">Libraries & Frameworks</h5>
            <ul className="list-tyled mt-3">
              <li>ReactJS</li>
              <li>Flask</li>
              <li>NLTK</li>
              <li>JDBC</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>matplotlib</li>
            </ul>
          </div>
        </div>

        {/* Databases */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <h5 className="text-primary">Databases</h5>
            <ul className="list-unstyled mt-3">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Oracle</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>

        {/* Cloud & Infrastructure */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <h5 className="text-primary">Cloud & Infrastructure</h5>
            <ul className="list-unstyled mt-3">
              <li>AWS</li>
              <li>AWS  (Certified)</li>
              <li>EC2 (Elastic Compute Cloud)</li>
              <li>S3 (Simple Storage Service) </li>
             <li>VPC (Virtual Private Cloud)</li>
             <li>IAM (Identity and Access Management)</li> 
            </ul>
          </div>
        </div>

        {/* APIs & Developer Tools */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <h5 className="text-primary">APIs & Developer Tools</h5>
            <ul className="list-unstyled mt-3">
              <li>RESTful APIs</li>
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>Jupyter Notebook</li>
              <li>Eclipse</li>
              <li>Colab</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

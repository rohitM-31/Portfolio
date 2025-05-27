import React from "react";

const projects = [
  {
    icon: "bi-shield-lock",
    title: "Threat-Eye",
    subtitle: "A malware detection system utilizing machine learning algorithms.",
    points: [
      "Implemented five machine learning algorithms, including Naive Bayes and SVM, enhancing threat detection capabilities by 40% in identifying malicious code variations.",
      "Compared Decision Tree, Naive Bayes, SVM, KNN, and Logistic Regression to identify the most effective model for threat detection.",
      "Leveraged spatiotemporal analytics to correlate threat data with geographic and temporal factors, improving threat assessment speed by 30%.",
      "Established a standardized Git workflow with PR reviews and CI, reducing code defects by 20% during the project lifecycle.",
    ],
  },
  {
    icon: "bi-airplane",
    title: "Airline Reservation System",
    subtitle: "Web-based system for flight bookings and passenger management.",
    points: [
      "Engineered a reservation system using Java, HTML, CSS, and JavaScript, reducing booking processing time by 30% and improving management efficiency.",
      "Optimized a relational database with SQL, achieving 99.9% data accuracy and minimizing data loss.",
      "Designed a user-friendly interface and conducted 50+ usability tests, enhancing UX and improving booking conversions.",
      "Automated seat availability tracking using Java and SQL, processing 10,000+ booking requests per minute with 99.99% accuracy.",
    ],
  },
  {
    icon: "bi-mortarboard",
    title: "Student Management System",
    subtitle: "Java-based system for managing student records.",
    points: [
      "Developed a Student Management System with Java and JDBC connected to an Oracle database, improving access speed by 35%.",
      "Introduced a MySQL relational schema, reducing query response time by 20% for academic staff.",
      "Enhanced the database layer using prepared statements, reducing average query time by 10% and preventing SQL injection.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="container my-5" id="projects">
      <h2 className="text-center fw-bold mb-4">
        Projects
        <div className="border-bottom border-primary w-25 mx-auto mt-2"></div>
      </h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-header bg-primary text-white text-center">
                <i className={`bi ${project.icon} fs-1`}></i>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.subtitle}</p>
                <ul className="list-unstyled">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="mb-2">• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

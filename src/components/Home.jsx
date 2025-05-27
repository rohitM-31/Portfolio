import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // For custom styles like gradient background

const Home = () => {
  return (
    <section className="home-section d-flex align-items-center" id="home">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-white">
          Hello, I'm Moka Rohit Tatayya
        </h1>
        <p className="lead mt-3 text-white">
          Java Developer | Web Developer | Information Technology Student
        </p>
        
      </div>
    </section>
  );
};

export default Home;

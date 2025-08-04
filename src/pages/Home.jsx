import React from 'react';
import '../styles/Home.css';
import animation from '../assets/animation.gif';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/email.png';

const Home = () => {
  return (
    <section className="home-section">
      <div className="overlay" />
      <div className="home-content">
        <div className="left fade-in-left">
          <h1>Hello, I'm <span className="highlight">Yukesh Reddy</span> 👋</h1>
          <p className="subtitle">
            A Full Stack Developer passionate about building scalable SaaS platforms using React.js, Node.js, Express, and MSSQL.
          </p>
          <div className="buttons">
            <a href="/projects" className="btn">View Projects</a>
            <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yukesh-reddy-2bab281ab/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/yukeshreddy56" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a href="mailto:yukeshreddy.56@gmail.com">
              <img src={email} alt="Email" />
            </a>
          </div>
        </div>

        <div className="right fade-in-right">
          <img src={animation} alt="Developer Animation" className="animation" />
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm <strong>Yukesh Reddy</strong>, a passionate <strong>Full Stack Developer</strong> with over <strong>2.4 years of experience</strong> building scalable SaaS applications and internal tools using <strong>React.js, Node.js, Express.js, and MS SQL</strong>.
        </p>
        <p>
          Currently working as a Software Engineer at <strong>Tech Mahindra</strong>, I've developed multiple enterprise solutions across manufacturing and business domains. My work includes implementing responsive UIs, writing robust APIs, optimizing performance, and collaborating in agile teams.
        </p>
        <p>
          I take pride in writing clean, maintainable code and continuously improving my skills. I'm currently exploring new tools like <strong>Next.js</strong> and <strong>Tailwind CSS</strong> to expand my frontend capabilities.
        </p>
        <p>
          I’m open to exciting opportunities in full-stack development and ready to contribute to dynamic, high-impact projects.
        </p>
      </div>
    </section>
  );
};

export default About;

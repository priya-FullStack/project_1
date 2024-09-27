import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">My Portfolio</h1>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="projects.html">Projects</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        {/* Welcome Section */}
        <section id="welcome">
          <h2>Welcome to My Portfolio</h2>
          <p>
            Thank you for visiting my portfolio! Here you will find information about my background, skills, and the projects I've worked on.
          </p>
        </section>

        {/* Home Section */}
        <section id="home">
          <h2>Home</h2>
          <p>
            Welcome to my portfolio website! Here you will find information about my skills, projects, and background.
          </p>
        </section>

        {/* About Me Section */}
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience in various technologies. I enjoy solving problems and creating efficient solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <p>Some of the skills I possess include:</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are a few projects I've worked on:</p>
          <ul>
            <li>Project A - A web application for task management.</li>
            <li>Project B - An e-commerce site built with React.</li>
            <li>Project C - A personal blog created with HTML, CSS, and JavaScript.</li>
          </ul>
        </section>

        {/* Scrollable Content Area */}
        <div style={{ height: '1500px' }}>
          <p>Scroll down to see more content.</p>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Priya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Navbar;

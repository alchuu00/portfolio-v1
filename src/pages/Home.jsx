import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Alja</h2>
        <div className="prompt">
          <p>A frontend developer with experience in healthcare.</p>
          <a href="https://www.linkedin.com/in/alja-cekada/" target="_blank"><LinkedInIcon /></a>
          <a href="https://github.com/alchuu00" target="_blank"><GitHubIcon /></a>
          <a href="mailto:alja.cekada@gmail.com" target="_blank"><EmailIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>HTML, CSS, JavaScript, Python</span>
          </li>
          <li className="item">
            <h2>Frameworks</h2>
            <span>React, Flask, Bootstrap, TailwindCSS</span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>Git, NPM, VS code, PyCharm, AWS (Heroku)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

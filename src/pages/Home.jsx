import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import HeroVideo from "../assets/hero_video.mp4";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Ts from "../assets/ts.png";
import Python from "../assets/python.png";
import Sass from "../assets/sass.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import React1 from "../assets/react.png";
import Babel from "../assets/babel.png";
import Git from "../assets/git.png";
import Node from "../assets/nodejs.png";
import Npm from "../assets/npm.png";
import Webpack from "../assets/webpack.png";
import Vscode from "../assets/vscode.png";
import ProfileImg from "../assets/alja.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="video-container">
          <video src={HeroVideo} autoPlay loop muted></video>
        </div>
        <h2>Hi, my name is Alja👋</h2>
        <div className="prompt">
          <p>
            Transforming Ideas into Reality, <br /> One Line of Code at a Time.
            👩‍💻
          </p>
          <a
            className="clickable"
            href="https://www.linkedin.com/in/alja-cekada/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            className="clickable"
            href="https://github.com/alchuu00"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            className="clickable"
            href="mailto:alja.cekada@gmail.com"
            target="_blank"
          >
            <EmailIcon />
          </a>
        </div>
        <div className="scroll-prompt">
          <p>Scroll</p>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </div>
      </div>
      <div className="skills">
        <h1>About Me</h1>
        <div className="skills-container">
          <img className="profile-img" src={ProfileImg} />
          <div className="description">
            <p>
              Coding has given me the chance to express my creativity in ways I
              never imagined. I bring my ideas to life by building websites and
              applications, and I can see the tangible results of my hard work.
              Coding not only lets me tap into my creative side, but it also
              sharpens my logical thinking skills. The process of designing,
              coding, and debugging requires me to think critically and solve
              problems, making me more organized and efficient in my thought
              processes.
            </p>
            <h2>Skills:</h2>
            <ul className="list">
              <span className="languages">
                <img src={Html} />
                <img src={Css} />
                <img src={Js} />
                <img src={Ts} />
                <img src={Node} />
                <img src={Sass} />
                <img src={Python} />
              </span>
              <span className="languages">
                <img src={Git} />
                <img src={Npm} />
                <img src={Webpack} />
                <img src={Babel} />
                <img src={Vscode} />
                <img src={Tailwind} />
                <img src={Bootstrap} />
                <img src={React1} />
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import HeroVideo from "../assets/hero_video.mp4";
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Js from "../assets/js.png"
import Ts from "../assets/ts.png"
import Python from "../assets/python.png"
import Sass from "../assets/sass.png"
import Tailwind from "../assets/tailwind.png"
import Bootstrap from "../assets/bootstrap.png"
import React1 from "../assets/react.png"
import Babel from "../assets/babel.png"
import Git from "../assets/git.png"
import Node from "../assets/nodejs.png"
import Npm from "../assets/npm.png"
import Webpack from "../assets/webpack.png"
import Vscode from "../assets/vscode.png"
import { Web } from "@mui/icons-material";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="video-container">
          <video src={HeroVideo} autoPlay loop muted></video>
        </div>
        <h2>Hi, my name is Alja👋</h2>
        <div className="prompt">
          <p>I design and code beautifully simple things, and I love what I do.👩‍💻</p>
          <a href="https://www.linkedin.com/in/alja-cekada/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/alchuu00" target="_blank">
            <GitHubIcon />
          </a>
          <a href="mailto:alja.cekada@gmail.com" target="_blank">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <span><img src={Html}/><img src={Css}/><img src={Js}/><img src={Ts}/><img src={Node}/><img src={Sass}/><img src={Python}/></span>
            <span><img src={Tailwind}/><img src={Bootstrap}/><img src={React1}/></span>
            <span><img src={Git}/><img src={Npm}/><img src={Webpack}/><img src={Babel}/><img src={Vscode}/></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p className="icons">
        <a href={project.ghLink} target="_blank"><GitHubIcon /></a>
        <a href={project.liveLink} target="_blank"><OpenInNewIcon /></a>
      </p>
    </div>
  );
}

export default ProjectDisplay;

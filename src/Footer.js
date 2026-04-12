import React from "react";
import "./styles.css";
import githubIcon from "./images/GitHubIcon_transparent.png";

export default function Footer() {
  return (
    <footer>
      Open-source code by <span>Anja Helbig</span> - Check on{" "}
      <img src={githubIcon} alt="GitHubIcon" width="20" />
      <a
        href="https://github.com/AnjaHelbig/weather-react"
        target="_blank"
        className="gitHubLink"
      >
        {" "}
        <span className="git-icon"> GitHub</span>
      </a>
    </footer>
  );
}

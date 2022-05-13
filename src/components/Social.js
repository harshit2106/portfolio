import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Social = () => {
  return (
    <div className="social">
      <div className="d-none d-md-flex flex-column">
        <div>
          <a
            className="color-primary"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/harshit-singh-40025a210"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            className="color-primary"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/harshit2106?tab=repositories"
          >
            <FaGithub />
          </a>
        </div>
        <div className="line align-self-center"></div>
      </div>
    </div>
  );
};

export default Social;

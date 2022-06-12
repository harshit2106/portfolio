import React from "react";
import harshit from "../resume/harshit.pdf";

const Head = () => {
  return (
    <section id="main">
      <div className="container main p-7 d-flex flex-column  justify-content-between align-items-center   ">
        <h5>Hello I'm</h5>
        <h3>Harshit Singh</h3>
        <h6 className="text-fade">Web Developer</h6>

        <div className="d-flex mb-5">
          <a
            // target="_blank"
            // rel="noreferrer"
            href={harshit}
            download
          >
            <button className=" m-2 btn-out">Download CV</button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/harshit2106?tab=repositories"
          >
            <button className="m-2 btnn">Github</button>
          </a>
        </div>
        <div className="me mt-auto">
          <img src="/images/pkk.png" alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Head;

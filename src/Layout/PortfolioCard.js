import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const PortfolioCard = ({ heading, tech, github, demo, img }) => {
  return (
    <div className="portfolio-card card-padding">
      <div>
        <img src={img} alt="img" className="port-img" />
      </div>
      <h5 className="mt-3">{heading}</h5>
      <div className="small-font text-fade">{tech}</div>
      <div className="d-flex mt-1 ">
        <a target="_blank" rel="noreferrer" href={github}>
          <button className=" mt-2 mr-2 btn-out-sm">Github</button>
        </a>
        <a target="_blank" rel="noreferrer" href={demo}>
          <button className="m-2 btnn-sm">
            Live
            <span>
              <BsArrowRightShort />
            </span>{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;

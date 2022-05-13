import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const SkillName = ({ name }) => {
  return (
    <div className="d-flex align-items-center  space">
      <BsPatchCheckFill className="color-primary" />
      <h5 className="mleft-3 mb-0 ">{name}</h5>
    </div>
  );
};

export default SkillName;

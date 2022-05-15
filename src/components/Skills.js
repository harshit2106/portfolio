import React from "react";
import SkillName from "../Layout/SkillName";

const Skills = () => {
  return (
    <section className="container mt-3 padding">
      <div>
        <h2 className="text-center color-primary">My Skills</h2>
        <div className=" marginn row ">
          <div className="col-md-6 col-xs-12 ">
            <div className="exp-card">
              <h4 className="text-center color-primary">
                Frontend Development
              </h4>

              <div className="  d-flex justify-content-around p-3">
                <div>
                  <SkillName name="HTML" />
                  <SkillName name="JavaScript" />
                  <SkillName name="Bootstrap" />
                </div>

                <div>
                  <SkillName name="CSS" />
                  <SkillName name="ReactJs" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 ">
            <div className="exp-card">
              <h4 className="text-center color-primary">Backend Development</h4>

              <div className="  d-flex justify-content-around p-3">
                <div>
                  <SkillName name="NodeJs" />
                  <SkillName name="ExpressJs" />
                </div>

                <div>
                  <SkillName name="MongoDB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

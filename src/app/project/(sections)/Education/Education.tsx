import React from "react";

import "./style.css";

const Education = () => {
  return (
    <div className="education">
      <div className="education__item">
        <div className="education__image-wrapper">
          <img src="/pup.png" className="education__image" />
        </div>
        <div className="education__detail-wrapper">
          <h2 className="education__school">
            Polytechnic University of the Philippines
          </h2>
          <h2 className="education__course">
            Bachelor of Science in Information Technology
          </h2>
          <h2 className="education__year">2015-2019</h2>
        </div>
      </div>
    </div>
  );
};

export default Education;

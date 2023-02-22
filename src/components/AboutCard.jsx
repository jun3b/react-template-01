import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

// todo: btn 위치 항상 맨 아래에 붙여서
export default function AboutCard({
  index = 0,
  title = "",
  contents = "",
  color = "",
}) {
  return (
    <div className={`about__card ${color}`}>
      <div className="flex-column">
        <p className="about__card-index">{index}</p>
        <p className="about__card-title">{title}</p>
        <p className="about__card-contents">{contents}</p>
        <div className={`about__btn ${color}`}>
          <MdKeyboardArrowRight className="icon-arrow" color="inherit" />
        </div>
      </div>
    </div>
  );
}

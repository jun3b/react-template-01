import React from "react";
import { ABOUT_CONTENTS } from "../data/constants";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="about">
      <h1 className="display-hidden">About Company</h1>
      <div className="about__card-box grid-col-1-4">
        {ABOUT_CONTENTS.map((about) => (
          <AboutCard
            key={about.index}
            index={about.index}
            title={about.title}
            contents={about.contents}
            color={about.color}
          />
        ))}
      </div>
      <div className="about__text-box flex-column">
        <h1>
          <p className="about__text-box__main">
            We are sustainable construction
          </p>
          <p className="about__text-box__sub">
            We are the authority for completing construction projects in
            environmentally sensitive surroundings. Our team is focused on
            finding innovative solutions to the most complex construction
            projects while ensuring that we limit our environmental footprint
            and impact.
          </p>
        </h1>
        <button type="button" className="about__btn primary-btn medium">
          read more
        </button>
      </div>
    </section>
  );
}

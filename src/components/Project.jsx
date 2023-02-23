import ProjectCard from "./ProjectCard";
import { GiTowerBridge, GiPencilRuler, GiForklift } from "react-icons/gi";

export default function Project() {
  const CARD_CONTENTS = [
    {
      id: 1,
      img: <GiTowerBridge className="project-icon" />,
      title: "building",
      contents:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 2,
      img: <GiPencilRuler className="project-icon" />,
      title: "planning",
      contents:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 3,
      img: <GiForklift className="project-icon" />,
      title: "about us",
      contents:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];

  return (
    <section className="project">
      <div className="project__image" />
      <div className="project__card-box grid-col-1-3">
        {CARD_CONTENTS.map((item) => (
          <ProjectCard
            key={item.id}
            img={item.img}
            title={item.title}
            contents={item.contents}
          />
        ))}
      </div>
    </section>
  );
}

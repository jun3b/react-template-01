export default function ProjectCard({ img = "", title = "", contents = "" }) {
  return (
    <div className="project-card">
      <div className="project-card__image">{img}</div>
      <p className="project-card__main">{title}</p>
      <p className="project-card__sub">{contents}</p>
    </div>
  );
}

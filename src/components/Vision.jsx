import Vision1 from "../assets/vision-1.jpg";
import Vision2 from "../assets/vision-2.jpg";
import Vision3 from "../assets/vision-3.jpg";

export default function Vision() {
  return (
    <section className="vision">
      <div className="vision__container grid-1-3">
        <div className="vision__text-box flex-column">
          <h1 className="display-hidden ">our vision</h1>
          <p className="text-main medium">our vision</p>
          <p className="text-label small">Construction Services</p>
          <p className="text-sub medium">
            We have gained experience in most major market segments, including:
          </p>
          <ul className="vision__list">
            <li>Data Centres</li>
            <li>Commercial Interiors</li>
            <li>Financial Centres</li>
            <li>Retail</li>
            <li>Hospitality</li>
            <li>Sports</li>
            <li>Manufacturing</li>
          </ul>
        </div>
        <div className="vision__image">
          <img src={Vision1} alt="pic-1" className="vision__pic" />
        </div>
        <div className="vision__image">
          <img src={Vision2} alt="pic-2" className="vision__pic-half" />
          <img src={Vision3} alt="pic-3" className="vision__pic-half" />
        </div>
      </div>
    </section>
  );
}

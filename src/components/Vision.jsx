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
          <img src="img/vision-1.jpg" alt="pic-1" className="vision__pic" />
        </div>
        <div className="vision__image">
          <img
            src="img/vision-2.jpg"
            alt="pic-2"
            className="vision__pic-half"
          />
          <img
            src="img/vision-3.jpg"
            alt="pic-3"
            className="vision__pic-half"
          />
        </div>
      </div>
    </section>
  );
}

export default function Vision() {
  return (
    <section className="vision">
      <div className="vision__container">
        <div className="grid-1-3">
          <div className="vision__text-box flex-column">
            <h1>
              <p>our vision</p>
              <p>Construction Services</p>
              <p>
                We have gained experience in most major market segments,
                including:
              </p>
              <ul>
                <li>Data Centres</li>
                <li>Commercial Interiors</li>
                <li>Financial Centres</li>
                <li>Retail</li>
                <li>Hospitality</li>
                <li>Sports</li>
                <li>Manufacturing</li>
              </ul>
            </h1>
          </div>
          <div>
            <img src="img/vision-1.jpg" alt="pic-1" className="vision__pic" />
          </div>
          <div>
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
      </div>
    </section>
  );
}

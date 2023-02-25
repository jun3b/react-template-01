import RedRoof from "../assets/red-roof.jpg";

export default function Company() {
  return (
    <section className="company">
      <h1 className="display-hidden ">about company</h1>
      <div className="company__wrap">
        <img src={RedRoof} alt="pic" className="company__shape" />
        <div className="company__text-box">
          <div className="bar" />
          <p className="company__p-main">About Our Company</p>
          <p className="company__p-sub">
            Your dream: to make beautiful things that make life more beautiful.
            To capture and reflect the world in a meaningful, unique way. Our
            engineers facilitate project implementation from design to
            construction, for flawless execution and results.
          </p>
          <button type="button" className="company__btn primary-btn medium">
            start now
          </button>
        </div>
      </div>
    </section>
  );
}

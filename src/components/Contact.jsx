import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__text-box">
        <h1 className="text-label small">Get In Touch!</h1>
        <p className="text-main medium">
          WE ARE LOOKING FORWARD TO START A PROJECT WITH YOU!
        </p>
        <p className="text-sub medium">
          Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet
          convallis erat. Class aptent taciti sociosqu ad litora torquent per
          conubia! Maecenas gravida lacus nec dolor suscipit faucibus.
        </p>
        <div className="contact__info-box grid-col-1-2">
          <div className="contact__info">
            <div className="icon-wrap start">
              <HiLocationMarker className="contact-icon" />
            </div>
            <p className="contact__info__text">
              121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
            </p>
            <div className="icon-wrap">
              <AiFillPhone className="contact-icon" />
            </div>
            <p className="contact__info__text">{`1 (234) 567-891 \r\n 1 (234) 987-654`}</p>
            <div className="icon-wrap">
              <MdAccessTimeFilled className="contact-icon" />
            </div>
            <p className="contact__info__text">{`Mon – Fri …… 10 am – 8 pm \r\n Sat, Sun …… Closed`}</p>
          </div>
          <form className="contact__form">
            <input className="contact__input" placeholder="Enter your Name" />
            <input
              className="contact__input"
              placeholder="Enter a valid email address"
            />
            <input
              text
              className="contact__input"
              placeholder="Enter Your message"
            />
            <button type="submit" className="primary-btn medium">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

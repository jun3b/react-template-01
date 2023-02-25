import { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navBtnClickHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuClickHandler = (menu) => {
    setMenuOpen((prev) => !prev);
    const target = document.querySelector(`.${menu}`);
    target.scrollIntoView();
  };

  return (
    <div className="navigation">
      <div className="navigation__btn" onClick={navBtnClickHandler}>
        <span className="navigation__icon">&nbsp;</span>
      </div>
      <div className={`navigation__background  ${menuOpen ? "active" : ""}`}>
        &nbsp;
      </div>
      <nav className={`navigation__nav ${menuOpen ? "active" : ""}`}>
        <ul className={`navigation__list ${menuOpen ? "active" : ""}`}>
          <li
            className="navigation__item basic"
            onClick={() => menuClickHandler("header")}
          >
            HOME
          </li>
          <li
            className="navigation__item basic"
            onClick={() => menuClickHandler("about")}
          >
            Project
          </li>
          <li
            className="navigation__item basic"
            onClick={() => menuClickHandler("vision")}
          >
            Vision
          </li>
          <li
            className="navigation__item basic"
            onClick={() => menuClickHandler("company")}
          >
            About us
          </li>
          <li
            className="navigation__item basic"
            onClick={() => menuClickHandler("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

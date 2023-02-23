import React from "react";

export default function Header() {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target["email"];
    console.log("submit", value);
  };

  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <p className="heading-primary__main">{`Building \r\n a House?`}</p>
          <p className="heading-primary__sub">
            You'll get to personalize the details of your house when you're
            building a house from the ground up—from the layout
          </p>
        </h1>
        <form className="header__input-box" onSubmit={(e) => onSubmit(e)}>
          <input
            name="email"
            type="email"
            className="header__input"
            placeholder="Enter a valid email address"
          />
          <button type="submit" className="primary-btn small">
            submit
          </button>
        </form>
      </div>
    </header>
  );
}

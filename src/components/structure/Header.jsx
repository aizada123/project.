import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content_logo">
            <img className="header-img" src="/images/logo.png" />
          </div>
          <div className="header__content_buttons">
            <button className="button_link">Sign In</button>
            <button className="button">Try for free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

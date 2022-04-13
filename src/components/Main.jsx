import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__content_text">
            <h1 className="main__content_title">
              {" "}
              Bite-sized knowledge <br />
              to upgrade <span id="orange">your life</span>
            </h1>
            <p className="main__content_description">
              Ideas from books, articles & podcasts.
              <br />
              <span id="green">Read faster.</span>
              <span id="red">Remember everything!</span>{" "}
            </p>

            <div className="main__content_buttons">
              <button className="button_link">Learn more</button>
            </div>
          </div>
          <div className="main__content_image">
            <img src="/images/main_image.png" className="main-img" />
          </div>
        </div>
      </div>
      <img src="/images/main_plane.png" className="main__plane" />
    </div>
  );
};

export default Main;

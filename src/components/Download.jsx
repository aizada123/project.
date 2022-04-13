import React from "react";

const Download = () => {
  return (
    <div className="download">
      <div className="container">
        <div className="download__content">
          <div className="app__store">
            <button className="download__button">
              <img
                className="download__button_active"
                src="/images/app_store.png"
              />
              <img
                className="download-img"
                src="/images/app_description_left.png"
              />
            </button>
          </div>
          <div className="google_play">
            <button className="download__button">
              <img
                className="download__button_active"
                src="/images/google_play.png"
              />
              <img
                className="download-img"
                src="/images/app_description_right.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;

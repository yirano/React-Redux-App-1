import React from "react";

const Features = () => {
  return (
    <div className="features">
      <div className="featuresTop">
        <h2>Advanced Statistics</h2>
        <p className="featuresCaption">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="featuresBottom">
        <div className="featuresCard">
          <div className="cardIcon">
            <img src="/imgs/icon-detailed-records.svg" />
          </div>
          <h4>Brand Recognition</h4>
          <p className="cardCaption">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="featuresCard">
          <div className="cardIcon">
            <img src="/imgs/icon-fully-customizable.svg" />
          </div>
          <h4>Detailed Records</h4>
          <p className="cardCaption">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="featuresCard">
          <div className="cardIcon">
            <img src="/imgs/icon-brand-recognition.svg" />
          </div>
          <h4>Fully Customizable</h4>
          <p className="cardCaption">
            Improve brand awareness and content discoverability through
            customizable links, superchargin audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

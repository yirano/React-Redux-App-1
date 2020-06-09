import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumboLeft">
        <h1>More than just shorter links</h1>
        <p className="jumboCaption">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="jumboButton">Get Started</button>
      </div>
      <div className="jumboRight">
        <img src="../../imgs/illustration-working.svg" alt="illustration working" />
      </div>
    </div>
  );
};

export default Jumbotron;

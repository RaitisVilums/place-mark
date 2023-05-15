import React from "react";

import "./wrapper.styles.scss";

const MainWrapper = (props) => {
  return (
    <section className="main-wrapper">
      {props.background && (
        <div className="main-wrapper__background">
          {props.image && <img src={props.image} alt="background" />}
        </div>
      )}
      {props.children}
    </section>
  );
};

export default MainWrapper;

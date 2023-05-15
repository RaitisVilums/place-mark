import React from "react";

import "./about.styles.scss";
import MainWrapper from "../Common/Wrapper/wrapper";
import TravelBg from "../../Assets/travel-bg.jpg";
import TravelBgTwo from "../../Assets/travel-bg-2.jpg";
import TravelBgThree from "../../Assets/travel-bg-3.jpg";

const About = () => {
  return (
    <MainWrapper>
      <div className="about" id="about">
        <div className="about__content">
          <h2>ABOUT US</h2>

          <p>
            Welcome to PlaceMark, the world's go-to platform for sharing and
            discovering unique, extraordinary, and favorite places. Here, every
            location holds a story, waiting to be told and heard. Whether it's
            that hidden gem of a café in your neighborhood, a breathtaking
            mountain peak, or a bustling market halfway across the globe, at
            PlaceMark, we believe that the best spots are the ones shared by our
            passionate, global community.
          </p>
          <div className="about__content--images">
            <img src={TravelBg} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="about__reviews">
          <div className="about__reviews--background" />
          <h2>New Users</h2>
          <div className="about__reviews--item"></div>
          <div className="about__reviews--item"></div>
          <div className="about__reviews--item"></div>
          <div className="about__reviews--item"></div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default About;

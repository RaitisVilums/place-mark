import React, { Fragment, useContext, useEffect, useRef } from "react";

import "./home.styles.scss";
import BackgroundImage from "../../Assets/home-bg.jpg";
import MainWrapper from "../Common/Wrapper/wrapper";
import Button from "../Common/Button/button";
import { ScrollContext } from "../../Context/scroll.context";

const Home = () => {
  const { setIsScrolled } = useContext(ScrollContext);
  const homeContainerRef = useRef(null);

  useEffect(() => {
    if (homeContainerRef.current) {
      const homeContainer = homeContainerRef.current;

      const options = {
        rootMargin: "-500px 0px 0px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
      }, options);

      observer.observe(homeContainer);

      return () => observer.unobserve(homeContainer);
    }
  }, []);

  return (
    <Fragment>
      <MainWrapper background image={BackgroundImage}>
        <div className="home-container" ref={homeContainerRef}>
          <div className="home-container__content">
            <h1>PLACEMARK</h1>
            <h2>Mark Share Explore.</h2>
            <div className="home-container__cta">
              <Button>share your experience</Button>
              <Button href="#about" inverse>
                chek out suggestions
              </Button>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Fragment>
  );
};

export default Home;

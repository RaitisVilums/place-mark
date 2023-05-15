import React from "react";
import { Link } from "react-router-dom";

import "./error.styles.scss";
import MainWrapper from "../../Components/Common/Wrapper/wrapper";

const ErrorPage = () => {
  return (
    <MainWrapper>
      <div className="error-page">
        <h2>Page was not found</h2>
        <h3>You can go back by clicking :</h3>
        <Link to={"/"}>Home</Link>
      </div>
    </MainWrapper>
  );
};

export default ErrorPage;

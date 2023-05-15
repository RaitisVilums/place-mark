import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../../Components/Shared/Navigation/navigation";
const Root = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Root;

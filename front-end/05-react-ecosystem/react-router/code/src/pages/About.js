import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);

  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>About</h1>
      <p>This is the About page</p>
      <p>Pathname: {location.pathname}</p>
      <hr />
      <nav>
        <Link to="route-a/Jorge">Sub-rota a</Link> |{" "}
        <Link to="route-b/Anna">Sub-rota a</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default About;

import React from "react";
import Logo from "../images/astronauts.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="hero">
      <div>
        <img src={Logo}></img>
        <h2 className="text-center text-capitalize">Page not Found</h2>
      </div>
    </div>
  );
}

export default NotFound;

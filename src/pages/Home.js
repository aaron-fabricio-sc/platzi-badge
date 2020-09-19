import React from "react";
import Astronauts from "../images/astronauts.svg";
import Logo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import "./styles/BadgeHome.css";
function Home() {
  return (
    <div className="Hero-Home">
      <div className="container Hero-Home_container">
        <div>
          <img src={Logo}></img>
          <h2>Imprime tus badges con nosotros</h2>
          <div className="container-btn">
            <Link to="/badges" className="btn btn-primary boton">
              Start now
            </Link>
          </div>
        </div>
        <div>
          <img src={Astronauts} className="d-none d-lg-block"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;

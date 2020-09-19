import React from "react";

import "./styles/Badge.css";

import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";
class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo}></img>
        </div>
        <div className="badge_section-name">
          <Gravatar
            email={this.props.email}
            className="badge_avatar"
            alt="dante"
          ></Gravatar>

          <h1>
            {this.props.firstName}
            <br></br> {this.props.lastName}
          </h1>
        </div>
        <div className="badge_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="badge_footer">Conferencia</div>
      </div>
    );
  }
}

export default Badge;

import React from "react";

import error from "../images/error-500.png";
function Error500() {
  return (
    <div className="d-flex justify-content-center">
      <img src={error}></img>
    </div>
  );
}

export default Error500;

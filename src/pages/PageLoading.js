import React from "react";
import loader from "../images/loader.gif";
function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <img src={loader}></img>
    </div>
  );
}

export default Loading;

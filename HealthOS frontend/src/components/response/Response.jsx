import React from "react";
import "./Response.css";
import Resp from "./Resp";
function Response() {
    const retrievedHealthy = JSON.parse(localStorage.getItem("healthyItems")) || [];
const retrievedUnhealthy = JSON.parse(localStorage.getItem("unhealthyItems")) || [];

function renderItemsInDiv(items) {
    return (
      <div className="diet_content_main">
        {items.map((item, index) => (
          <div className="diet_content" key={index}>
            <b>{item}</b><br />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="diet_main">
        <div className="diet_heading">
          <h1>Healthy Food</h1>
          <h1>Unhealthy Food</h1>
        </div>
        <div className="diet_result_div">
          <div className="left_diet">
          {renderItemsInDiv(retrievedHealthy)}  </div>
          <div className="right_diet">
          {renderItemsInDiv(retrievedUnhealthy)}
   </div>
        </div>
      </div>
    </>
  );
}

export default Response;

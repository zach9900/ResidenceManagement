import React, { useState } from "react";
import FloorCard from "./FloorCard";
import upArrow from "../assets/upArrow.png";
import downArrow from "../assets/downArrow.png";

function FloorSlider({
  floorNumber,
  incFloor,
  decFloor,
}: {
  floorNumber: number;
  incFloor: Function;
  decFloor: Function;
}) {
  console.log(floorNumber);

  return (
    <div className="current-floor">
      <img
        className="arrow"
        src={upArrow}
        alt="arrow up"
        style={floorNumber < 2 ? { opacity: 1 } : { opacity: 0.2 }}
        onClick={() => floorNumber < 2 && incFloor()}
      />

      <FloorCard floorNum={floorNumber} />

      <img
        className="arrow"
        src={downArrow}
        alt="arrow down"
        style={floorNumber > 0 ? { opacity: 1 } : { opacity: 0.2 }}
        onClick={() => floorNumber > 0 && decFloor()}
      />
    </div>
  );
}

export default FloorSlider;

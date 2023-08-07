import React, { useState } from "react";
import FloorCard from "./FloorCard";
import upArrow from "../assets/upArrow.png";
import downArrow from "../assets/downArrow.png";

function FloorSlider() {
  const [selectedFloor, setSelectedFloor] = useState(2);
  return (
    <div className="current-floor">
      <img className="arrow" src={upArrow} alt="arrow up" />
      <FloorCard floorNum={selectedFloor} />
      <img className="arrow" src={downArrow} alt="arrow down" />
    </div>
  );
}

export default FloorSlider;

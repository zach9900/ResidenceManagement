import React, { useState } from "react";
import FloorCard from "./FloorCard";
import upArrow from "../assets/upArrow.png";
import downArrow from "../assets/downArrow.png";

function FloorSlider() {
  const [selectedFloor, setSelectedFloor] = useState(0);
  function changeFloorNum(isIncrement: boolean) {
    setSelectedFloor((prev) => (isIncrement ? prev + 1 : prev - 1));
  }
  return (
    <div className="current-floor">
      <img
        className="arrow"
        src={upArrow}
        alt="arrow up"
        style={selectedFloor < 2 ? { opacity: 1 } : { opacity: 0.2 }}
        onClick={() => selectedFloor < 3 && changeFloorNum(true)}
      />

      <FloorCard floorNum={selectedFloor} />

      <img
        className="arrow"
        src={downArrow}
        alt="arrow down"
        style={selectedFloor > 0 ? { opacity: 1 } : { opacity: 0.2 }}
        onClick={() => selectedFloor > 0 && changeFloorNum(false)}
      />
    </div>
  );
}

export default FloorSlider;

import React from "react";
import "../pages/Floor.css";

function FloorCard({ floorNum }: { floorNum: number }) {
  return <div className="floor-card">{floorNum}</div>;
}

export default FloorCard;

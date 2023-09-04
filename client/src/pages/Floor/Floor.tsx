import React, { useEffect, useState } from "react";
import "./Floor.css";
import RoomsRow from "../../components/RoomsRow";
import Facility from "../../components/Facility";
import showerIcon from "../../assets/shower.png";
import tiglahotIcon from "../../assets/tiglahot.png";
import toiletIcon from "../../assets/toilet.png";
import FloorSlider from "../../components/FloorSlider";
import Hilton from "../../interfaces/hilton.interface";
import mockHilton from "../../constants/mock/Hilton.mock";
import FloorInterface from "../../interfaces/floor.interface";

function Floor() {
  const [hilton, setHilton] = useState<Hilton>(mockHilton);
  const [floor, setFloor] = useState<FloorInterface>(hilton.floors[0]);

  function incFloor() {
    setFloor((prev) => hilton.floors[prev.floorNum + 1]);
  }

  function decFloor() {
    setFloor((prev) => hilton.floors[prev.floorNum - 1]);
  }

  useEffect(() => {
    console.log(floor.roomsArray);
  }, [floor]);
  return (
    <div className="container">
      <div className="floor-container">
        <RoomsRow rooms={floor.roomsArray.slice(10)} />
        <div className="center-container">
          <div className="facilities-container">
            <Facility icon={showerIcon} />
            <Facility icon={tiglahotIcon} />
            <Facility icon={toiletIcon} />
          </div>
          <h1 className="hilton-num">192</h1>
          <FloorSlider
            floorNumber={floor.floorNum}
            incFloor={incFloor}
            decFloor={decFloor}
          />
        </div>
        <RoomsRow rooms={floor.roomsArray.slice(0, 10).reverse()} />
      </div>
    </div>
  );
}

export default Floor;

import React, { useEffect, useState } from "react";
import "./Floor.css";
import RoomsRow from "../../components/RoomsRow";
import Facility from "../../components/Facility";
import showerIcon from "../../assets/shower.png";
import tiglahotIcon from "../../assets/tiglahot.png";
import toiletIcon from "../../assets/toilet.png";
import FloorSlider from "../../components/FloorSlider";
import Hilton from "../../interfaces/hilton.interface";

function Floor() {
  const [hilton, setHilton] = useState<Hilton>();

  useEffect(() => {
    console.log("give me hilton");
  }, []);
  const roomsArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="container">
      <div className="floor-container">
        <RoomsRow rooms={roomsArr.slice(10, 20)} isTop={true} />
        <div className="center-container">
          <div className="facilities-container">
            <Facility icon={showerIcon} />
            <Facility icon={tiglahotIcon} />
            <Facility icon={toiletIcon} />
          </div>
          <h1 className="hilton-num">192</h1>
          <FloorSlider />
        </div>
        <RoomsRow rooms={roomsArr.slice(0, 10).reverse()} isTop={false} />
      </div>
    </div>
  );
}

export default Floor;

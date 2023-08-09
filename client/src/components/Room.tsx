import React from "react";
import "../pages/Floor/Floor.css";

function Room({
  roomNumber,
  bedsTaken,
}: {
  roomNumber: number;
  bedsTaken: number;
}) {
  const bedsTotal = 8;
  return (
    <div onClick={() => console.log("omg")} className="room">
      <h5 className="room-num">{roomNumber}</h5>
      <div className="preview-rooms-grid">
        {new Array(bedsTotal)
          .fill(bedsTotal)
          .map((val, index) =>
            index < bedsTaken ? (
              <div className="attendent-status" id="unattendent" key={index} />
            ) : (
              <div className="attendent-status" id="attendent" key={index} />
            )
          )}
      </div>
    </div>
  );
}

export default Room;

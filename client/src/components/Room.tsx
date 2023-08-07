import React from "react";
import "../pages/Floor.css";

function Room({ roomNumber }: { roomNumber: number }) {
  return (
    <div onClick={() => console.log("omg")} className="room">
      <h5 className="room-num">{roomNumber}</h5>
    </div>
  );
}

export default Room;

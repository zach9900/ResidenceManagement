import React from "react";
import Room from "./Room";
import "../pages/Floor.css";

function RoomsRow({ rooms, isTop }: { rooms: Array<number>; isTop: boolean }) {
  return (
    <div className="row-container">
      {rooms.map((roomNum, index) => {
        if (index === rooms.length - 1 || index === 0)
          return <Room key={index} roomNumber={roomNum} />;

        if (index % 2 === 1)
          return (
            <div key={index} className="room-duo">
              <Room roomNumber={roomNum} />
              <div style={{ width: "0.5vw" }} />
              <Room roomNumber={isTop ? roomNum + 1 : roomNum - 1} />
            </div>
          );

        return null;
      })}
    </div>
  );
}

export default RoomsRow;

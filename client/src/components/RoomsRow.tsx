import React from "react";
import Room from "./Room";
import "../pages/Floor/Floor.css";

function RoomsRow({ rooms, isTop }: { rooms: Array<number>; isTop: boolean }) {
  return (
    <div className="row-container">
      {rooms.map((roomNum, index) => {
        let roomsTotal = Math.floor(Math.random() * 10);
        let roomsTaken =
          roomsTotal - (Math.floor(Math.random() * 10) % roomsTotal);
        if (index === rooms.length - 1 || index === 0)
          return (
            <Room key={index} roomNumber={roomNum} bedsTaken={roomsTaken} />
          );

        if (index % 2 === 1)
          return (
            <div key={index} className="room-duo">
              <Room roomNumber={roomNum} bedsTaken={roomsTaken} />
              <div style={{ width: "0.5vw" }} />
              <Room
                roomNumber={isTop ? roomNum + 1 : roomNum - 1}
                bedsTaken={roomsTaken}
              />
            </div>
          );

        return null;
      })}
    </div>
  );
}

export default RoomsRow;

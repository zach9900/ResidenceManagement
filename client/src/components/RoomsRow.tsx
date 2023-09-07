import React from "react";
import Room from "./Room";
import "../pages/Floor/Floor.css";
import RoomInterface from "../interfaces/room.interface";

function RoomsRow({
  rooms,
  onRoomClick,
}: {
  rooms: Array<RoomInterface>;
  onRoomClick: Function;
}) {
  return (
    <div className="row-container">
      {rooms.map((room, index) => {
        if (index === rooms.length - 1 || index === 0)
          return <Room key={index} room={room} onClick={onRoomClick} />;

        if (index % 2 === 1)
          return (
            <div key={index} className="room-duo">
              <Room room={room} onClick={onRoomClick} />
              <div style={{ width: "0.5vw" }} />
              <Room room={rooms[index + 1]} onClick={onRoomClick} />
            </div>
          );

        return null;
      })}
    </div>
  );
}

export default RoomsRow;

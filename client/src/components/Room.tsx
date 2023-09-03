import React from "react";
import "../pages/Floor/Floor.css";
import RoomInteface from "../interfaces/room.interface";

function Room({ room }: { room: RoomInteface }) {
  return (
    <div onClick={() => console.log(room)} className="room">
      <h5 className="room-num">{room.roomNum}</h5>
      <div className="preview-rooms-grid">
        {new Array(room.totalBedsAmount)
          .fill(room.totalBedsAmount)
          .map((val, index) =>
            index < room.occupiedBedsAmount ? (
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

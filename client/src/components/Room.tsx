import React from "react";
import "../pages/Floor/Floor.css";
import RoomInteface from "../interfaces/room.interface";
import warningIcon from "../assets/warning.png";

function Room({ room, onClick }: { room: RoomInteface; onClick: Function }) {
  return (
    <div onClick={() => onClick(room)} className="room">
      <div className="room-warning-container">
        {room.failuresArray.length > 0 && (
          <img
            className="room-warning-icon"
            src={warningIcon}
            alt="warningIcon"
          />
        )}
      </div>
      <div className="room-details-container">
        <h5 className="room-num">{room.roomNum}</h5>
        <div className="preview-rooms-grid">
          {new Array(room.totalBedsAmount)
            .fill(room.totalBedsAmount)
            .map((val, index) =>
              index < room.occupiedBedsAmount ? (
                <div
                  className="attendent-status"
                  id="unattendent"
                  key={index}
                />
              ) : (
                <div className="attendent-status" id="attendent" key={index} />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default Room;

import React, { useEffect, useState } from "react";
import "./Floor.css";
import RoomsRow from "../../components/RoomsRow";
import Facility from "../../components/Facility";
import showerIcon from "../../assets/shower.png";
import tiglahotIcon from "../../assets/tiglahot.png";
import toiletIcon from "../../assets/toilet.png";
import FloorSlider from "../../components/FloorSlider";
import Hilton from "../../interfaces/hilton.interface";
import FloorInterface from "../../interfaces/floor.interface";
import RoomInteface from "../../interfaces/room.interface";
import RoomViewModal from "../../components/roomViewModal/RoomViewModal";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeFloorPageButton } from "./Floor.styles";

function Floor({
  initHilton,
  closeFloorPage,
}: {
  initHilton: Hilton;
  closeFloorPage: Function;
}) {
  const [hilton, setHilton] = useState<Hilton>(initHilton);
  const [floor, setFloor] = useState<FloorInterface>(hilton.floors[0]);
  const [pressedRoom, setPressedRoom] = useState<RoomInteface>({
    occupiedBedsAmount: 0,
    roomNum: 0,
    soldiersArray: [],
    totalBedsAmount: 0,
    failuresArray: [],
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    isModalOpen === false &&
      setTimeout(() => {
        setPressedRoom({
          occupiedBedsAmount: 0,
          roomNum: 0,
          soldiersArray: [],
          totalBedsAmount: 0,
          failuresArray: [],
        });
      }, 150);
  }, [isModalOpen]);

  function incFloor() {
    setFloor((prev) => hilton.floors[prev.floorNum + 1]);
  }

  function decFloor() {
    setFloor((prev) => hilton.floors[prev.floorNum - 1]);
  }

  function setRoom(room: RoomInteface) {
    setPressedRoom(room);
    setIsModalOpen(true);
  }

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      style={{ y: 0 }}
      onClick={() => closeFloorPage()}
    >
      <div
        className="floor-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button sx={closeFloorPageButton} onClick={() => closeFloorPage()}>
          <CloseIcon />
        </Button>

        <div style={{ padding: "0vh 0vh 2vh 3vh" }}>
          <RoomsRow rooms={floor.roomsArray.slice(10)} onRoomClick={setRoom} />
          <div className="center-container">
            <div className="facilities-container">
              <Facility icon={showerIcon} />
              <Facility icon={tiglahotIcon} />
              <Facility icon={toiletIcon} />
            </div>
            <h1 className="hilton-num">{hilton.hiltonNumber}</h1>
            <FloorSlider
              floorNumber={floor.floorNum}
              incFloor={incFloor}
              decFloor={decFloor}
            />
          </div>
          <RoomsRow
            rooms={floor.roomsArray.slice(0, 10).reverse()}
            onRoomClick={setRoom}
          />
        </div>
      </div>

      <RoomViewModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        hiltonNum={hilton.hiltonNumber}
        floorNum={floor.floorNum}
        roomData={pressedRoom}
      />
    </motion.div>
  );
}

export default Floor;

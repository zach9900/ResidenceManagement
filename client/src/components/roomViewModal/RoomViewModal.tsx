import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import RoomResident from "../RoomResident";
import RoomEmptySpot from "../RoomEmptySpot";
import "./RoomViewModal.css";
import RoomInteface from "../../interfaces/room.interface";
import styles from "./roomViewModal.styles";
import warningIcon from "../../assets/warning.png";

export default function RoomViewModal({
  isOpen,
  closeModal,
  hiltonNum,
  floorNum,
  roomData,
}: {
  isOpen: boolean;
  closeModal: React.ReactEventHandler;
  hiltonNum: number;
  floorNum: number;
  roomData: RoomInteface;
}) {
  const [failureHovered, setFailureHovered] = useState<boolean>(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Fade in={isOpen}>
        <Box sx={styles.container}>
          <Box sx={styles.headerContainer}>
            <Button sx={styles.closeButton} onClick={closeModal}>
              <CloseIcon />
            </Button>
            <Box sx={styles.roomDetails}>
              <p className="header-text">{`חדר ${roomData.roomNum}`}</p>
              <p className="header-room-information">{`הילטון ${hiltonNum} קומה ${floorNum}`}</p>
            </Box>
            <Box sx={styles.warningIconContainer}>
              {roomData.failuresArray.length && (
                <img
                  className="warning-icon"
                  src={warningIcon}
                  alt="warningIcon"
                  onMouseEnter={() => setFailureHovered(true)}
                  onMouseLeave={() => setFailureHovered(false)}
                />
              )}
            </Box>
          </Box>

          <Box sx={styles.seperatingLine}></Box>

          <Box sx={styles.soldiersContainer}>
            {roomData.soldiersArray.map((soldier, index) => (
              <RoomResident
                key={index}
                fullName={`${soldier.firstname} ${soldier.lastname}`}
                personalNumber={soldier.personalNumber}
              />
            ))}
            {new Array(8 - roomData.soldiersArray.length)
              .fill(0)
              .map((emptyRoom, index) => (
                <RoomEmptySpot
                  key={index}
                  disabled={index === 0 ? false : true}
                />
              ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

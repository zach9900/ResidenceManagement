import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import RoomResident from "./RoomResident";
import RoomEmptySpot from "./RoomEmptySpot";
import "./RoomViewModal.css";

export default function RoomViewModal({
  isOpen,
  closeModal,
  soldiersInRoom,
  roomNum,
  hiltonNum,
  floorNum,
}: {
  isOpen: boolean;
  closeModal: React.ReactEventHandler;
  soldiersInRoom: Array<any>;
  roomNum: number;
  hiltonNum: number;
  floorNum: number;
}) {
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
    >
      <Fade in={isOpen}>
        <Box sx={styles.container}>
          <Box sx={styles.headerContainer}>
            <Button sx={styles.closeButton} onClick={closeModal}>
              <CloseIcon />
            </Button>
            <Box sx={styles.roomDetails}>
              <p className="header-text">{`חדר ${roomNum}`}</p>
              <p className="header-room-information">{`הילטון ${hiltonNum} קומה ${floorNum}`}</p>
            </Box>
            <Box></Box>
          </Box>

          <Box sx={styles.seperatingLine}></Box>

          <Box sx={styles.soldiersContainer}>
            {soldiersInRoom.map((soldier, index) => (
              <RoomResident
                key={index}
                fullName={`${soldier.firstName} ${soldier.lastName}`}
                personalNumber={soldier.personalNumber}
              />
            ))}
            {new Array(8 - soldiersInRoom.length)
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

const styles = {
  container: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    width: "60vw",
    height: "60vh",
    transform: "translate(-50%, -50%)",
    background: "ghostwhite",
    boxShadow: 24,
    borderRadius: "2vmin",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "&:focus": {
      border: 0,
    },
  },
  headerContainer: {
    width: "94%",
    height: "9%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    color: "black",
    "&:hover": {
      color: "red",
    },
  },
  roomDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  seperatingLine: {
    width: "100%",
    height: "0.2vmin",
    backgroundColor: "#ccc",
    alignSelf: "center",
  },
  soldiersContainer: {
    width: "95%",
    height: "70%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "0.55vmin",
    gridAutoFlow: "column",
    direction: "rtl",
  },
};

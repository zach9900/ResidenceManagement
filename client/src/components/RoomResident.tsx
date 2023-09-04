import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Logout";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function RoomResident({
  fullName,
  personalNumber,
}: {
  fullName: string;
  personalNumber: number;
}) {
  return (
    <div className="box-container">
      <div className="soldier-details-container">
        <p className="soldier-name">{fullName}</p>
        <p className="soldier-personal-number">{personalNumber}</p>
      </div>
      <div className="icons-container">
        <IconButton sx={styles.swapIcon}>
          <SwapHorizIcon sx={styles.iconButton} />
        </IconButton>
        <IconButton sx={styles.removeIcon}>
          <RemoveIcon sx={styles.iconButton} />
        </IconButton>
      </div>
    </div>
  );
}

const styles = {
  soldierDetailsContainer: {
    display: "flex",
    flex: 1.5,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  removeIcon: {
    color: "rgb(80, 80, 80)", // Default color
    transform: "rotate(180deg)",
    padding: "0",
    "&:hover": {
      color: "red", // Color on hover
    },
  },
  swapIcon: {
    color: "rgb(80, 80, 80)", // Default color
    padding: "0",
    "&:hover": {
      color: "#ffa500", // Color on hover
    },
  },
  iconButton: {
    fontSize: "2.3vw",
    transition: "0.3s",
    padding: "0.5vmin",
  },
};

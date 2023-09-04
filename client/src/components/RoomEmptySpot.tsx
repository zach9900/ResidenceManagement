import React from "react";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function RoomEmptySpot({ disabled }: { disabled: boolean }) {
  return (
    <Box
      sx={[
        styles.emptyBoxContainer,
        disabled ? styles.disabled : styles.enabled,
      ]}
      onClick={() => {
        if (!disabled) {
          // something to do when the plus is clicked
        }
      }}
    >
      <AddCircleOutlineIcon sx={styles.addIcon} />
    </Box>
  );
}

const styles = {
  emptyBoxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "13vw",
    height: "6vh",
    direction: "rtl",
    p: "2vmin",
    border: "0.4vmin solid",
    borderStyle: "dashed",
    borderColor: "black",
    borderRadius: "3vmin",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow:
      "0 1.2vmin 1.63vmin -0.31vmin rgba(0, 0, 0, 0.11), 0 0.5vmin 1vmin -0.31vmin rgba(0, 0, 0, 0.07)",
    "&:hover": {
      backgroundColor: "#ddd", // Color on hover
    },
  },
  disabled: { opacity: 0.1, cursor: "default" },
  enabled: { opacity: 1, cursor: "pointer" },
  addIcon: {
    color: "black",
    fontSize: "4.5vmin",
    transition: "0.25s",
  },
};

import { motion } from "framer-motion";
import React from "react";
import "./RoomFailuresPopup.css";

function RoomFailuresPopup({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      style={{ opacity: 0, x, y }}
      className="popup-container"
    >
      <div className="popup-triangle"></div>
      <div className="popup-body"></div>
    </motion.div>
  );
}

export default RoomFailuresPopup;

import React from "react";
import "../pages/Floor/Floor.css";
import { motion } from "framer-motion";

function FloorCard({ floorNum }: { floorNum: number }) {
  const floorHeight = [-7.5, 0, 7.5];

  return (
    <div className="floor-card">
      <motion.div
        className="floor-nums-container"
        animate={{ y: `${floorHeight[floorNum]}vmin` }}
      >
        {Array(3)
          .fill(0)
          .map((val, index, arr) => (
            <p key={index} className="floor-num">
              {arr.length - (index + 1)}
            </p>
          ))}
      </motion.div>
    </div>
  );
}

export default FloorCard;

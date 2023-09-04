import { motion } from "framer-motion";
import React from "react";
import buildingModel from "../../assets/modelBuilding.png";
import HiltonMarker from "../../pages/Map/map.util/interfaces/HiltonMarker.interface";
import "./Popup.css";

function Popup({ hilton }: { hilton: HiltonMarker }) {
  return (
    <motion.div
      className="popup-container"
      style={{ y: "12vh" }}
      initial={{ opacity: 0.9, x: "-30vw" }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.9, x: "-30vw" }}
    >
      <h1> {`${hilton.hiltonNumber} הילטון`}</h1>
      <div style={{ display: "flex", height: "55%", paddingTop: "7vh" }}>
        <img alt="hilton" src={buildingModel} className="building-image" />

        <div className="info-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="info-field">
              <h2> מנהל הילטון</h2>
              <h2> אסף לוץ</h2>
            </div>

            <div className="info-field">
              <h2> מגדר</h2>
              <h2> ז</h2>
            </div>

            <div className="info-field">
              <h2> תפוסה</h2>
              <h2> 508/608</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Popup;

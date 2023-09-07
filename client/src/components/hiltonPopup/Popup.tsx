import { motion } from "framer-motion";
import React from "react";
import buildingModel from "../../assets/modelBuilding.png";
import "./Popup.css";
import Hilton from "../../interfaces/hilton.interface";
import Gender from "../../constants/Gender.enum";

function Popup({ hilton }: { hilton: Hilton }) {
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
      <div style={{ display: "flex", height: "60%", paddingTop: "7vh" }}>
        <img alt="hilton" src={buildingModel} className="building-image" />

        <div className="info-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="info-field">
              <h2 className="headline"> מנהל הילטון:</h2>
              <h3>
                {" "}
                {`${hilton.manager.firstname} ${hilton.manager.lastname}`}
              </h3>
            </div>

            <div className="info-field">
              <h2 className="headline"> סוג מגורים:</h2>
              <h3 className="subline">
                {hilton.gender === Gender.male ? "בנים" : "בנות"}
              </h3>
            </div>

            <div className="info-field">
              <h2 className="headline"> תפוסה:</h2>
              <h3> 58%</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Popup;

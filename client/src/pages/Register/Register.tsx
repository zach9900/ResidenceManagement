import React from "react";
import "./Register.css";
import LoginInputField from "../../components/LoginInputField";
import hatserim from "../../assets/bases/hatserim.png";
import palmahim from "../../assets/bases/palmahim.png";
import telnof from "../../assets/bases/telnof.png";
import techni from "../../assets/bases/techni.png";
import ramon from "../../assets/bases/ramon.png";

function Register() {
  const nameFields = ["שם משפחה", "שם פרטי"];
  const inputFields = ["מ.א", "טלפון", "סיסמה"];
  const inputFieldsTypes = ["text", "tel", "password"];
  const basesImages = [hatserim, palmahim, telnof, techni, ramon];
  return (
    <div className="container">
      <div className="background-section" />

      <div className="register-section">
        <div className="form-container">
          <h1 className="header">רישום חייל</h1>
          <h3 className="instructions">הזן את פרטי החייל החדש</h3>
          <div className="name-inputs">
            {nameFields.map((inputField, index) => (
              <LoginInputField
                key={index}
                fieldName={inputField}
                inputType={"text"}
              />
            ))}
          </div>
          {inputFields.map((inputField, index) => (
            <LoginInputField
              key={index}
              fieldName={inputField}
              inputType={inputFieldsTypes[index]}
            />
          ))}
          <button className="register-button">הירשם</button>
        </div>

        <div className="bases-container">
          {basesImages.map((baseImage, index) => (
            <img
              className="base-img"
              key={index}
              src={baseImage}
              alt={`base ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Register;

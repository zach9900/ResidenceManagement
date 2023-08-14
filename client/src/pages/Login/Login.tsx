import React from "react";
import "./Login.css";
import LoginInputField from "../../components/LoginInputField";
import hatserim from "../../assets/bases/hatserim.png";
import palmahim from "../../assets/bases/palmahim.png";
import telnof from "../../assets/bases/telnof.png";
import techni from "../../assets/bases/techni.png";
import ramon from "../../assets/bases/ramon.png";

function Login() {
  const inputFields = ["מספר אישי", "סיסמה"];
  const inputFieldsTypes = ["text", "password"];
  const basesImages = [hatserim, palmahim, telnof, techni, ramon];
  return (
    <div className="container">
      <div className="background-section" />

      <div className="login-section">
        <div className="form-container">
          <h1 className="header">ברוכים השבים!</h1>
          <h3 className="instructions">הקלד את האימייל והסיסמה כדי להתחבר</h3>
          {inputFields.map((inputField, index) => (
            <LoginInputField
              key={index}
              fieldName={inputField}
              inputType={inputFieldsTypes[index]}
            />
          ))}
          <button className="login-button">התחבר</button>
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

export default Login;

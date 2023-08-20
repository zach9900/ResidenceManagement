import React, { useEffect, useState } from "react";
import "./Login.css";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import LoginInputField from "../../components/LoginInputField";
import hatserim from "../../assets/bases/hatserim.png";
import palmahim from "../../assets/bases/palmahim.png";
import telnof from "../../assets/bases/telnof.png";
import techni from "../../assets/bases/techni.png";
import ramon from "../../assets/bases/ramon.png";
=======
=======
>>>>>>> Stashed changes
import InputField from "../../components/InputField";
import Gender from "../../constants/Gender.enum";
import Role from "../../constants/Role.enum";
import User from "../../interfaces/createUserDTO.interface";
import {
  getSetFunctionByFieldName,
  getInputValueByFieldName,
} from "../../utils/user.util";
import { inputFields } from "../../constants/fieldNames";
import { basesImages } from "../../constants/basesImages";
import loginUserDTO from "../../interfaces/loginUserDTO.interface";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function Login() {
  const [user, setUser] = useState<loginUserDTO>({
    personalNumber: "",
    password: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="container">
      <div className="background-section" />

      <div className="login-section">
        <div className="form-container">
          <h1 className="header">ברוכים השבים!</h1>
          <h3 className="instructions">הקלד את האימייל והסיסמה כדי להתחבר</h3>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          {inputFields.map((inputField, index) => (
            <LoginInputField
              key={index}
              fieldName={inputField}
              inputType={inputFieldsTypes[index]}
            />
          ))}
=======
=======
>>>>>>> Stashed changes
          {Object.keys(inputFields).map(
            (inputField, index) =>
              inputField !== "טלפון" && (
                <InputField
                  key={index}
                  fieldName={inputField}
                  setValue={getSetFunctionByFieldName(setUser, inputField)}
                  inputValue={getInputValueByFieldName(user, inputField)}
                />
              )
          )}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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

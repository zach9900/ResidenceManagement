import React, { useEffect, useState } from "react";
import "./Login.css";
import InputField from "../../components/InputField";
import {
  getSetFunctionByFieldName,
  getInputValueByFieldName,
} from "../../utils/user.util";
import { inputFields } from "../../constants/fieldNames";
import { basesImages } from "../../constants/basesImages";
import loginUserDTO from "../../interfaces/loginUserDTO.interface";

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

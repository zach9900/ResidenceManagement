import React, { useEffect, useState } from "react";
import "./Register.css";
import InputField from "../../components/InputField";
import Dropdown from "../../components/Dropdown";

import Role from "../../constants/Role.enum";
import Gender from "../../constants/Gender.enum";

import {
  getSetFunctionByFieldName,
  getInputValueByFieldName,
} from "../../utils/userInput.util";

import {
  courseNumberToGaf,
  courseOptions,
  genderOptions,
  RoleOptions,
} from "../../constants/inputOptions";
import { basesImages } from "../../constants/basesImages";
import { inputFields, nameFields } from "../../constants/fieldNames";
import createUserDTO from "../../interfaces/createUserDTO.interface";
import { register } from "../../utils/serverUtils/makas.utils";

function Register() {
  const [user, setUser] = useState<createUserDTO>({
    firstname: "",
    lastname: "",
    password: "",
    personalNumber: "",
    phoneNumber: "",
    gaf: "",
    course: "",
    role: Role.Soldier,
    gender: Gender.male,
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="container">
      <div className="background-section" />

      <div className="register-section">
        <div className="form-container">
          <h1 className="header">רישום חייל</h1>

          <h3 className="instructions">הזן את פרטי החייל החדש</h3>

          <Dropdown
            label="תפקיד"
            options={RoleOptions}
            defualtValue={RoleOptions[0]}
            setValue={(value: Role) =>
              setUser((prev: any) => {
                return { ...prev, role: value };
              })
            }
          />

          <div className="name-inputs">
            {Object.keys(nameFields).map((inputField, index) => (
              <InputField
                key={index}
                fieldName={inputField}
                setValue={getSetFunctionByFieldName(setUser, inputField)}
                inputValue={getInputValueByFieldName(user, inputField)}
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingBottom: "2vh",
            }}
          >
            <Dropdown
              label="מין"
              options={genderOptions}
              defualtValue={null}
              setValue={(gender: Gender) =>
                setUser((prev: any) => {
                  return { ...prev, gender: gender };
                })
              }
            />

            <Dropdown
              label="מספר קורס"
              options={courseOptions}
              defualtValue={null}
              setValue={(course: string) =>
                setUser((prev: any) => {
                  return {
                    ...prev,
                    course: course,
                    gaf: courseNumberToGaf[course],
                  };
                })
              }
            />
          </div>

          {Object.keys(inputFields).map((inputField, index) => (
            <InputField
              key={index}
              fieldName={inputField}
              setValue={getSetFunctionByFieldName(setUser, inputField)}
              inputValue={getInputValueByFieldName(user, inputField)}
            />
          ))}

          <button className="register-button" onClick={() => register(user)}>
            הירשם
          </button>
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

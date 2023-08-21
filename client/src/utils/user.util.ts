import createUserDTO from "../interfaces/createUserDTO.interface";

function getInputValueByFieldName(user: any, fieldName: string): string {
  let param = "";
  switch (fieldName) {
    case "שם פרטי":
      param = user.firstname;
      break;

    case "שם משפחה":
      param = user.lastname;
      break;

    case "טלפון":
      param = user.phoneNumber ?? "";
      break;

    case "מ.א":
      param = user.personalNumber;
      break;

    case "סיסמה":
      param = user.password;
      break;
  }
  return param;
}

function getSetFunctionByFieldName(
  setUser: Function,
  fieldName: string
): Function {
  let setFunction: Function = () => {};
  switch (fieldName) {
    case "שם פרטי":
      setFunction = (value: string) => {
        setUser((prev: createUserDTO) => {
          return { ...prev, firstname: value };
        });
      };
      break;

    case "שם משפחה":
      setFunction = (value: string) => {
        setUser((prev: createUserDTO) => {
          return { ...prev, lastname: value };
        });
      };
      break;

    case "טלפון":
      setFunction = (value: string) => {
        setUser((prev: createUserDTO) => {
          return { ...prev, phoneNumber: value };
        });
      };
      break;

    case "מ.א":
      setFunction = (value: string) => {
        setUser((prev: createUserDTO) => {
          return { ...prev, personalNumber: value };
        });
      };
      break;

    case "סיסמה":
      setFunction = (value: string) => {
        setUser((prev: createUserDTO) => {
          return { ...prev, password: value };
        });
      };
      break;
  }
  return setFunction;
}

export { getInputValueByFieldName, getSetFunctionByFieldName };

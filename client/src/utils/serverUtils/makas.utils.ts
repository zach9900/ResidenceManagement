import axiosInstance from "../../constants/axiosInstance";
import createUserDTO from "../../interfaces/createUserDTO.interface";

const prefix = "/courseCommander";

async function register(user: createUserDTO) {
  const obj = {
    firstname: user.firstname,
    lastname: user.lastname,
    gaf: user.gaf,
    course: user.course,
    personalNumber: user.personalNumber,
    phoneNumber: user.phoneNumber,
  };
  const result = await axiosInstance.post(prefix, obj);

  console.log(result.data);
}

export { register };

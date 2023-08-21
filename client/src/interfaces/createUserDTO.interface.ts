import Gender from "../constants/Gender.enum";
import Role from "../constants/Role.enum";

interface createUserDTO {
  firstname: string;
  lastname: string;
  gender: Gender;
  role: Role;
  personalNumber: string;
  phoneNumber?: string;
  password: string;
}

export default createUserDTO;

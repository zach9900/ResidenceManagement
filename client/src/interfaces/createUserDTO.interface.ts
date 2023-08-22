import Gender from "../constants/Gender.enum";
import Role from "../constants/Role.enum";

interface createUserDTO {
  firstname: string;
  lastname: string;
  gender: Gender;
  gaf: string;
  course: string;
  role: Role;
  personalNumber: string;
  phoneNumber?: string;
  password: string;
}

export default createUserDTO;

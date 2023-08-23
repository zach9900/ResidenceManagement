import Gender from "../constants/Gender.enum";
import Permission from "../constants/Permission.enum";
import Role from "../constants/Role.enum";

export default interface Manager {
  firstname: string;
  lastname: string;
  gender: Gender;
  role: Role;
  personalNumber: string;
  phoneNumber: string;
  permissions: Array<Permission>;
}

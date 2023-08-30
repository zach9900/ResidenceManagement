import Base from "../constants/Base.enum";
import Gender from "../constants/Gender.enum";
import Permission from "../constants/Permission.enum";
import Role from "../constants/Role.enum";

export default interface Manager {
  firstname: string;
  lastname: string;
  gender: Gender;
  role: Role;
  hiltonNumber?: number;
  hitonFloorNumber?: number;
  personalNumber: string;
  phoneNumber: string;
  permissions: Array<Permission>;
  base: Base;
}

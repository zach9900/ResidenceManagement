import Manager from "../../interfaces/manager.interface";
import Base from "../Base.enum";
import Gender from "../Gender.enum";
import Permission from "../Permission.enum";
import Role from "../Role.enum";

const floor1Maneger: Manager = {
  firstname: "Nir",
  lastname: "Kalmanowich",
  gender: Gender.male,
  role: Role.FloorCommander,
  personalNumber: "4567854",
  phoneNumber: "0542514569",
  permissions: [Permission.techni192, Permission.floor1],
  base: Base.techni,
};

const floor2Maneger: Manager = {
  firstname: "Amit",
  lastname: "Leiba",
  gender: Gender.male,
  role: Role.FloorCommander,
  personalNumber: "7767854",
  phoneNumber: "0544444569",
  permissions: [Permission.techni192, Permission.floor2],
  base: Base.techni,
};

const floor3Maneger: Manager = {
  firstname: "Ron",
  lastname: "Shtar",
  gender: Gender.male,
  role: Role.FloorCommander,
  personalNumber: "7444854",
  phoneNumber: "0544488569",
  permissions: [Permission.techni192, Permission.floor3],
  base: Base.techni,
};

export { floor1Maneger, floor3Maneger, floor2Maneger };

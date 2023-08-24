import Manager from "../../interfaces/manager.interface";
import Base from "../Base.enum";
import Gender from "../Gender.enum";
import Permission from "../Permission.enum";
import Role from "../Role.enum";

const hiltonManeger: Manager = {
  firstname: "Juan",
  lastname: "Doe",
  gender: Gender.male,
  role: Role.HiltonCommander,
  personalNumber: "9587456",
  phoneNumber: "0542588969",
  permissions: [Permission.techni192],
  base: Base.techni,
};

export default hiltonManeger;

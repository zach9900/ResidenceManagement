import Base from "../constants/Base.enum";
import Gender from "../constants/Gender.enum";
import courseCommander from "./courseCommander.interface";

export default interface Solider {
  firstname: string;
  lastname: string;
  gender: Gender;
  personalNumber: string;
  gaf: string;
  course: string;
  hiltonNumber: number;
  roomNumber: number;
  commander: courseCommander;
  base: Base;
}

import Gender from "../constants/Gender.enum";
import Solider from "./solider.interface";

export default interface courseCommander {
  firstname: string;
  lastname: string;
  gender: Gender;
  personalNumber: string;
  phoneNumber: string;
  gaf: string;
  course: string;
  soldiersArray: Array<Solider>;
}

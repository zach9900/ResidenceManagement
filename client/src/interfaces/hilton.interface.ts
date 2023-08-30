import Gender from "../constants/Gender.enum";
import Manager from "./manager.interface";
import Floor from "./floor.interface";

export default interface Hilton {
  gender: Gender;
  manager: Manager;
  hiltonNumber: number;
  floors: Array<Floor>;
  latitude: number;
  longtitude: number;
}

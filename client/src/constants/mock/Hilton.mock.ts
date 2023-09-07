import Hilton from "../../interfaces/hilton.interface";
import Gender from "../Gender.enum";
import { floor1, floor3, floor2 } from "./floors.mock";
import hiltonManeger from "./hiltonManager.mock";

const mockHilton192: Hilton = {
  gender: Gender.male,
  manager: hiltonManeger,
  hiltonNumber: 192,
  floors: [floor1, floor2, floor3],
  latitude: 50,
  longtitude: 60,
};

const mockHilton198: Hilton = {
  gender: Gender.female,
  manager: hiltonManeger,
  hiltonNumber: 198,
  floors: [floor1, floor2, floor3],
  latitude: 50,
  longtitude: 60,
};

const mockHilton191: Hilton = {
  gender: Gender.male,
  manager: hiltonManeger,
  hiltonNumber: 191,
  floors: [floor1, floor2, floor3],
  latitude: 50,
  longtitude: 60,
};

const mockHilton190: Hilton = {
  gender: Gender.male,
  manager: hiltonManeger,
  hiltonNumber: 190,
  floors: [floor1, floor2, floor3],
  latitude: 50,
  longtitude: 60,
};

const hiltonsTechni: Array<Hilton> = [
  mockHilton190,
  mockHilton191,
  mockHilton192,
  mockHilton198,
];

const emptyHilton: Hilton = {
  gender: Gender.male,
  manager: hiltonManeger,
  hiltonNumber: 0,
  floors: [floor1, floor2, floor3],
  latitude: 0,
  longtitude: 0,
};

export { emptyHilton };
export default hiltonsTechni;

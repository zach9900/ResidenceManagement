import Hilton from "../../interfaces/hilton.interface";
import Gender from "../Gender.enum";
import { floor1, floor3, floor2 } from "./floors.mock";
import hiltonManeger from "./hiltonManager.mock";

const mockHilton: Hilton = {
  gender: Gender.male,
  manager: hiltonManeger,
  hiltonNumber: 192,
  floors: [floor1, floor2, floor3],
  latitude: 50,
  longtitude: 60,
};

export default mockHilton;

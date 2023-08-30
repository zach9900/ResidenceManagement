import Floor from "../../interfaces/floor.interface";
import {
  floor1Maneger,
  floor2Maneger,
  floor3Maneger,
} from "./floorManagers.mock";

const floor1: Floor = {
  manager: floor1Maneger,
  floorNum: 1,
  roomsArray: [],
};

const floor2: Floor = {
  manager: floor2Maneger,
  floorNum: 1,
  roomsArray: [],
};

const floor3: Floor = {
  manager: floor3Maneger,
  floorNum: 1,
  roomsArray: [],
};

export { floor1, floor2, floor3 };

import Manager from "./manager.interface";
import Room from "./room.interface";

export default interface Floor {
  manager: Manager;
  floorNum: number;
  roomsArray: Array<Room>;
}

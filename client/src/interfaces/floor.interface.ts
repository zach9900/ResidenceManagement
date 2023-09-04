import Manager from "./manager.interface";
import Room from "./room.interface";

export default interface FloorInterface {
  manager: Manager;
  floorNum: number;
  roomsArray: Array<Room>;
}

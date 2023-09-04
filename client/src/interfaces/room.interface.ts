import Solider from "./solider.interface";

export default interface RoomInteface {
  roomNum: number;
  totalBedsAmount: number;
  occupiedBedsAmount: number;
  soldiersArray: Array<Solider>;
}

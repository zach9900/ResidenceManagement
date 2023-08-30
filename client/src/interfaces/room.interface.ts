import Solider from "./solider.interface";

export default interface Room {
  roomNum: number;
  totalBedsAmount: number;
  occupiedBedsAmount: number;
  soldiersArray: Array<Solider>;
}

import Hilton from "../../interfaces/hilton.interface";
import Room from "../../interfaces/room.interface";
import Solider from "../../interfaces/solider.interface";
import Gender from "../Gender.enum";
import { floor1, floor3, floor2 } from "./floors.mock";
import hiltonManeger from "./hiltonManager.mock";
import courseCommander from "./courseCommanders.mock";

const room: Room = {
  roomNum: 0,
  totalBedsAmount: 0,
  occupiedBedsAmount: 0,
  soldiersArray: [],
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandSoldiers(
  occupiedBedsAmount: number,
  roomNumber: number
): Array<Solider> {
  const soldierRoomArr: Array<Solider> = [];
  for (let index = 0; index < occupiedBedsAmount; index++) {
    const soldier: Solider = {
      firstname: "",
      lastname: "",
      gender: Gender.male,
      personalNumber: "",
      gaf: "",
      course: "",
      roomNumber: roomNumber,
      hiltonNumber: 192,
      commander: courseCommander[getRandomInt(0, 2)],
    };

    soldierRoomArr[index] = soldier;
  }

  return soldierRoomArr;
}

function roomsFloorGenerator(floorNum: number) {
  const rooms: Array<Room> = [];
  for (let i = 0; i < 20; i++) {
    const totalBeds = 8;
    const occupiedBedsAmount = getRandomInt(0, totalBeds);
    console.log(occupiedBedsAmount);
    const roomNumber = i + 1 + (floorNum - 1) * 20;
    const room: Room = {
      roomNum: roomNumber,
      totalBedsAmount: totalBeds,
      occupiedBedsAmount: occupiedBedsAmount,
      soldiersArray: getRandSoldiers(occupiedBedsAmount, roomNumber),
    };
    rooms.push(room);
  }
}

const hilton: Hilton = {
  gender: Gender.male,
  manager: hiltonManeger,
  hiltonNumber: 192,
  floors: [floor1, floor3, floor2],
  latitude: 50,
  longtitude: 60,
};

export default hilton;

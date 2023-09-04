import Floor from "../../interfaces/floor.interface";
import Room from "../../interfaces/room.interface";
import Solider from "../../interfaces/solider.interface";
import Gender from "../Gender.enum";
import courseCommander from "./courseCommanders.mock";
import Base from "../Base.enum";
import {
  floor1Maneger,
  floor2Maneger,
  floor3Maneger,
} from "./floorManagers.mock";

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
    const commander = courseCommander[getRandomInt(0, 2)];
    const soldier: Solider = {
      firstname: "zach",
      lastname: "shueka",
      gender: Gender.male,
      personalNumber: "9025666",
      gaf: commander.gaf,
      course: commander.course,
      roomNumber: roomNumber,
      hiltonNumber: 192,
      commander: commander,
      base: Base.techni,
    };

    soldierRoomArr[index] = soldier;
  }

  return soldierRoomArr;
}

function roomsFloorGenerator(floorNum: number): Array<Room> {
  const rooms: Array<Room> = [];
  for (let i = 0; i < 20; i++) {
    const totalBeds = 8;
    const occupiedBedsAmount = getRandomInt(0, totalBeds);
    const roomNumber = i + 1 + floorNum * 20;
    const room: Room = {
      roomNum: roomNumber,
      totalBedsAmount: totalBeds,
      occupiedBedsAmount: occupiedBedsAmount,
      soldiersArray: getRandSoldiers(occupiedBedsAmount, roomNumber),
    };
    rooms.push(room);
  }

  return rooms;
}

const floor1: Floor = {
  manager: floor1Maneger,
  floorNum: 0,
  roomsArray: roomsFloorGenerator(0),
};

const floor2: Floor = {
  manager: floor2Maneger,
  floorNum: 1,
  roomsArray: roomsFloorGenerator(1),
};

const floor3: Floor = {
  manager: floor3Maneger,
  floorNum: 2,
  roomsArray: roomsFloorGenerator(2),
};

export { floor1, floor2, floor3 };

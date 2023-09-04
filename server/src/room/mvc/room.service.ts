import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetBaseDto } from '@utils/dtos';
import { Room } from '@utils/room.schema';
import { Soldier } from '@utils/soldier.schema';

type CreateBaseDto = string;
type UpdateBaseDto = string;

/*
  1.Update room by adding new soldier -> return soldier parmeters:soldier and room id
  2.Update room by removing soldier -> return soldier parameters:soldier and room id
  3.Get all soldiers in the room -> return soldiers array parameters:
  4.find soldier by id -> return soldier parameters:soldier id
*/
@Injectable()
export class RoomService {
  constructor(
    @InjectModel('Room')
    private readonly roomModel: Model<Room>,
  ) {}

  async addSoldierToRoom(
    roomNumber: number,
    soldierPersonalNumber: String,
  ): Promise<Room> {
    //CHANGE THIS FUNC TO BE WITH SOLDIER PERSONAL NUMBER INSTEAD SOLDIER SCHEMA
    const Room = await this.findRoomByNumber(roomNumber);
    //Get soldier by presonal number
    Room.soldiers.push(soldier);
    //call update soldier room number function
    return await this.roomModel.updateOne(roomNumber, Room);
  }

  async removeSoldierFromRoom(
    roomNumber: number,
    soldierPersonalNumber: String,
  ): Promise<Room> {
    //CHANGE THIS FUNC TO BE WITH SOLDIER PERSONAL NUMBER INSTEAD SOLDIER SCHEMA
    const Room = await this.findRoomByNumber(roomNumber);
    //Get soldier by presonal number
    const soldierIndex = Room.soldiers.indexOf(soldier);
    if (soldierIndex !== -1) {
      Room.soldiers.splice(soldierIndex, 1);
    }
    //call update soldier room number function
    return await this.roomModel.updateOne(roomNumber, Room);
  }

  async getAllSoldiersByRoomId(roomNumber: number): Promise<Soldier[]> {
    const Room = await this.findRoomByNumber(roomNumber);
    return Room.soldiers;
  }

  async findRoomByNumber(roomNumber: number): Promise<Room> {
    return await this.roomModel.findOne({ roomNumber }).exec();
  }
}

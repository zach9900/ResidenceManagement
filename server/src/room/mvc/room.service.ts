import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from '@utils/room.schema';
import { Soldier } from '@utils/soldier.schema';
import { SoldierService } from '@modules/soldier.service';
import { UpdateSoldierWithRoomDto } from '@utils/UpdateSoldierWithRoomDto.dto';
import { UpdateSoldierDto } from '@utils/updateSoldier.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel('Room')
    private readonly roomModel: Model<Room>,
    private readonly soldierService: SoldierService,
  ) {}

  async addSoldierToRoom(updateDto: UpdateSoldierDto): Promise<Room> {
    const Room = await this.findRoomByNumber(updateDto.roomNumber);
    const soldier = await this.soldierService.getSoldierByPersonalNumber(
      updateDto.soldierPersonalNumber,
    );

    if (!Room.soldiers.includes(soldier)) {
      Room.soldiers.push(soldier);
    }
    await this.soldierService.updateSoldierWithRoom({
      soldierPersonalNumber: updateDto.soldierPersonalNumber,
      updateRoomNumber: updateDto.roomNumber,
    } as UpdateSoldierWithRoomDto);
    return await this.roomModel
      .findOneAndUpdate(
        { roomNumber: updateDto.roomNumber },
        { soldiers: Room.soldiers },
        { new: true },
      )
      .exec();
  }

  async removeSoldierFromRoom(updateDto: UpdateSoldierDto): Promise<Room> {
    const Room = await this.findRoomByNumber(updateDto.roomNumber);
    const RemovedSoldier = await this.soldierService.getSoldierByPersonalNumber(
      updateDto.soldierPersonalNumber,
    );
    const updatedSoldiers = Room.soldiers.filter(
      (soldier) => soldier !== RemovedSoldier,
    );
    await this.soldierService.updateSoldierWithRoom({
      soldierPersonalNumber: updateDto.soldierPersonalNumber,
      updateRoomNumber: NO_ROOM,
    } as UpdateSoldierWithRoomDto);
    return await this.roomModel
      .findOneAndUpdate(
        { roomNumber: updateDto.roomNumber },
        { soldiers: updatedSoldiers },
        { new: true },
      )
      .exec();
  }

  async getAllSoldiersByRoomId(roomNumber: number): Promise<Soldier[]> {
    const Room = await this.findRoomByNumber(roomNumber);
    return Room.soldiers;
  }

  async findRoomByNumber(roomNumber: number): Promise<Room> {
    return await this.roomModel.findOne({ roomNumber }).exec();
  }
}

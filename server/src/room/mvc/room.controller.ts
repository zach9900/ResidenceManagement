import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomService } from '.';
import { GetBaseDto } from '@utils/dtos';
import { Soldier } from '@utils/soldier.schema';

type CreateBaseDto = string;
type UpdateBaseDto = string;

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Patch('updateSoldierRoom/:roomNumber/:soldierPersonalNumber/:method')
  updateSoldierRoom(
    @Param('roomNumber') roomNumber: number,
    @Param('soldierPersonalNumber') soldierPersonalNumber: string,
    @Param('method') method: string,
  ) {
    return this.roomService.updateSoldierRoom(
      roomNumber,
      soldierPersonalNumber,
      method,
    );
  }

  @Get('allSoldiers')
  async findAll(@Param('roomNumber') roomNumber: number): Promise<Soldier[]> {
    return await this.roomService.getAllSoldiersByRoomId(roomNumber);
  }
}

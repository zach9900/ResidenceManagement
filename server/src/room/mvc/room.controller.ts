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
import { Soldier } from '@utils/soldier.schema';
import { UpdateSoldierDto } from '@utils/updateSoldier.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Room } from '@utils/room.schema';

@ApiTags('Room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiOperation({
    summary: 'add a soldier into specific room',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Patch('addSoldierRoom')
  addSoldierToRoom(@Body() updateSoldierDto: UpdateSoldierDto): Promise<Room> {
    return this.roomService.addSoldierToRoom(updateSoldierDto);
  }

  @ApiOperation({
    summary: 'remove soldier from specific room',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Patch('removeSoldierRoom')
  removeSoldierFromRoom(
    @Body() updateSoldierDto: UpdateSoldierDto,
  ): Promise<Room> {
    return this.roomService.removeSoldierFromRoom(updateSoldierDto);
  }

  @ApiOperation({ summary: 'returns all the soldiers in specific room' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Get('allSoldiers/:roomNumber')
  async findAll(@Param('roomNumber') roomNumber: number): Promise<Soldier[]> {
    return await this.roomService.getAllSoldiersByRoomId(roomNumber);
  }
}

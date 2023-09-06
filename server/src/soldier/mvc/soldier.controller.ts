import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SoldierService } from '.';
import { Soldier } from '@utils/soldier.schema';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddSoldierDto } from '@utils/dtos/registerSoldier.dto';
import { UpdateSoldierWithCommanderDto } from '@utils/updateSoldierWithCommander.dto';
import { UpdateSoldierWithHiltonDto } from '@utils/updateSoldierWithHiltonDto.dto';
import { UpdateSoldierWithRoomDto } from '@utils/UpdateSoldierWithRoomDto.dto';

@Controller('soldier')
export class SoldierController {
  constructor(private readonly soldierService: SoldierService) {}
  @ApiOperation({
    summary: 'add a soldier into system',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Post('addSoldier')
  addSoldier(@Body() addSoldierDto: AddSoldierDto) {
    return this.soldierService.insertSoldier(addSoldierDto);
  }

  @ApiOperation({
    summary: 'remove soldier from system',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Delete('deleteSoldier/:soldierPersonalNumber')
  deleteSoldier(
    @Param('soldierPersonalNumber') soldierPersonalNumber: String,
  ): Promise<Soldier> {
    return this.soldierService.deleteSoldierByPersonalNum(
      soldierPersonalNumber,
    );
  }

  @ApiOperation({
    summary: 'get soldier by specific ID',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Get('getSoldier/:soldierPersonalNumber')
  getSoldier(
    @Param('soldierPersonalNumber') soldierPersonalNumber: String,
  ): Promise<Soldier> {
    return this.soldierService.getSoldierByPersonalNumber(
      soldierPersonalNumber,
    );
  }

  @ApiOperation({ summary: 'update the soldier with his personal commander' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Patch('updateSoldierWithCommander')
  async updateSoldierWithCommander(
    @Body() updateSoldierWithCommanderDto: UpdateSoldierWithCommanderDto,
  ): Promise<Soldier> {
    return await this.soldierService.updateSoldierWithCommander(
      updateSoldierWithCommanderDto,
    );
  }

  @ApiOperation({ summary: 'update the soldier with his hilton number' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Patch('updateSoldierWithHilton')
  async updateSoldierWithHilton(
    @Body() updateDto: UpdateSoldierWithHiltonDto,
  ): Promise<Soldier> {
    return await this.soldierService.updateSoldierWithHilton(updateDto);
  }

  @ApiOperation({ summary: 'update the soldier with his room number' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @Patch('updateSoldierWithRoom')
  async updateSoldierWithRoom(
    @Body() updateDto: UpdateSoldierWithRoomDto,
  ): Promise<Soldier> {
    return await this.soldierService.updateSoldierWithRoom(updateDto);
  }
}

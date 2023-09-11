import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from '@utils/room.schema';
import { Soldier, SoldierDocument } from '@utils/soldier.schema';
import { Commander } from '@utils/commander.schema';
import { CourseCommander } from '@utils/schemas';
import { CourseCommanderService } from '@modules/courseCommander.service';
import { AddSoldierDto } from '@utils/dtos/registerSoldier.dto';
import { BaseService } from '@modules/base.service';
import { UpdateSoldierWithHiltonDto } from '@utils/updateSoldierWithHiltonDto.dto';
import { UpdateSoldierWithRoomDto } from '@utils/UpdateSoldierWithRoomDto.dto';
import { UpdateSoldierWithCommanderDto } from '@utils/updateSoldierWithCommander.dto';

@Injectable()
export class SoldierService {
  constructor(
    @InjectModel('Soldier')
    private readonly soldierModel: Model<SoldierDocument>,
    private readonly courseCommanderService: CourseCommanderService,
    private readonly baseService: BaseService,
  ) {}

  async insertSoldier(soldier: AddSoldierDto): Promise<Soldier> {
    //implement find base function
    const baseToAdd = await this.baseService.findBase(soldier.base);
    //implement find course commander by personal number function
    const commandToAdd =
      await this.courseCommanderService.findCommanderByPersonalNum(
        soldier.PersonalNumberOfCommander,
      );
    const newSoldier = await new this.soldierModel({
      firstname: soldier.firstName,
      lastname: soldier.lastName,
      gender: soldier.gender,
      personalNumber: soldier.soldierPersonalNumber,
      gaf: soldier.gaf,
      personalCommander: commandToAdd,
      base: baseToAdd,
      course: soldier.course,
    });
    return newSoldier.save();
  }

  async deleteSoldierByPersonalNum(personalNumber: String): Promise<Soldier> {
    return this.soldierModel.findOneAndDelete({ personalNumber }).exec();
  }

  async getSoldierByPersonalNumber(
    soldierPersonalNumber: String,
  ): Promise<Soldier> {
    return await this.soldierModel.findOne({ soldierPersonalNumber }).exec();
  }

  async updateSoldierWithCommander(
    updateDto: UpdateSoldierWithCommanderDto,
  ): Promise<Soldier> {
    //Find Course Commander fix course commander
    const soldierPersonalNumber = updateDto.soldierPersonalNumber;
    const courseCommnder =
      await this.courseCommanderService.findCommanderByPersonalNum(
        updateDto.courseCommanderPersonalNumber,
      );
    return await this.soldierModel
      .findOneAndUpdate(
        { soldierPersonalNumber },
        { personalCommander: courseCommnder },
        { new: true },
      )
      .exec();
  }

  async updateSoldierWithHilton(
    updateDto: UpdateSoldierWithHiltonDto,
  ): Promise<Soldier> {
    const soldierPersonalNumber = updateDto.soldierPersonalNumber;
    const UpdateHiltonNumber = updateDto.updateHiltonNumber;
    return await this.soldierModel
      .findOneAndUpdate(
        { soldierPersonalNumber },
        { hiltonNumber: UpdateHiltonNumber },
        { new: true },
      )
      .exec();
  }

  async updateSoldierWithRoom(
    updateDto: UpdateSoldierWithRoomDto,
  ): Promise<Soldier> {
    const soldierPersonalNumber = updateDto.soldierPersonalNumber;
    const UpdateRoomNumber = updateDto.updateRoomNumber;
    return await this.soldierModel
      .findOneAndUpdate(
        { soldierPersonalNumber },
        { roomNumber: UpdateRoomNumber },
        { new: true },
      )
      .exec();
  }
}

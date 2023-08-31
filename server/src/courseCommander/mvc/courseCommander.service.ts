import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CourseCommanderDto } from '@utils/dtos';
import { CourseCommander } from '@utils/schemas';
import { Model } from 'mongoose';

@Injectable()
export class CourseCommanderService {
  constructor(
    @InjectModel('CourseCommander')
    private readonly courseCommanderModel: Model<CourseCommander>,
  ) {}

  async insertCommander(
    commander: CourseCommanderDto,
  ): Promise<CourseCommander> {
    const newCommander = await new this.courseCommanderModel(commander);
    return newCommander.save();
  }

  async findCommanderByPersonalNum(
    personalNumber: string,
  ): Promise<CourseCommander> {
    return this.courseCommanderModel.findOne({ personalNumber }).exec();
  }

  async findAllCommanders(): Promise<Array<CourseCommander>> {
    return this.courseCommanderModel.find().exec();
  }

  async updateOneById(
    personalNumber: string,
    updateData: Partial<CourseCommanderDto>,
  ): Promise<CourseCommander> {
    return this.courseCommanderModel
      .findOneAndUpdate({ personalNumber }, updateData, { new: true })
      .exec();
  }

  async deleteCommanderByPersonalNum(
    personalNumber: string,
  ): Promise<CourseCommander> {
    return this.courseCommanderModel
      .findOneAndDelete({ personalNumber })
      .exec();
  }
}

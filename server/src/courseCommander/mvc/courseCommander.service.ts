import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseCommander } from '../models/courseCommander.dto';

@Injectable()
export class CourseCommanderService {
  constructor(
    @InjectModel('CourseCommander')
    private readonly courseCommanderModel: Model<CourseCommander>,
  ) {}

  async insertCommander(commander: CourseCommander): Promise<CourseCommander> {
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
    updateData: Partial<CourseCommander>,
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

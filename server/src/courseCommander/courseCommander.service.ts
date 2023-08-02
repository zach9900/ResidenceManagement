import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseCommander } from './models/courseCommander.dto';

@Injectable()
export class CourseCommanderService {
  constructor(
    @InjectModel('CourseCommander')
    private readonly courseCommanderModel: Model<CourseCommander>,
  ) {}
  async insertCommander(commander: CourseCommander): Promise<CourseCommander> {
    const newCommander = await new this.courseCommanderModel(commander);
    const result = await newCommander.save();
    return result;
  }
}

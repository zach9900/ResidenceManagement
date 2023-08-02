import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseCommanderService } from './courseCommander.service';
import { CourseCommander } from './models/courseCommander.dto';

@Controller('/courseCommanderModule')
export class CourseCommanderController {
  constructor(private readonly courseCommanderService: CourseCommanderService) {
    const soldiers = [];
  }

  @Post()
  async addCommander(
    @Body() commander: CourseCommander,
  ): Promise<CourseCommander> {
    const res = await this.courseCommanderService.insertCommander(commander);
    return res;
  }
}

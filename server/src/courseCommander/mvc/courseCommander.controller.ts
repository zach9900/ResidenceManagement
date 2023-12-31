import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseCommanderService } from './courseCommander.service';
import { CourseCommander } from '../models/courseCommander.dto';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('courseCommander')
@Controller('courseCommander')
export class CourseCommanderController {
  constructor(private readonly courseCommanderService: CourseCommanderService) {
    const soldiers = [];
  }

  @Post()
  @ApiOperation({ summary: 'insert a course commander' })
  @ApiCreatedResponse({
    description: 'course commander created',
    type: CourseCommander,
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async addCommander(
    @Body() commander: CourseCommander,
  ): Promise<CourseCommander> {
    const res = await this.courseCommanderService.insertCommander(commander);
    return res;
  }

  @Get(':personalNumber')
  @ApiOperation({ summary: 'returns a course commander by personal number' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  async findOneByPersonalNumber(
    @Param('personalNumber') personalNumber: string,
  ) {
    return await this.courseCommanderService.findCommanderByPersonalNum(
      personalNumber,
    );
  }

  @Get()
  @ApiOperation({ summary: 'returns all course commanders' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  async findAll() {
    return await this.courseCommanderService.findAllCommanders();
  }

  @Put(':personalNumber')
  @ApiOperation({
    summary:
      'updates a course commander by personal number with new data given',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  async updateOne(
    @Param('personalNumber') personalNumber: string,
    @Body() updateData: CourseCommander,
  ): Promise<CourseCommander> {
    return this.courseCommanderService.updateOneById(
      personalNumber,
      updateData,
    );
  }

  @Delete(':personalNumber')
  @ApiOperation({ summary: 'deletes a course commander by personal number' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  async deleteByPersonalNumber(
    @Param('personalNumber') personalNumber: string,
  ) {
    return await this.courseCommanderService.deleteCommanderByPersonalNum(
      personalNumber,
    );
  }
}

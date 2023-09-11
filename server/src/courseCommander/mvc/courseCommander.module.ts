import { Module } from '@nestjs/common';
import { CourseCommanderController } from './courseCommander.controller';
import { CourseCommanderService } from './courseCommander.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderSchema } from '../models/courseCommander.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CourseCommander', schema: CourseCommanderSchema },
    ]),
  ],
  controllers: [CourseCommanderController],
  providers: [CourseCommanderService],
  exports: [CourseCommanderService]
})
export class CourseCommanderModule {}

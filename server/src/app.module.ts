import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderModule } from './courseCommander/mvc/courseCommander.module';
import { BaseModule } from '@modules/base.module';

@Module({
  imports: [
    CourseCommanderModule,
    BaseModule,
    MongooseModule.forRoot(process.env.DB_PATH),
  ],
})
export class AppModule {}

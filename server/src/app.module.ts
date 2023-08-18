import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderModule } from './courseCommander/mvc/courseCommander.module';

@Module({
  imports: [
    CourseCommanderModule,
    MongooseModule.forRoot(
      process.env.DB_PATH,
    ),
  ],
})
export class AppModule {}

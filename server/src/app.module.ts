import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderModule } from './courseCommander/courseCommander.module';

@Module({
  imports: [
    CourseCommanderModule,
    MongooseModule.forRoot(
      'mongodb+srv://1400tzevet2:1400tzevet2@cluster0.lykctdj.mongodb.net/',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

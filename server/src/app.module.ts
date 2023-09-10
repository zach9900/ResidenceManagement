import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderModule } from './courseCommander/mvc/courseCommander.module';
import { BaseModule } from '@modules/base.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    CourseCommanderModule,
    BaseModule,
    MongooseModule.forRoot(process.env.DB_PATH),
  ],
})
export class AppModule {}

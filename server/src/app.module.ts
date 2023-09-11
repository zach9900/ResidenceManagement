import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderModule } from './courseCommander/mvc/courseCommander.module';
import { BaseModule } from '@modules/base.module';
import { ConfigModule } from '@nestjs/config';
import { CommanderModule } from './commander/mvc/commander.module';
import { FloorModule } from '@modules/floor.module';
import { HiltonModule } from '@modules/hilton.module';
import { ManagerModule } from './manager/mvc/manager.module';
import { RoomModule } from './room';
import { SoldierModule } from './soldier';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    BaseModule,
    CommanderModule,
    CourseCommanderModule,
    FloorModule,
    HiltonModule,
    ManagerModule,
    RoomModule,
    SoldierModule,
    MongooseModule.forRoot(process.env.DB_PATH),
  ],
})
export class AppModule {}

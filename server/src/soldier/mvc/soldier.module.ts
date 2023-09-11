import { Module } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { SoldierController } from './soldier.controller';
import { Soldier, SoldierSchema } from '@utils/soldier.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseCommanderModule } from '@modules/courseCommander.module';
import { BaseModule } from '@modules/base.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Soldier.name, schema: SoldierSchema }]),
    CourseCommanderModule,
    BaseModule,
  ],
  controllers: [SoldierController],
  providers: [SoldierService],
  exports: [SoldierService],
})
export class SoldierModule {}

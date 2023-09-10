import { Module } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { SoldierController } from './soldier.controller';
import { Soldier, SoldierSchema } from '@utils/soldier.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Soldier.name, schema: SoldierSchema }]),
  ],
  controllers: [SoldierController],
  providers: [SoldierService],
})
export class SoldierModule {}

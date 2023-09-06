import { Module } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { SoldierController } from './soldier.controller';

@Module({
  controllers: [SoldierController],
  providers: [SoldierService],
})
export class SoldierModule {}

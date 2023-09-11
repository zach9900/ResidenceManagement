import { Module } from '@nestjs/common';
import { FloorController } from './floor.controller';
import { FloorService } from './floor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Floor, FloorSchema } from '@utils/floor.schema';
import { RoomModule } from '@modules/room.module';
import { CommanderModule } from 'src/commander/mvc/commander.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Floor.name, schema: FloorSchema }]),
        RoomModule,
        CommanderModule,
    ],
    controllers: [FloorController],
    providers: [FloorService],
    exports: [FloorService],
})
export class FloorModule { };

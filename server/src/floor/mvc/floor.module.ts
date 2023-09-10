import { Module } from '@nestjs/common';
import { FloorController } from './floor.controller';
import { FloorService } from './floor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Floor, FloorSchema } from '@utils/floor.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Floor.name, schema: FloorSchema }])],
    controllers: [FloorController],
    providers: [FloorService]
})
export class FloorModule { };

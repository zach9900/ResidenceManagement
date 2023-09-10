import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddFloorDto } from '@utils/add-floor.dto';
import { GeoCoordinateDto } from '@utils/dtos';
import { Floor, FloorDocument } from '@utils/floor.schema';
import { GetFloorDto } from '@utils/get-floor.dto';
import { HiltonDocument } from '@utils/hilton.schema';
import { RoomDocument } from '@utils/room.schema';
import { Model } from 'mongoose';

@Injectable()
export class FloorService {
    constructor(
        private readonly roomService: RoomService,
        private readonly commanderService: CommanderService,
        @InjectModel(Floor.name) private readonly floorModel: Model<Floor>,
    ) {}

    async getFloor(floor: GetFloorDto) {
        const wantedFloor = await this.floorModel.findOne(
            { geoLocation: floor.geoLocation }
        ).exec();

        return await wantedFloor.populate('rooms');
    }

    async getFloors(hilton: HiltonDocument) {
        const hiltonWithFloorsAndRooms = (await hilton.populate({
            path: 'floors',
            populate: {
                path: 'rooms',
            }
        }));

        return hiltonWithFloorsAndRooms.floors.map((floor) =>
            floor.rooms.map((room) => { room.bedsNumber, room.freeBeds, room.roomNumber }));
    }

    async createFloor(floor: AddFloorDto): Promise<FloorDocument> {
        const newFloor = new this.floorModel({
            floorNumber: floor.floorNumber,
            geoLocation: floor.geoLocation
        });

        for (const room of floor.rooms) {
            const newRoom: RoomDocument = await this.roomService.createRoom(room);
            newFloor.rooms.push(newRoom._id);
        }

        return await newFloor.save();
    }

    async updateHiltonWithManager(floorLocation: GeoCoordinateDto, floorManager: FloorManagerDto) {
        const floorToUpdate = await this.floorModel.findOne(
            { geoLocation: floorLocation }
        ).exec();

        if (floorToUpdate === null || floorToUpdate === undefined) return null;

        const savedFloorManager = await this.commanderService.createFloorManager(floorManager);
        floorToUpdate.floorManager = savedFloorManager._id;

        return await floorToUpdate.save();
    }
}

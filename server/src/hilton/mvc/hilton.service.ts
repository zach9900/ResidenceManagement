import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Hilton } from '../models/hilton.schema';
import { InjectModel } from '@nestjs/mongoose';
import { AddHiltonDto } from '@utils/add-hilton.dto';
import { GeoCoordinateDto, GetHiltonDto } from '@utils/dtos';

@Injectable()
export class HiltonService {
    constructor(@InjectModel(Hilton.name) private readonly hiltonModel: Model<Hilton>) {}
    
    async getHilton(hilton: GetHiltonDto) {
        const wantedHilton = await this.hiltonModel.findOne({
            buildingNumber: hilton.hiltonNumber,
        }).exec();
        
        const hiltonWithFloors = (await wantedHilton.populate({
            path: 'floors',
            populate: {
                path: 'rooms',
            }
        }));
        
        return hiltonWithFloors.floors.map((floor) => floor.rooms.map((room) => { room.bedsNumber, room.freeBeds, room.roomNumber }));
    }
    
    async createHilton(hilton: AddHiltonDto) {
        const newHilton = new this.hiltonModel({
            allowedGender: hilton.allowedGender,
            buildingNumber: hilton.buildingNumber,
            geoCenter: hilton.geoCenter
        });
        return await newHilton.save();
    }
    
    async updateHiltonWithFloors(buildingLocation: GeoCoordinateDto, floors: FloorDto[]) {
        const hiltonToUpdate = await this.hiltonModel.findOne(
            { geoCenter: buildingLocation }
        ).exec();
        
        if (hiltonToUpdate !== undefined) return null;

        for (const floor in floors) {
            const savedFloor = await this.floorService.createFloor(floor);
            hiltonToUpdate.floors.push(savedFloor._id);
        }
        return await hiltonToUpdate.save();
    }
        
    async updateHiltonWithManager(buildingLocation: GeoCoordinateDto, buildingManager: BuildingMaanagerDto) {
        const hiltonToUpdate = await this.hiltonModel.findOne(
            { geoCenter: buildingLocation }
        ).exec();
        
        if (hiltonToUpdate !== undefined) return null;

        const savedBuildingManager = await this.commanderService.createBuildingManager(buildingManager);
        hiltonToUpdate.buildingManager = savedBuildingManager._id;
        return await hiltonToUpdate.save();
    }
}
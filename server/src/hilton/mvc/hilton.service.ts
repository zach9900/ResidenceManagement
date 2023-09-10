import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Hilton, HiltonDocument } from '../models/hilton.schema';
import { InjectModel } from '@nestjs/mongoose';
import { AddHiltonDto } from '@utils/add-hilton.dto';
import { GeoCoordinateDto, GetHiltonDto } from '@utils/dtos';
import { FloorService } from '@modules/floor.service';
import { AddFloorDto } from '@utils/add-floor.dto';
import { FloorDocument } from '@utils/floor.schema';

@Injectable()
export class HiltonService {
    constructor(
        private readonly floorService: FloorService,
        private readonly commanderService: CommanderService,
        @InjectModel(Hilton.name) private readonly hiltonModel: Model<Hilton>,
    ) {}
    
    async getHilton(hilton: GetHiltonDto) {
        const wantedHilton: HiltonDocument = await this.hiltonModel.findOne({
            geoCenter: hilton.geoCenter,
        }).exec();
        
        return this.floorService.getFloors(wantedHilton);
    }
    
    async createHilton(hilton: AddHiltonDto) {
        const newHilton = new this.hiltonModel({
            allowedGender: hilton.allowedGender,
            buildingNumber: hilton.buildingNumber,
            geoCenter: hilton.geoCenter
        });

        return await newHilton.save();
    }
    
    async updateHiltonWithFloors(buildingLocation: GeoCoordinateDto, floors: AddFloorDto[]) {
        const hiltonToUpdate = await this.hiltonModel.findOne(
            { geoCenter: buildingLocation }
        ).exec();
        
        if (hiltonToUpdate !== undefined) return null;

        for (const floor of floors) {
            const savedFloor = await this.floorService.createFloor(floor);
            hiltonToUpdate.floors.push(savedFloor._id);
        }
        return await hiltonToUpdate.save();
    }
        
    async updateHiltonWithManager(buildingLocation: GeoCoordinateDto, buildingManager: BuildingManagerDto) {
        const hiltonToUpdate = await this.hiltonModel.findOne(
            { geoCenter: buildingLocation }
        ).exec();
        
        if (hiltonToUpdate !== undefined) return null;

        const savedBuildingManager = await this.commanderService.createBuildingManager(buildingManager);
        hiltonToUpdate.buildingManager = savedBuildingManager._id;
        return await hiltonToUpdate.save();
    }
}
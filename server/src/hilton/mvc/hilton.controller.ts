import { Controller, Get, Body, Post, Patch } from '@nestjs/common';
import { HiltonService } from './hilton.service';
import { GetHiltonDto } from '@utils/get-hilton.dto';
import { AddHiltonDto } from '../models/add-hilton.dto';
import { GeoCoordinateDto } from '@utils/dtos';
import { ApiTags } from '@nestjs/swagger';
import { AddFloorDto } from '@utils/add-floor.dto';
import { BuildingManagerDto } from '@utils/building-manager.dto';

@ApiTags('Hilton')
@Controller('hilton')
export class HiltonController {
    constructor(private readonly hiltonService: HiltonService) {}

    @Get()
    async readHilton(@Body() getHiltonDto: GetHiltonDto) {
        return await this.hiltonService.getHilton(getHiltonDto);
    }

    @Post()
    async createHilton(@Body() addHiltonDto: AddHiltonDto) {
        return await this.hiltonService.createHilton(addHiltonDto);
    }

    @Patch('add-floors')
    async updateHiltonWithFloors(@Body() buildingLocation: GeoCoordinateDto, @Body() floors: AddFloorDto[]) {
        return await this.hiltonService.updateHiltonWithFloors(buildingLocation, floors);
    }

    @Patch('add-building-manager')
    async updateHiltonWithManager(@Body() buildingLocation: GeoCoordinateDto, @Body() buildingManager: BuildingManagerDto) {
        return await this.hiltonService.updateHiltonWithManager(buildingLocation, buildingManager);
    }
}
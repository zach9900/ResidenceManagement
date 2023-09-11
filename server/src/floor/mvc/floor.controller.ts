import { Controller, Get, Patch, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FloorService } from './floor.service';
import { GetFloorDto } from '@utils/get-floor.dto';
import { AddFloorDto } from '@utils/add-floor.dto';
import { GeoCoordinateDto } from '@utils/dtos';
import { FloorManagerDto } from '@utils/floor-manager.dto';

@ApiTags('Floor')
@Controller('floor')
export class FloorController {
    constructor(private readonly floorService: FloorService) {}

    @Get()
    async readFloor(@Body() floor: GetFloorDto) {
        return await this.floorService.getFloor(floor);
    }

    @Patch()
    async updateFloorWithManager(@Body() floorLocation: GeoCoordinateDto, @Body() floorManager: FloorManagerDto) {
        return await this.floorService.updateFloorWithManager(floorLocation, floorManager);
    }
}

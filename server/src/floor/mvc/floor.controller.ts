import { Controller, Get, Patch, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FloorService } from './floor.service';

@ApiTags('Floor')
@Controller('floor')
export class FloorController {
    constructor(private readonly floorService: FloorService) {}

    @Get()
    async readFloor() {
        
    }

    @Post()
    async createFloor() {

    }

    @Patch()
    async updateFloorWithManager() {

    }
}

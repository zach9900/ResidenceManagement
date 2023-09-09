import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ApiTags } from '@nestjs/swagger';
import { GetManagerDto } from '@utils/get-manager.dto';
import { AddManagerDto } from '@utils/add-manager.dto';
import { UpdateManagerDto } from '@utils/update-manager.dto';

@ApiTags('Manager')
@Controller('manager')
export class ManagerController {
    constructor(private readonly managerService: ManagerService) {}

    @Get()
    async readManager(@Body() getManagerDto: GetManagerDto) {
        return await this.managerService.getManager(getManagerDto.personalNumber);
    }

    @Post()
    async createManager(@Body() newManager: AddManagerDto) {
        return await this.managerService.addManager(newManager);
    }

    @Patch()
    async updateManager(@Body() managerToUpdate: UpdateManagerDto) {
        return await this.managerService.updateManager(managerToUpdate);
    }

    @Delete()
    async deleteManager(@Body() managerToDelete: GetManagerDto) {
        return await this.managerService.getManagerAndDelete(managerToDelete);
    }
}